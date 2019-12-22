!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.commonJsModule=e():"undefined"!=typeof global?global.commonJsModule=e():"undefined"!=typeof self&&(self.commonJsModule=e())}(function(){var define,module,exports;module={exports:(exports={})};

// Copyright 2019 Justin Gosses

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports = {
  ///////////////////////////////
  //// "WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, particularly those already converted to JSON, using d3.js visualization library."
  ///////////////////////////////

  //// Example template
  // well_curve_config_template_new_well_01_01_095_19W4 = [
    //{"multipleLines":"yes",
    //"curveNames":["GR"],
    //"curveColors":["pink"],
    //"fill":[{"curveName":"GR","fill":"yes","fillDirection":"left","cutoffs":[0,65,95,109],"fillColors":["lightgreen","green","red"ink:,"this tring messed up]"]
    //"data":well_log_curves_reformatted_for_d3_2,
    //"width":200,
    //"height":400,
    //"margin":({top: 20, right: 3, bottom: 30, left: 30}),
    //"depth_curve_name":"DEPTH"}
    //]
  ////////////
  /** 
   * getExampleTemplate is a function that provides an example template for what to supply to the curveBox function further down.
   * @returns {array} returns an array that contains a single object that is the template for what will be given to the curveBox function for creating the SVG.
  */
  getExampleTemplate: function (){
    return [
      {"multipleLines":"yes",
      "curveNames":["GR"],
      "curveColors":["pink"],
      "fill":[
        {"curveName":"GR","fill":"yes","fillDirection":"left","cutoffs":[0,ShaleSiltCutOff,SiltSandCutOff],"fillColors":["gray","orange","yellow"],"curve2":""},
        {"curveName":"RESD","fill":"no","fillDirection":"left","cutoffs":[],"fillColors":[],"curve2":""}
      ],
      "curveUnits":["units2","other units"],
      "data":well_log_curves_reformatted_for_d3_2,
      "width":200,
      "height":400,
      "margin":({top: 20, right: 3, bottom: 30, left: 30}),
      "depth_curve_name":"DEPTH"}
      ]
  },
  ///////////////////////////////
  //// Functions for getting data from LAS files and reformatting to a wellio.js style JSON. 
  ///////////////////////////////

  /** 
   * convertWellJSONToObj is a function that takes in wellio style JSON of all LAS file well log information, 
   * array of curves names, and a string for UWI 
   * and returns the data array of objects that D3.js likes for data used in plotting.
   * @param {object} well_log_json a full wellio style JSON
   * @param {array} CurveNames array of curve names  as strings
   * @param {string} UWI a string the represents the well name
   * @returns {array} returns array of objects that contain key:value pairs of curve name and value at each depth. Depth is also a key:value pair.
  */
  convertWellJSONToObj:function  (well_log_json,CurveNames,UWI){
    depth = well_log_json["CURVES"]["DEPTH"]
    curve_data = []
    for(eachCr in CurveNames){
      curve_data.push(well_log_json["CURVES"][CurveNames[eachCr]])
    }
    array_of_obj = []
    if (depth.length === well_log_json["CURVES"][CurveNames[0]].length){
       for(eachPt in depth){
         obj = {}
         obj["UWI"] = UWI
         for(i in CurveNames){
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


  ///////////////////////////////
  //// Functions for getting basic information out of wellio.js style JSON for plotting
  ///////////////////////////////

  /** 
   * fromJSONofWEllGetThingsForPlotting is a function that takes in wellio style JSON of all LAS file well log information, 
   * and returns an object that contains 3 things in an object format that are used in function ___ for plotting.
   * the data array of objects that D3.js likes for data used in plotting.
   * @param {object} jsonWell a full wellio style JSON
   * @returns {array} returns an object of 3 things that will eventually be used in plotting. {"well_log_curves_reformatted_for_d3":well_log_curves_reformatted_for_d3,"curve_names":curve_names,"uwi":uwi}
  */
  fromJSONofWEllGetThingsForPlotting: function(jsonWell){
    curve_names = Object.keys(jsonWell["CURVES"])
    uwi = jsonWell["WELL INFORMATION BLOCK"]["UWI"]["DATA"]
    well_log_curves_reformatted_for_d3 = convertWellJSONToObj(jsonWell,curve_names,uwi)
    return {"well_log_curves_reformatted_for_d3":well_log_curves_reformatted_for_d3,"curve_names":curve_names,"uwi":uwi}
  },





  ///////////////////////////////
  //// Functions for reformatting data other than wellio.js style JSON
  ///////////////////////////////

  ////// fake non wellio.js incoming data example
  // data2 = [{
  //   "api_no_14": "7376",
  //   "curve_type": "RHOB",
  //   "curve_values": [2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526],
  //   "linecolor": "rgb(205,0,0,1)",
  //   "logscale": false,
  //   "max_depth": "1607.3",
  //   "min_depth": "1598.3",
  //   "null_value": -999.25,
  //   "step": 0.1,
  //   "units": "g/cc",
  //   "x_max": "3",
  //   "x_min": "2",
  //   }]

 createDepthArray: function (min,max,step){
  //// Returns an array of depth values from min to max, including both, with each being different by step value
  //// ran like: depthArray = createDepthArray(data2[0]["min_depth"],data2[0]["max_depth"],data2[0]["step"])
  let depth = []
  min = parseFloat(min)
  max = parseFloat(max)
  step = parseFloat(step)
  let number_of_points = ((max-min)/step) +1
  let temp_depth = min
  for (let i = 0; i < number_of_points; i++) {
    temp_depth = (min+(i*step)).toFixed(3)
    depth.push(temp_depth)
  }
  return depth
},


takeInArraysAndGetObjectOfCurveDataForPlotting: function (arraysOfCurvesAndNames,CurveName){
  //// would be run like: reformattedForWelliovizCurveData = takeInArraysAndGetObjectOfCurveDataForPlotting([{"depth":depthArray,"RHOB":data2[0].curve_values}],"RHOB")
  // [{"depth":[],"curveData":[]}]
  let curveObj = []
  // make sure the curve data arrays are the same lenght, if not add null values
  
  // put them into object
  let lengthOfCurve0 = arraysOfCurvesAndNames[0]["depth"].length
  for (let i = 0; i < lengthOfCurve0; i++) {
    let newObj = {"depth":0,"RHOB":0}
    newObj["depth"] = arraysOfCurvesAndNames[0]["depth"][i]
    newObj["RHOB"] = arraysOfCurvesAndNames[0][CurveName][i]
    curveObj.push(newObj)
  }
  return curveObj
},



  ///////////////////////////////
  //// Actual plotting functions after all the necessary information is compiled in necessary format
  ///////////////////////////////

  CurveBox2:function (well_curve_config_template){
    // function CurveBox2(well_curve_config_template){
      well_curve_config_template = well_curve_config_template[0]
      //let div_id = "well_holder"
      if(well_curve_config_template["divID"]){div_id = well_curve_config_template["divID"]}
      console.log("well_curve_config_template['divID']",well_curve_config_template["divID"])
      let multipleLines = well_curve_config_template["multipleLines"]
      let curveNames = well_curve_config_template["curveNames"]
      let curveColors = well_curve_config_template["curveColors"]
      let curveName = curveNames[0]
      let curveColor = curveColors[0]
      ////
      let curveUnits = "";
      if(well_curve_config_template["curveUnits"]){curveUnits = well_curve_config_template["curveUnits"]}
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
      const svg = d3.select("#"+div_id).append("svg")
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
          console.log("curveBox2 curveNames[k]",curveNames[k])
          let another_line = d3.line().x(d => x(d[curveNames[k]])).y(d => y(d[depth_curve_name]));
          svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", curveColors[k])
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", another_line);

          //// This appends the units on top the curve box. Multiple units are possible. 
          svg.append("text")
            .attr("x", (width / 2))             
            .attr("y", 0 + (margin.top -10 ))
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            .text(curveUnit);
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
               console.log("got to end of J loop",j)
             }
           }
         }
      }
      // d3.select("#"+div_id).append(svg)
      // d3.select("#"+div_id).append('div').html(svg)
      console.log("got to bottom of curvebox2 function")
      
      return svg.node();
    },
    /////// this require wellio!
    fileToJSON:function (afile){
      return wellio.las2json(afile)
    },
    /////////
    turnFilesIntoTextIntoWellioJSON:function (files_array){
      //// For each well log file, turn into text, then convert text into wellio style JSON using wellio.js
      let logs_in_json = []
      for (let i = 0; i < files_array.length; i++) {
        logs_in_json.push(fileToJSON(files_array[i]))
      }
      return logs_in_json
    },
    //////////
    multipleLogPlot:function(divIDstring,templates){
    // function multipleLogPlot(divIDstring,templates){
      //const noSVG = d3.select("#"+divIDstring).selectAll("svg").remove()
      //let logs_in_json = turnFilesIntoTextIntoWellioJSON([log])
      let new_templates = []
      for (let i = 0; i < templates.length; i++) {
        //let three_things2 = fromJSONofWEllGetThingsForPlotting(logs_in_json[i])
        // let new_data =three_things2["well_log_curves_reformatted_for_d3"]
        // template[0]["data"] = new_data
        templates[i]["divID"] = divIDstring
        new_templates.push(templates[i])
        result = this.CurveBox2(new_templates[i])
      }
      return result
    }





  
  
}

return module.exports});
