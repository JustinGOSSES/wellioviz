!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.commonJsModule=e():"undefined"!=typeof global?global.commonJsModule=e():"undefined"!=typeof self&&(self.commonJsModule=e())}(function(){var define,module,exports;module={exports:(exports={})};

// var fs = require('fs');

module.exports = {
  ///////////////////////////////
  //// based off of this sketch: https://observablehq.com/@justingosses/well-log-in-d3-js-v5
  ///////////////////////////////
  fromJSONofWEllGetThingsForPlotting:function(jsonWell){
    let curve_names = Object.keys(jsonWell["CURVES"])
    let uwi = jsonWell["WELL INFORMATION BLOCK"]["UWI"]["DATA"]
    let well_log_curves_reformatted_for_d3 = convertWellJSONToObj(jsonWell,curve_names,uwi)
  return {"well_log_curves_reformatted_for_d3":well_log_curves_reformatted_for_d3,"curve_names":curve_names,"uwi":uwi}
  },
  //// Example template
  //well_curve_config_template_new_well_01_01_095_19W4 = [{"multipleLines":"yes","curveNames":["GR"],"curveColors":["pink"],"data":well_log_curves_reformatted_for_d3_2,"width":200,"height":400,"margin":({top: 20, right: 3, bottom: 30, left: 30}),"depth_curve_name":"DEPTH"}]
  ////////////
  convertWellJSONToObj:function  (well_log_json,CurveNames,UWI){
    let depth = well_log_json["CURVES"]["DEPTH"]
    let curve_data = []
    for(let eachCr in CurveNames){
      curve_data.push(well_log_json["CURVES"][CurveNames[eachCr]])
    }
    let array_of_obj = []
    if (depth.length === well_log_json["CURVES"][CurveNames[0]].length){
       for(let eachPt in depth){
         let obj = {}
         obj["UWI"] = UWI
         for(let i in CurveNames){
            obj[CurveNames[i]] = parseFloat(curve_data[i][eachPt])
         }
         array_of_obj.push(obj) 
       }
     }
    else{
      console.log("depth didn't match curve length")
      array_of_obj.push("depth didn't match curve length")
    }
    return array_of_obj
  },
  ///////////
  CurveBox:function (well_curve_config_template){
    //// Getting the variables out of the input json template
    well_curve_config_template = well_curve_config_template[0]
    let multipleLines = well_curve_config_template["multipleLines"]
    let curveNames = well_curve_config_template["curveNames"]
    let curveColors = well_curve_config_template["curveColors"]
    let curveName = curveNames[0]
    let curveColor = curveColors[0]
    ////
    let data = well_curve_config_template["data"]
    let width = well_curve_config_template["width"]
    let height = well_curve_config_template["height"]
    let margin = well_curve_config_template["margin"]
    let depth_curve_name = well_curve_config_template["depth_curve_name"]
    //// Calculate depth min and max
    let depth_min
    if(!depth_min){depth_min = d3.min(data, function(d) { return +d[depth_curve_name];});}
    let depth_max
    if(!depth_max){depth_max = d3.max(data, function(d) { return +d[depth_curve_name];});}
    // Calculate x domain extent for one or more than one curve
    let mins = []
    let maxes = []
    for (let i = 0; i < curveNames.length; i++) {
      let min_this = d3.min(data, function(d) { return +d[curveNames[i]]})
      let max_this = d3.max(data, function(d) { return +d[curveNames[i]]})
      mins.push(min_this)
      maxes.push(max_this)
    }
    let min_all_curves = d3.min(mins)
    let max_all_curves = d3.max(maxes)
    //// Calculate Axis & Scales
    let x = d3.scaleLinear().domain([min_all_curves,max_all_curves]).nice().range([margin.left, width - margin.right])
    let y = d3.scaleLinear().domain([depth_max, depth_min]).nice().range([height - margin.bottom, margin.top])
    let xAxis = g => g.attr("transform", `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
    let yAxis = g => g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y)).call(g => g.select(".domain").remove())
    /////// All variables created above now they are applied below
    /////// , some in for loops for multiple curves and areas
    
   /////// attempt at function for color used in .....
    function colors(data_array){
    let color_array = []
    for (let i =0;i<data_array.length;i++){
       if (data[i][curveName] > 0){
         color_array.push =("blue")
       } 
       else {
         color_array.push("green")
       }
     }
     return color_array
    }
  
    //// START to make the firt SVG
    const svg = d3.create("svg")
    svg.attr("class","first")
    svg.attr("width",width)
        .attr("height",height);
    svg.append("g")
        .call(xAxis);
    svg.append("g")
        .call(yAxis);
   /////// throw away code for single curve to plot that will be deleted soon  
   ///// was here:
  //// Code that assumes multiple curves are plotted in same curvebox   
    if(multipleLines == "yes"){
      for (let k = 0; k < curveNames.length; k++) {
        ///// code that creates a line for each Curve in order provided and applies 
        ///// the color in the color array in order provided
        let another_line = d3.line().x(d => x(d[curveNames[k]])).y(d => y(d[depth_curve_name]));
        svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", curveColors[k])
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", another_line);
      } 
    // define the area filled under the curve
       let two_curve_fill_flag = "no"
       for (let i = 0; i < well_curve_config_template["fill"].length; i++) {
         ////
         if (well_curve_config_template["fill"][i]["fill"] == "yes"){
           
           let number_colors = well_curve_config_template["fill"][i]["fillColors"].length
           let curveName1 = well_curve_config_template["fill"][i]["curveName"]
           let threshold = -99999999
           let fillColor = "gray"
           console.log("got inside fill,",curveName1,'number_colors',number_colors)
           //////
           
           for (let j = 0; j < number_colors; j++) {
           console.log("got to start of J loop",j)
              let area1 = d3.area()
              if (number_colors != 0){
                 threshold = well_curve_config_template["fill"][i]["cutoffs"][j]
                 fillColor = well_curve_config_template["fill"][i]["fillColors"][j]
                 }
              if(well_curve_config_template["fill"][i]["fillDirection"] == "left"){
                  let startFromLeft = well_curve_config_template["margin"]["left"]
                  area1
                      .x1(d => x(d[curveName1]))
                      .x0(d => startFromLeft)
                        .defined(d => ((d[curveName1])>threshold))
                      .y(d => y(d[depth_curve_name]));
               }
               if(well_curve_config_template["fill"][i]["fillDirection"] == "right"){
                   let startFromRight = well_curve_config_template["margin"]["right"]
                   area1
                        .x0(d => x(d[curveName1]))
                        .x1(d => startFromRight)
                          .defined(d => ((d[curveName1])<threshold))
                        .y(d => y(d[depth_curve_name]));
               }
               if(well_curve_config_template["fill"][i]["fillDirection"] == "between"){
                   let between2Curve = well_curve_config_template["fill"][i]["curve2"] 
                   area1
                    .x1(d => x(d[curveName1]))
                    .x0(d => x(d[between2Curve]))
                      .defined(d => ((d[curveName1])>threshold))
                    .y(d => y(d[depth_curve_name]));
               }
               svg.append("path")      
                     .datum(data)
                     .attr("class", "area")
                     .attr("d", area1)
                     .attr("stroke", "none")
                     .attr("fill",fillColor)
                     .attr("fill-opacity",0.8);
             ///// 
             console.log("got to end of J loop",j)
           }
         }
       }
    }
    return svg.node();
  }



return module.exports;});
