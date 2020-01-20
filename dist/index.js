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
  /** 
   * "WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, 
   * particularly those already converted to JSON, using the d3.js visualization library."
   * 
   * It is designed with a single central function curveBox, that returns SVGs. 
   * A variety of helper functions take in differently formatted JSONs of information about the well
   *  log curves to plot and how to plot them.
   * 
   * The idea is that end users can provide their own functions to reformat their data into the template that is fed into curveBox.
   * 
   * Some users would wnat to only send to the JavaScript the data they want to plot. Others might use wellio.js to convert a
   *  whole LAS 2.0 formatted well log file to JSON and send that whole JSON along with instructions with how to plot some portion of it. 
   * 
   * Central to this idea is that how to plot and what to plot be put into a JSON template that has sensible defaults, 
   * such that the end-user only has to understand what they want to change about the plotting, not the whole d3.js code.
  */ 
 define_wellioviz: function(){
  return "WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, particularly those already converted to JSON, using d3.js visualization library."
 },
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
   * EXAMPLE: = [
      {"multipleLines":"yes",
      "curveNames":["GR","RESD"],
      "curveColors":["Green","pink"],
      "fill":[
        {"curveName":"GR","fill":"yes","fillDirection":"left","cutoffs":[0,0.3,0.8],"fillColors":["gray","orange","yellow"],"curve2":""},
        {"curveName":"RESD","fill":"no","fillDirection":"left","cutoffs":[],"fillColors":[],"curve2":""}
      ],
      "depthLimits":{"min":0,"max":100000},
      "curveLimits":[{"curveName":"","min":0,"max":100}],
      "curveUnits":["",""],
      "data":[{"depth": "1599.600", "GR": 100},{"depth": "1599.600", "GR": 52.2322},{"depth": "1599.600", "GR": 29.23},{"depth": "1599.600", "GR": 56.2322}],
      "width":200,
      "height":500,
      "margin":({top: 50, right: 3, bottom: 30, left: 30}),
      "title":{"text":"","title_font_size":"10px"},
      "depth_curve_name":"depth"}
      ]
  */
  getExampleTemplate: function (){
    return [
      {"multipleLines":"yes",
      "curveNames":["GR","RESD"],
      "curveColors":["Green","pink"],
      "fill":[
        {"curveName":"GR","fill":"yes","fillDirection":"left","cutoffs":[0,0.3,0.8],"fillColors":["gray","orange","yellow"],"curve2":""},
        {"curveName":"RESD","fill":"no","fillDirection":"left","cutoffs":[],"fillColors":[],"curve2":""}
      ],
      "depthLimits":{"min":"autocalculate","max":"autocalculate"},
      "curveLimits":[{"curveName":"","min":0,"max":100}],
      "curveUnits":["",""],
      "data":[{"depth": "1599.600", "GR": 100},{"depth": "1599.600", "GR": 52.2322},{"depth": "1599.600", "GR": 29.23},{"depth": "1599.600", "GR": 56.2322}],
      "width":200,
      "height":500,
      "margin":({top: 50, right: 3, bottom: 30, left: 30}),
      "title":{"text":"","title_font_size":"10px"},
      "depth_curve_name":"DEPTH"}
      ]
  },

  /** 
   * getFakeIncomingSparseDataExample is a function that takes nothing and returns a JSON of fake sparse incoming data. This is much less than the JSON wellio gives when it converts a LAS file into a JSON. This is one of the type examples of data input. 
   * It is used next by funtion ____ and ___. 
   * @returns {array} returns an array that contains an object. probably just a single object? Many of the things like max and min depth that are auto-calculated when the input is a wellio JSON and instead explicitly defined here. This saves data transmission from a backend as well as front-end calculation time. 
  */
 getFakeIncomingSparseDataExample: function () {
  data2 = [{
    "api_no_14": "7376",
    "curve_type": "RHOB",
    "curve_values": [2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526],
    "linecolor": "rgb(205,0,0,1)",
    "logscale": false,
    "max_depth": "1607.3",
    "min_depth": "1598.3",
    "null_value": -999.25,
    "step": 0.1,
    "units": "g/cc",
    "x_max": "3",
    "x_min": "2",
    }]
  return data2
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


 /** 
   * createDepthArray is a function that takes in a min float, max float, and step float value.  
   * and returns an array or depth values from the min to the max value going by the step value each step. 
   * This function is used to create a depth array for plotting when only the max, min, and depth is given explicitly in the input data. This might be done to avoid sending the depth curve from the backend to the front-end. 
   * @param {float} min a float or integer that represents the top depth of an eventual array of depth values that this function creates.
   * @param {float} max a float or integer that represents the bottom depth of an array of depth values this function creates.
   * @param {float} step a float or integer that represents the interval the depth curve increases as you go from the top to the bottom of the depth curve this function creates. 
   * @returns {array} returns an array of depth values from the min to the max by the step. AN EXAMPLE = [10,10.5,11,11.5,12]
  */
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

/**
 * curveBoxTemplateExamples gives an example of the template giving to the plotting functions and definitions of the fields.
 * A string of either "help" "example" or "definitions" is given as function argument and either a string or Object is returned depending on string provided as input parameter. 
 * This is used to help construct the JSON object that is given to the curveBox plotting function.
 * Someone might run this function with "example" as the parameter, give back the JSON template, replace a few pieces with their own data or format choices and then pass it as the argument into the curveBox function.
 * @param {string} string_of_either__help_example_definitions_mandatories A string of either "help" "example" or "definitions" 
 */
curveBoxTemplateExamples: function (string_of_either__help_example_definitions_mandatories){
  let request_string = string_of_either__help_example_definitions_mandatories
  if(request_string=="help"){
    return "The curveBoxTemplateExamples function returns example templates based on an input argument. Possible argument values are 'example' 'defintions' or 'mandatories'" 
  }
  if(request_string=="example"){
    return [{
  "curve_box":{
    "show_well_name":"yes", /// not built yet
    "show_depth_type":"no", /// not built yet
    "show_curve_units":"yes", /// not built yet
    "curve_box_depth_min":-999, /// not built yet
    "curve_box_depth_max":-999, /// not built yet
    "take_out_null_or_visualize":"no", /// not built yet
    "show_title":"no", 
    "width": 260, 
    "height": 500, 
    "margin": {"top": 50, "right": 10, "bottom": 30, "left": 60}, 
    "title": {"text": "", "title_font_size": "10px"}, /// not built yet
    "div_id": "well_holder_3", /// Should be skip-able // default=random str? What happens if div doesn't exist?
    "order_of_component":["curves","rectanges","lines"], /// not built yet
    "lines_connected_across_curveboxes":"no" /// not built yet
},
 "components":[{
   "curves":[
    { "data_type":"curve", 
      "curve_names":["RHOB"],
      "curve_colors":["black"],
      "fill":[
                {"curve_name":"RHOB","fill":"yes","fill_direction":"left","cutoffs":[0.21,2.23,2.24],"fill_colors":["gray","beige","white"],"curve2":""}
              ],
       "curve_units":["g/cm3"],
       "depth_limits":[{"min":"autocalculate","max":"autocalculate"}],
       "curve_limits":[{"curve_name":"","min":2,"max":3}],
        "data":[{"depth":1598.3,"RHOB":2.2322},{"depth":1598.4,"RHOB":2.0513},{"depth":1598.5,"RHOB":2.2548},{"depth":1598.6,"RHOB":2.9445},{"depth":1598.7,"RHOB":2.2223},{"depth":1598.8,"RHOB":2.447},{"depth":1598.9,"RHOB":2.598},{"depth":1599,"RHOB":2.8088},{"depth":1599.1,"RHOB":2.2248},{"depth":1599.2,"RHOB":2.2399},{"depth":1599.3,"RHOB":2.251},{"depth":1599.4,"RHOB":2.255},{"depth":1599.5,"RHOB":2.2526},{"depth":1599.6,"RHOB":2.2322},{"depth":1599.7,"RHOB":2.2513},{"depth":1599.8,"RHOB":2.2548},{"depth":1599.9,"RHOB":2.2445},{"depth":1600,"RHOB":2.2223},{"depth":1600.1,"RHOB":2.2047},{"depth":1600.2,"RHOB":2.198}], /// not built yet
       "depth_curve_name":"DEPT",/// not built yet
      //////
     "data_id":["firstID","secondIDFor2curve",], /// not built yet
     "well_names":[""], /// not built yet
     "log_scale": [false],  /// not built yet
     "line_color": ["red"], /// not built yet
     "max_depth": 1589.3, /// not built yet
     "min_depth": 1607.3, /// not built yet
     "depth_type_string":["MD"], /// not built yet
     "null_value": [""], /// not built yet
    }
 ],
  "lines":[
    {
     "data_type":"line",  /// not built yet
      "label":"example",  /// not built yet
     "depth":-999, /// not built yet
     "color":"red", /// not built yet
     "stroke_width":"1px", /// not built yet
     "stroke_style":"solid", /// not built yet
     "transparency":1.0 /// not built yet
    }
  ],
    "rectangles":[
       {
     "data_type":"rectangle", 
     "depth_top":0,  
     "x_starting_upper_left_corner":0,
     "width":100, 
     "height":100,
     "stroke-width":"2px",
     "fill":"red",
     "opacity":0.5,
     "label":"Core Example", // not built into plotting template yet
     "label_orientation":"horizontal", // not built into plotting template yet
     "lable_position":"right" // not built into plotting template yet
    }
   ]
 }]
}]
  }
  else if(request_string=="defintions"){
    return [{
  "curve_box":{
    "show_well_name":"yes or no. If '' is no", // not built yet
    "show_depth_type":"yes or no. If '' is no", // not built yet /// Should be skip-able /// default=No
    "show_curve_units":"yes or no. If '' is no", // not built yet /// Should be skip-able /// default=No
    "curve_box_depth_min":"Should be a number. If string or -999, will be skipped and autocalculate used", // not built yet 
    "curve_box_depth_max":"Should be a number. If string or -999, will be skipped and autocalculate used", // not built yet
    "take_out_null_or_visualize":"yes or no. If '' is no", // not built yet 
    "show_title":"yes or no. If '' is no", // not built yet 
    "width": "number, if blank default is 250", 
    "height": "number, if blank default is 500", 
    "margin": ' should be an object like {"top": 50, "right": 10, "bottom": 30, "left": 60} if missing will default to these values', 
    "title": 'object like:{"text": "", "title_font_size": "10px"} if default, an empty string, "" will skill', 
    "div_id": "should be a string that equals a div id like: 'well_holder' Do not include the #",  ///What happens if div doesn't exist?
    "order_of_component":'Should be an array of strings that correlate to component types like:["curves","rectangles","lines"]', // not built yet
    "lines_connected_across_curveboxes":"yes or no. If '' is no" // not built yet
},
 "components":[{
   "curves":[
    { "data_type":"requires one of possible strings: curve, line, rectangle if not one of acceptable string it just skips it.", // not built yet
      "curve_names":"array of strings representing curve_names like: ['GR','RESD']",
      "curve_colors":'array of strings representing colors using common names or rgb style like:["black","rgb(205,0,0,1)"]',
      "fill": 'an array of objects one for each curve like: [{"curve_name":"RHOB","fill":"yes","fill_direction":"left","cutoffs":[0.21,2.23,2.24],"fill_colors":["gray","beige","white"],"curve2":""}]',
       "curve_units":'an array of strings that are curve units like: ["g/cm2","API",""] must equal length other curve fields',
       "depth_limits":'An array of objects that contains the min and max depth for each curve like: [{"min":"autocalculate","max":"autocalculate"}]',
       "curve_limits":'An array of objects that hold the min and max curve values allow to cut off spurious value spikes, like: [{"curve_name":"GR","min":0,"max":100},{"curve_name":"PDF","min":0,"max":100}]',
        "data":'Should be an array of objects where the keys in key:value pairs in each object are curve_names or UWI like: [{"UWI":"111aa","DEPTH":4140.5,"GR":0},{"UWI":"111aa","DEPTH":4141,"GR":0}] for the entire depth of the well being showin the curve_box', 
       "depth_curve_name":"A string of the curve that is the depth being plotted, like: 'DEPT'. Should be the same name as the depth curve in the array of objects in the data key above.",
      //////
      "data_id":["array of strings whose length must equal curve_units, curve_names, etc."], // not built yet
      "well_names":"An array of strings that represent well names if multiple curves shown in same curve_box. If only one well name, only one is required.", // not built yet /// 
     "log_scale": "An array of either True or False not in string form but as a primative. If true, plotting will be on log scale for the curve that is in that position of the arrays",  // not built yet 
     ////// Plotting things but need to be next to curve data or will be too confusing.
     "line_color": "An array of strings that establish the color of the line of the curve. RGB or common color name, like 'red'. If absent, default is black", 
     "max_depth": "Any array of numbers where each represents the max depth each curve is allowed to have. If a string of 'autocalculate' is used instead of a number then the max depth is autocalculated from the max depth of the input data in the data field. This is default behavior.",
     "min_depth": "Any array of numbers where each represents the min depth each curve is allowed to have. If a string of 'autocalculate' is used instead of a number then the min depth is autocalculated from the min depth of the input data in the data field. This is default behavior.", 
     "depth_type_string":"All the curves should be calculated and populated vs. this curve. Takes a string, like: 'DEPT'",
     "null_value": "An array of null values used for each curve. Default is no null values considered, but could be something like: ['-999.25','-999.25','-999.25','NA']"
    }
 ],
  "lines":[
    {
     "data_type":'must be string, will be ignored if not "line", "curve", or "rectangle"', 
     "label":"The label for horiztonal line in string form",
     "depth":"number for the depth at which the line is placed", 
     "color":"string for the color of the line in common color name or RGB format. If '' then black will be used.", 
     "stroke_width":"A string with of px value for stroke width, like: '1px'. Default if absent is '1px'.", 
     "stroke_style":'Should be string, if not or doesnt exist will be treated as "solid"',
     "transparency":'Should be float between 0.0 and 1.0. Otherwise default is 1.0.'
    }
  ],
    "rectangles":[
       {
     "data_type":"rectangle", 
     "depth_top":"A number for the depth of the upper left corner of the rectangle", // 
     "x_starting_upper_left_corner":"A number for the x axis value of the upper left corner of the rectangle",
     "width":"Width of rectangle as number", 
     "height":"Height of rectangle as number",
     "stroke-width":"Stroke width of line that makes rectangle as a strike, like '2px'.",
     "fill":"String that represents the color of the rectangle fill in either common color name or RGB like, 'red'",
     "opacity":"Float between 0 and 1 that represents the opacity of the fill, default is 0.5",
     "label":"String that appears on end of line and likely represents a top name, like: 'Top Jurassic Final Final Final'", // not built into plotting template yet
     "label_orientation":"A string that is either 'horizontal' or 'vertical'. If other values, will treat as horizontal label orientation", // not built into plotting template yet
     "lable_position":"Exceptable strings are top, center, right, left, bottom. Default right." // not built into plotting template yet
    }
   ]
 }]
}]
  }
  else if(request_string=="mandatories"){
    return [
      "This is not yet populated!!!!"
    ]
  }
},

/** 
 * takeInArraysAndGetObjectOfCurveDataForPlotting is a function used to reformt arrays of curve values into a form that d3.js likes better, an array of objects.
* THIS FUNCTION NEEDS CHANGED IT IS TOO EXPLICIT !!!!!!!
*/
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

/**
 * This function is used to put the incoming sparse style JSON information into the plotting tempalte JSON that is given to curveBox which then handles the plotting.
 * @param {object} incoming_sparse This is a JSON object of incoming sparse style data & plotting instructions.
 * @param {object} template This is a JSON example template of the type typically given to the curveBox function. The user will use if for defaults and replace the data and formatting options they want to change.
 */
putIncomingSparseJsonIntoPlottingTemplate: function (incoming_sparse,template){
  if (incoming_sparse[0]["single_curve_box_or_cross_section"] == "multiple"){
    console.log("THERE WAS A PROBLEM IN THE FUNCTION putIncomingSparse_into_PlottingTemplate. THE CODE TO HANDLE CROSS SECTIONS HAS NOT BEEN WRITTEN YET!!!! BUT IT WOULD GO HERE ")
    return "THE CODE TO HANDLE CROSS SECTIONS HAS NOT BEEN WRITTEN YET!!!! BUT IT WOULD GO HERE"
  }
  else{
    let curve_box_obj = incoming_sparse[0]["curve_boxes"][0]
    let curve_box_overall = incoming_sparse[0]["curve_boxes"][0]["curve_box"]
    let curve_box_components = incoming_sparse[0]["curve_boxes"][0]["components"]
    template[0]['curve_box'] = curve_box_overall
    template[0]['components'][0]['lines'] = curve_box_components[0]['lines']
    template[0]['components'][0]['rectangles'] = curve_box_components[0]['rectangles']
    
    ///// Establish template with empty arrays except for value taht are shared for all curves
    template[0]['components'][0]['curves'][0]["data_type"] = "curve"
    template[0]['components'][0]['curves'][0]["depth_type_string"]= curve_box_components[0]['curves'][0]['depth_type_string']
    template[0]['components'][0]['curves'][0]["depth_curve_name"] = curve_box_components[0]['curves'][0]['depth_curve_name']
    
    template[0]['components'][0]['curves'][0]["curve_names"] = []
    template[0]['components'][0]['curves'][0]["curve_colors"] = []
    template[0]['components'][0]['curves'][0]["fill"] = []
    template[0]['components'][0]['curves'][0]["data_id"] = []
    template[0]['components'][0]['curves'][0]["well_names"] = []
    template[0]['components'][0]['curves'][0]["log_scale"] = []
    template[0]['components'][0]['curves'][0]["line_color"] = []
    template[0]['components'][0]['curves'][0]["max_depth"] = []
    template[0]['components'][0]['curves'][0]["min_depth"] = []
    template[0]['components'][0]['curves'][0]["null_value"] = []
    
    template[0]['components'][0]['curves'][0]["data"] = []
    
    ///// For each curve object in incoming data:      
    let array_individual_curves_and_depth_objects = []
    let all_depths_list = []
    let all_depths_set = []
    
    for (let i = 0; i < curve_box_components[0]['curves'].length; i++) {
      
      let curve = curve_box_components[0]['curves'][i]
      template[0]['components'][0]['curves'][0]["curve_names"].push(curve["curve_type"])
      template[0]['components'][0]['curves'][0]["curve_colors"].push(curve["line_color"])
      template[0]['components'][0]['curves'][0]["fill"].push(curve["fill"])
      template[0]['components'][0]['curves'][0]["data_id"].push(curve["data_id"])
      template[0]['components'][0]['curves'][0]["well_names"].push(curve["well_name"])
      template[0]['components'][0]['curves'][0]["log_scale"].push(curve["log_scale"])
      template[0]['components'][0]['curves'][0]["line_color"].push(curve["line_color"])
      template[0]['components'][0]['curves'][0]["max_depth"].push(curve["max_depth"])
      template[0]['components'][0]['curves'][0]["min_depth"].push(curve["min_depth"]) 
      template[0]['components'][0]['curves'][0]["null_value"].push(curve["null_value"]) 
      ////
      let depth_array = createDepthArray(curve["min_depth"],curve["max_depth"],curve["step"])
      let curve_array = curve["curve_values"]
      let curve_name = curve["curve_type"]
      let depth_curve_name = curve["depth_curve_name"]
      //// the function below is off...someting undefined
      let obj_starter = [{[depth_curve_name]:depth_array,[curve_name]:curve_array}]
      
      let reformatted_for_wellioviz_curve_data = takeInArraysAndGetObjectOfCurveDataForPlotting(obj_starter,curve_name,depth_curve_name)
      ////
      array_individual_curves_and_depth_objects.push(reformatted_for_wellioviz_curve_data)
      ////

      all_depths_list = all_depths_list.concat(depth_array)
    }

    /// Get array of unique depth values from all curves by calling set on an array of depth values
    all_depths_set = [...new Set(all_depths_list)]; 
     
    let objects_helper = {}
    
    for (let j = 0; j < all_depths_set.length; j++) {
      /// create array of objects like [{"depthvalue":{"depth_curve_name":depthvalue},,,,}]
      objects_helper[all_depths_set[j]] = {[template[0]['components'][0]['curves'][0]["depth_curve_name"]]:all_depths_set[j]}
    }
    
    //// now should have something like {0:{"DEPT":234},1:{"DEPT":234.5}.....}
    //// for each curve {"depth":value,"curve_name":value} in each curve array of objects...
    /////// for each object, check if "depth value exists in array of depth values", if it does, add {"curve_name":value} to the object
    for (let k = 0; k < array_individual_curves_and_depth_objects.length; k++) {
      let this_depth_plus_curve_obj = array_individual_curves_and_depth_objects[k]
       for (let l = 0; l < this_depth_plus_curve_obj.length; l++) {
         let this_obj = this_depth_plus_curve_obj[l]
         
         let curve_name = curve_box_components[0]['curves'][k]["curve_type"]
         let depth_name = curve_box_components[0]['curves'][k]['depth_curve_name']
         
         /// add curve value as key/value pair to right object based on depth key
         
         objects_helper[this_obj[depth_name]][curve_name] = this_depth_plus_curve_obj[l][curve_name]
         
       } 
    }
   
    /// get rid of depth key and just have the objects..put in array if not returned as array
    //// return only the keys...which should be [{},{"depth":23,"GR":40,"RESD":0}]
    let data = Object.keys(objects_helper).map(function(key){return objects_helper[key];});
    
    let depth_name = template[0]['components'][0]['curves'][0]["depth_curve_name"]
    data = data.sort(function(a, b) {
    return parseFloat(a.depth_name) - parseFloat(b.depth_name);
});
    // data = data.sort((a, b) => (a[depth_name] > b[depth_name]) ? 1 : -1)
    function sortFloat(a,b) { return a - b; }
    function sortNumber(a, b) {
  return parseFloat(a[depth_name]) - parseFloat(b[depth_name]);
}
    template[0]['components'][0]['curves'][0]["data"] = data.sort(sortNumber)
    return template
   
  }
},


  ///////////////////////////////
  //// Actual plotting functions after all the necessary information is compiled in necessary format
  ///////////////////////////////

  /**
   * CurveBox is the central function to wellioviz in a lot of ways, not least as it holds the d3.js code. It takes a JSOn template, appends the resulting SVG to a defined DIV.
   * @param {object} well_curve_config_template 
   * @returns {*} SVG.node() But its main function is to append this SVG to a DIV given in the template that is the single parameter.
   */
  CurveBox:function (well_curve_config_template){
   
    //// These parts of the function establish variables from the config JSON in shorter variable names
    //// If there is a greater change that the template might not include them & they are necessary,
    //// then a default or blank value is used

    //let well_curve_config_template = well_curve_config_template[0]
    
    let template_overall = template_for_plotting[0]["curve_box"]
    let template_components = template_for_plotting[0]["components"]
    let template_curves = template_components[0]["curves"][0]
    let template_lines = template_components[0]["lines"]
    let template_rectangles = template_components[0]["rectangles"]
    
    let title = ""
    //// Determine if title exists for the curve_box.
    if(template_overall["show_title"] != "yes"){let title = ""}
    else{title=template_overall["title"]["text"]}

    let width = template_overall["width"]
    let height = template_overall["height"]
    let margin = template_overall["margin"]
    
    let data = template_curves["data"]
  

    let curve_names = template_curves["curve_names"]
    let curve_colors = template_curves["curve_colors"]
    let curve_name = curve_names[0]
    let curve_color = curve_colors[0]
    let curve_units = template_curves["curve_units"];
    if(template_curves["curve_units"]){curve_units = template_curves["curve_units"]}
    let div_id = template_overall["div_id"]
    if(template_overall["div_id"]){div_id = template_overall["div_id"]}

    let depth_curve_name = template_curves["depth_curve_name"]
    
    
    
//       //// Calculate depth min and max if depth min and/or max is not given explicitly in the template
//       let depth_min
//       let depth_max
//      if(!template_curves["depth_limits"] || template_curves["depth_limits"][0]["min"] == "autocalculate")
//         {depth_min = d3.min(data, function(d) { return +d[depth_curve_name];})}
//       else
//         {depth_min = template_curves["depth_limits"][0]["min"]}
//       //// max depth
//       if(!template_curves["depth_limits"] || template_curves["depth_limits"][0]["max"] == "autocalculate")
//         {depth_max = d3.max(data, function(d) { return +d[depth_curve_name];})}
//       else
//         {depth_max = template_curves["depth_limits"][0]["max"]}


//       // [depth_max,depth_min]
//       //// Apply depth min and max to incoming well log data
//       //// To save time, we'll first check if the first object in the array had as depth that is smaller than min
//       //// and check if the last object in the array has a depth that is larger than the max, if not. we do nothing.
          
        

//       if(data[0][depth_curve_name] > depth_min && data[-1][depth_curve_name] < depth_max){}
//       else{data = data.filter(function(objects){
//   return objects[depth_curve_name] > depth_min && objects[depth_curve_name] < depth_max; 
// })}
    
    let depth_min = template_curves["min_depth"][0]
     let depth_max = template_curves["max_depth"][0]

    // Calculate x domain extent for one or more than one curve
    let mins = []
    let maxes = []
    for (let i = 0; i < curve_names.length; i++) {
      let min_this = d3.min(data, function(d) { return +d[curve_names[i]]})
      let max_this = d3.max(data, function(d) { return +d[curve_names[i]]})
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
    
    const svg = d3.select("#"+div_id).append("svg")
    svg.attr("class","first")
    svg.attr("width",width)
        .attr("height",height);
    svg.append("g")
        .call(xAxis);
    svg.append("g")
        .call(yAxis);
    //// throw away code for single curve to plot that will be deleted soon  
    //// was here:
    //// Code that assumes multiple curves are plotted in same curvebox  
    let distance_from_top = -15
    if(title !== ""){
      svg.append("text") // 
          .attr("x", (margin.left/3+(width/2)))            
          .attr("y", 0 + (- distance_from_top))
          .attr("text-anchor", "middle")  
          .style("font-size", template_overall["title"]["title_font_size"])  
          .text(title);
      //distance_from_top = -20
     }
  for (let k = 0; k < curve_names.length; k++) {
  //// code that creates a line for each Curve in order provided and applies 
  //// the color in the color array in order provided
    let another_line = d3.line().x(d => x(d[curve_names[k]])).y(d => y(d[depth_curve_name]));
    let curveUnit = "";
    if (curve_units[k]){curveUnit = curve_units[k]}   
    let min = mins[k]
    let max = maxes[k]
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", curve_colors[k])
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", another_line);
      
      if(k > 0){distance_from_top = -30}
      
      svg.append("text")
        .attr("x", (width-margin.right))             
        .attr("y", 0 + (margin.top + distance_from_top))
        .attr("text-anchor", "end")  
        .style("font-size", "14px") 
        .style("text-decoration", "underline")  
        .text(max.toFixed(1));
      
      svg.append("text")
        .attr("x", (width-margin.right-width/3))             
        .attr("y", 0 + (margin.top + distance_from_top))
        .attr("text-anchor", "middle")  
        .style("font-size", "14px") 
        .style("text-decoration", "underline")  
        .text(curveUnit);
      
      svg.append("text")
        .attr("x", margin.left+width/4)             
        .attr("y", 0 + (margin.top + distance_from_top))
        .attr("text-anchor", "middle")  
        .style("font-size", "14px") 
        .style("text-decoration", "underline")  
        .text(curve_names[k]);
    
      svg.append("text")
          .attr("x", margin.left)             
          .attr("y", 0 + (margin.top + distance_from_top))
          .attr("text-anchor", "middle")  
          .style("font-size", "14px") 
          .style("text-decoration", "underline")  
          .text(min.toFixed(1));
    
      }
    // define the area filled under the curve
      let two_curve_fill_flag = "no"
      for (let i = 0; i < template_curves["fill"].length; i++) {
        ////
        
        
        // curve_name: "RHOB"
        // fill: "yes"
        // fill_direction: "left"
        // cutoffs: Array(3) [0.21, 2.23, 2.24]
        // fill_colors: Array(3) ["gray", "beige", "white"]
        // curve2: ""
        
        if (template_curves["fill"][i][0]["fill"] == "yes"){        
          let number_colors = template_curves["fill"][i][0]["fill_colors"].length
          let curve_name1 = template_curves["fill"][i][0]["curve_name"]
          let threshold = -99999999
          let fill_color = "gray"
          //////
          for (let j = 0; j < number_colors; j++) {
          console.log("got to start of J loop",j)
              let area1 = d3.area()
              if (number_colors != 0){
                threshold = template_curves["fill"][i][0]["cutoffs"][j]
                fill_color = template_curves["fill"][i][0]["fill_colors"][j]
                }
         
              if(template_curves["fill"][i][0]["fill_direction"] == "left"){
                  let start_from_left = template_overall["margin"]["left"]
                  area1
                      .x1(d => x(d[curve_name1]))
                      .x0(d => start_from_left)
                        .defined(d => ((d[curve_name1])>threshold))
                      .y(d => y(d[depth_curve_name]));
              
              }
              
              if(template_curves["fill"][i][0]["fill_direction"] == "right"){
                  let start_from_right = template_overall["margin"]["right"]
                  area1
                        .x0(d => x(d[curve_name1]))
                        .x1(d => start_from_right)
                          .defined(d => ((d[curve_name1])<threshold))
                        .y(d => y(d[depth_curve_name]));
              }
              if(template_curves["fill"][i][0]["fill_direction"] == "between"){
                  let between_2_curve = template_curves["fill"][i][0]["curve2"] 
                  area1
                    .x1(d => x(d[curve_name1]))
                    .x0(d => x(d[between_2_curve]))
                      .defined(d => ((d[curve_name1])>threshold))
                    .y(d => y(d[depth_curve_name]));
              }
              svg.append("path")      
                    .datum(data)
                    .attr("class", "area")
                    .attr("d", area1)
                    .attr("stroke", "none")
                    .attr("fill",fill_color)
                    .attr("fill-opacity",0.8);
              
              }
        }
    }
    
    /////////// TRYING SOMETHING FOR LINES HERE. STILL IN PROGRESS !!!! ///////////
    try {
        
        for (let i = 0; i < template_lines.length; i++) {
           let this_line = template_lines[i]
            svg.append("line")
                .attr("x1", 0+margin.left) 
                .attr("y1", y(this_line["depth"]))
                .attr("x2", width*0.75)
                .attr("y2", y(this_line["depth"]))
                .style("stroke-width", this_line["stroke_width"])
                .style("stroke", this_line["color"])
                .style("stroke-dasharray", this_line["stroke-dasharray"])
                .style("fill", "none");

            svg.append("text")
              .attr("x", width*0.75)             
              .attr("y", y(this_line["depth"]))
              .attr("text-anchor", "start")  
              .style("font-size", "12px")  
              .text(this_line["label"]);
        }
      }
      catch{
        console.log("could not do lines for tops in curveBox function")
      }
      ////// hacking in a rectange for now /////
      svg.append('rect')
                .attr("x", 50+margin.left) 
                .attr("y", y(1602))
                .attr("width", 15)
                .attr("height",60)
                .style("stroke-width", "2px")
                .style("stroke", "purple")
                .style("fill", "red")
                .style("opacity", 0.5);
      /////////// TRYING SOMETHING FOR LINES HERE ///////////
    
    return svg.node();
  }
,
    
    /**
     * Function for saving a SVG from the HTML DOM as a SVG file. This currently only works on front-end but might be later adapted for server-side rendering.
     * The plan is for default behavior of curveBox to be that an SVG is appended to a div. However, this function is trying to enable saving just the SVG as an SVG file. 
     * This might be useful if the well log visualizations could be pre-rendered on the server and then loaded to the front-end, which theoretically might save load time.
     * @param {element} svgEl an element from the DOM. It should include the whole chart to be in the SVG.
     * @param {string} name is the name of the resulting SVG. An example might be "testChart4.SVG"
     */
    saveSvg:function(svgEl, name) {
      svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      var svgData = svgEl.outerHTML;
      var preface = '<?xml version="1.0" standalone="no"?>\r\n';
      var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
      var svgUrl = URL.createObjectURL(svgBlob);
      var downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = name;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  },


    //////////
    /**
     * This function is used to plot multiple curveboxes in a row. AKA makes a cross-section. It calls curveBox multiple times.
     * @param {string} divIDstring a string that represents the div ID that the multiple curveboxes will be appended to
     * @param {Object} templates An array of CurveBox input templates
     */
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
        result = this.CurveBox(new_templates[i])
      }
      return result
    }





  
  
}

return module.exports});
