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
      //// Calculate the line of the first curve
      let line = d3.line().x(d => x(d[curveName])).y(d => y(d[depth_curve_name]));
      //// Make SVG
      const svg = d3.create("svg")
      svg.attr("width",width)
          .attr("height",height);
      svg.append("g")
          .call(xAxis);
      svg.append("g")
          .call(yAxis);
      svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", line);

      if(multipleLines == "yes"){
        for (let i = 0; i < curveNames.length; i++) {
          let another_line = d3.line().x(d => x(d[curveNames[i]])).y(d => y(d[depth_curve_name]));
          svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", curveColors[i])
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", another_line);
        } 
      }
      return svg.node();
    },
    ///////////


}



return module.exports;});
