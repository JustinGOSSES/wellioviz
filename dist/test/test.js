//  Tests go here

//// GLOBAL JSON OBJECTS FOR TESTING
testTemplate_A = 
[{
"multipleLines":"yes",
"curveNames":
	["GR","RESD"],
	"curveColors":["green","pink"], 
"fill":
	[
	{"curveName":"GR","fill":"yes","fillDirection":"left","cutoffs":[0,65,95,109],"fillColors":["lightgreen","green","red","pink"],"curve2":""},
     	{"curveName":"PHID","fill":"yes","fillDirection":"left","cutoffs":[],"fillColors":[],"curve2":""}
   	],
"curveUnits":
	["units",
	"units"],
"data":well_log_curves_reformatted_for_d3_2,
"width":200,
"height":400,
"margin":({top: 20, right: 3, bottom: 30, left: 30}),
"depth_curve_name":"DEPTH"}]



input_sparse_style = [{
    "single_curve_box_or_cross_section":"single",
    "cross_section_title":"",
    "width": 1040, /// not skippable, check if number // default if blank or missing =250 or autocalculate?
    "height": 500, /// not skippable, check if number // default if blank or missing=500
    ////////////////////////////
    "curve_boxes":[{
    "curve_box":{
      "show_well_name":"yes", // not built yet /// Should be skip-able /// default=No
      "show_depth_type":"no", // not built yet /// Should be skip-able /// default=No
      "show_curve_units":"yes", // not built yet /// Should be skip-able /// default=No
      "curve_box_depth_min":-999, // not built yet /// Should be skip-able /// default=skip func if string or -999
      "curve_box_depth_max":-999, // not built yet /// Should be skip-able /// default=skip func if string or -999
      "take_out_null_or_visualize":"no", // not built yet /// Should be skip-able /// default=No
      "show_title":"no", // not built into plotting template yet /// Should be skip-able /// default=No
      "width": 260, /// not skippable, check if number // default if blank or missing =250
      "height": 500, /// not skippable, check if number // default if blank or missing=500
      "margin": {"top": 50, "right": 10, "bottom": 30, "left": 60}, /// not skippable, check if number // defaults used if blank, string, or missing. If string or blank, add message to error message to console stating what default was used.
      "title": {"text": "", "title_font_size": "10px"}, /// Should be skip-able // default=skip
      "div_id": "well_holder4", /// Should be skip-able // default=random str? What happens if div doesn't exist?
      "order_of_component":["curves","rectangles","lines"], // not built yet, default is curve, then line, then rectangle
      "lines_connected_across_curve_boxes":"no", // not built yet, default is skip function
      "header_sep_svg_or_not":"yes",
      "svg_header_height":"3em"
  },
   "components":[{
     "curves":[
      {
      "data_type":"curve", // not built yet /// requires one of possible strings: curve, line, rectangle if not one of acceptable string it just skips it.
      "data_id":"placeholder_data_id", // not built yet /// can be anything, just used for tracking & is optional
      "well_name": "", // not built yet /// Ideally string. Will skip function if ""
      "curve_type": "RHOB", // should be string. name of curve 
      "curve_values": [
          2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251,                           2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251,             2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251,             2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251,             2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251,             2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251,             2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251,             2.255, 2.2526], /// Should be array. If not array, return error message?
       "step": 0.1, /// Should be number. If not array, return error message?
       "units": "g/cc", /// should be string but try to plot whatever as string. if greater than X length include error message in console about excessive length will look bad but still plot.
       "log_scale": false,  // not built yet // if anything except True, skip function. Do not assume populated.
       ////// Plotting things but need to be next to curve data or will be too confusing.
       "line_color": "rgb(205,0,0,1)", /// Test for string, if string use. If not string "black"
       "curve_stroke_dasharray":"5,5",
       "fill":[{"curve_name":"RHOB","fill":"yes","fill_direction":"left","cutoffs":[0.21,2.23,2.24],"fill_colors":["gray","beige","white"],"curve2":""}],
       "data_ID":"",
       "max_depth": "1607.3", /// should be number, if not number or doens't exit then "autocalculate" 
       "min_depth": "1598.3", /// should be number, if not number or doens't exit then "autocalculate" 
       "depth_type_string":"MD", // not built yet /// should be string, if not or doesn't exist, then skip func
       "depth_curve_name":"DEPTH", /// should be string, ideally all depth curve names are the same
        "null_value": "", // not built yet, can be anything. Skip if blank or "" or "unknown". If not skip, then look for any values that match after d3 style data object is generated and either take them out or give special value based on behavior defined for curvebox in key "take_out_null_or_visualize" above.
       "x_max": 3, // not built yet /// should be number /// auto-calculate if not number or is "autocalculate"
       "x_min": 2, // not built yet /// should be number /// auto-calculate if not number or is "autocalculate"
      }
   ],
    "lines":[
      {
       "data_type":"line",  /// must be string, will be ignored if not "line", "curve", or "rectangle".
        "label":"top 1",  /// Ideally a string. 
       "depth":1601.4, /// Should be Float or integer, attempt to convert to number if string. Otherwise skip this part entirely!
       "color":"blue", /// should be string, if not or doesn't exist use "black"
       "stroke_width":"3px", /// should be string, if not or doesn't exist use "1px"
       "stroke_style":"solid", /// should be string, if not or doesn't exist use "solid"
       "transparency":1.0 /// should be number between 0 and 1, if not or doesn't exist use 1.
      },
      {
       "data_type":"line",  /// must be string, will be ignored if not "line", "curve", or "rectangle".
        "label":"top 2",  /// Ideally a string. 
       "depth":1602.4, /// Should be Float or integer, attempt to convert to number if string. Otherwise skip this part entirely!
       "color":"orange", /// should be string, if not or doesn't exist use "black"
       "stroke_width":"5px", /// should be string, if not or doesn't exist use "1px"
       "stroke_style":"solid", /// should be string, if not or doesn't exist use "solid"
       "transparency":0.5 /// should be number between 0 and 1, if not or doesn't exist use 1.
      }
    ],
       "rectangles":[
         {
       "data_type":"rectangle", 
       "depth_top":1601,  
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
  }]