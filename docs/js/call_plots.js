// well_curve_config_template = [
//     {"multipleLines":"yes","curveNames":["GR"],
//      "curveColors":["black","pink"],
//      "fill":[
//        {"curveName":"GR","fill":"yes","fillDirection":"left","cutoffs":[0,ShaleSiltCutOff,SiltSandCutOff],"fillColors":["gray","orange","yellow"],"curve2":""},
//        {"curveName":"RESD","fill":"no","fillDirection":"left","cutoffs":[],"fillColors":[],"curve2":""}
//      ],
//      "data":well_log_converted_to_d3_friendly,
//      "width":200,
//      "height":400,
//      "margin":({top: 20, right: 3, bottom: 30, left: 30}),
//      "depth_curve_name":"DEPTH"}]



// function makePlot(single_curve,div,height,width,domain_x,domain_y,curve_name){
// 	// "#log_plot_div"
// 	var b2=g3.plot(div).height(height).width(width).xDomain(domain_x).yDomain([0,single_curve.length]).xTitle(curve_name).draw()
// 	console.log("got to second part of makePlot2 and b2 = ",b2)
// 	g3.log(b2,single_curve).draw()
// 	console.log("got to second part of makePlot2 and b2 = ",b2)

// }

// function makePlot2(single_curve,div,height,width,domain_x,domain_y,curve_name){
// 	// "#log_plot_div"
// 	// var div = "dl_trial_a"
// 	var b2=g3.plot(div).height(height).width(width).xDomain(domain_x).yDomain([0,single_curve.length]).xTitle(curve_name).draw()
// 	console.log("1 got to second part of makePlot2 and b2 = ",b2)
// 	g3.log(b2,single_curve).draw()
// 	console.log("2 got to second part of makePlot2 and b2 = ",b2)

// }

// function draw_curveG3(curve,div){
// 	if(!div){div = "#log_plot_div"}
// 	if(!curve){
// 		curve = "GR";
// 		console.log("temp_json['CURVES'][curve] = ",temp_json["CURVES"]["GR"])
// 	}
// 	console.log("curve = ",curve)
// 	var domain_x = [Math.min.apply(null, temp_json["CURVES"][curve]),Math.max.apply(null, temp_json["CURVES"][curve])]
//     makePlot(temp_json["CURVES"][curve],div,600,250,domain_x,[0,temp_json["CURVES"][curve].length],curve)
// }


// function reformatJSONforPlotting(temp_json,curve,div){
// 	wellioviz.fromJSONofWEllGetThingsForPlotting(well_log_json,"DEPTH")
// }

function reformatJSONforPlotting(temp_json,curve,div){
    // generic_template = [
    //     {"multipleLines":"yes",
    //     "curveNames":[curve],
    //      "curveColors":["black","pink"],
    //      "fill":[
    //         {"curveName":curve,"fill":"yes","fillDirection":"left","cutoffs":[0,65,75,89],"fillColors":["lightgreen","green","red","pink"],"curve2":""},
    //        {"curveName":"PHID","fill":"yes","fillDirection":"left","cutoffs":[],"fillColors":[],"curve2":""}
    //      ],
    //      "data":"data_goes_here_once_formatted",
    //      "width":250,
    //      "height":600,
    //      "margin":({top: 20, right: 3, bottom: 30, left: 30}),
    //      "depth_curve_name":"DEPT",
    //     "divID":div
	// 	}]

	generic_template = [
	{
		"curve_box":{
		  "show_well_name":"yes", /// not built yet
		  "show_depth_type":"yes", /// not built yet
		  "show_curve_units":"yes", /// not built yet
		  "curve_box_depth_min":-999, /// not built yet
		  "curve_box_depth_max":9990000, /// not built yet
		  "take_out_null_or_visualize":"no", /// not built yet
		  "show_title":"yes", 
		  "width": 50, 
		  "height": 400, 
		  "height_multiplier_components":1,
		  "margin": {"top": 10, "right": 10, "bottom": 30, "left": 60}, 
		  "title": {"text": "", "title_font_size": "10px"}, /// not built yet
		  "div_id": "log_plot_div", /// Should be skip-able // default=random str? What happens if div doesn't exist?
		  "order_of_component":["curves","rectanges","lines"], /// not built yet
		  "lines_connected_across_curveboxes":"no", /// not built yet
		  "header_sep_svg_or_not":"yes",
		  "svg_header_height":"4em",
		  "gridlines":"yes",
		  "gridlines_color":'#D3D3D3',
		  "gridlines_stroke_width":0.20,
		  "grouped_or_independent_x_scales":"independent",
		  //// variables for how to draw mouseover of hover box
		  "mouseover_yes_or_no":"yes", //// "yes" or "no"
		  "mouseover_depth_or_depth_and_curve":"depth_and_curve", /// options= "depth_and_curve", "depth", or "curve"
		  "mouseover_curvename":"default", //// default is first curve
		  "mouseover_color_or_default_which_is_curve_color":"default" /// default is default, which then uses curve color or black
	  	},
	   "components":[{
		 "curves":[
		  { "data_type":"curve", 
			"curve_names":[curve],
			"curve_colors":["#0375D8"],
			"curve_stroke_dasharray":["solid"],
		   "stroke_linecap":["butt"],
		   "stroke_width":[1],
			"fill":[
					  {"curve_name":curve,"fill":"yes","fill_direction":"left","cutoffs":[0,5,999],"fill_colors":["gray","beige","white"],"curve2":""}
					],
			 "curve_units":[""],
			 "depth_limits":[{"min":"autocalculate","max":"autocalculate"}],
			 "curve_limits":[{"curve_name":"","min":-10000000,"max":3}],
			  "data":"not here yet",/// not built yet
			 "depth_curve_name":"DEPT",/// not built yet
			//////
		   "data_id":["placeholder_data_id",], /// not built yet
		   "well_names":[""], /// not built yet
		   "scale_linear_log_or_yours":["linear"],
		   "line_color": ["red"], /// not built yet
		   "max_depth": "autocalculate", /// not built yet
		   "min_depth": "autocalculate", /// not built yet
		   "depth_type_string":[""], 
		   "depth_units_string":[""],
		   "null_value": [""], /// not built yet
		  }
	   ],
		"lines":[
		  {
		   "data_type":"line",  /// not built yet
			"label":"example",  /// not built yet
		   "depth":-999, /// not built yet
		   "color":"red", /// not built yet
		   "stroke_width":"3px", /// not built yet
		   "stroke_style":"solid", /// not built yet
		   "transparency":1.0, /// not built yet
		   "stroke_linecap":"butt"
		  }
		],
		  "rectangles":[
			 {
		   "data_type":"rectangle", 
		   "depth_top":0,  
		   "x_starting_upper_left_corner":0,
		   "width":100, 
		   "height":100,
		   "stroke_width":"2px",
		   "stroke_linecap":"butt",
		   "fill":"red",
		   "opacity":0.5,
		   "label":"Core Example", // not built into plotting template yet
		   "label_orientation":"horizontal", // not built into plotting template yet
		   "lable_position":"right" // not built into plotting template yet
		  }
		 ]
	   }]
	  }]
	///////////
	console.log("depth curve name used", generic_template[0]["components"][0]["curves"][0]["depth_curve_name"])
    wellDataForPlotting = wellioviz.fromJSONofWEllGetThingsForPlotting(temp_json,generic_template[0]["components"][0]["curves"][0]["depth_curve_name"])
    curveDataFormatted = wellDataForPlotting["well_log_curves_reformatted_for_d3"]
    curve_names = wellDataForPlotting["curve_names"]
    uwi = wellDataForPlotting["uwi"]
    console.log("curveDataFormatted in function draw_curve() ",curveDataFormatted)
    //console.log("curveName in template generic_template['curveNames']:",generic_template[0]["curveNames"])
	//////////
	console.log("generic_template",generic_template)
    generic_template[0]["components"][0]["curves"][0]["data"] = curveDataFormatted
    new_generic_template = generic_template
    return new_generic_template
}

function draw_curve_original(curve,div){
	if(!div){div = "log_plot_div"}
	if(!curve){
		curve = "GR";
		console.log("temp_json['CURVES'][curve] = ",temp_json["CURVES"]["GR"])
	}
	console.log("curve = ",curve)
	///var domain_x = [Math.min.apply(null, temp_json["CURVES"][curve]),Math.max.apply(null, temp_json["CURVES"][curve])]
    ///makePlot(temp_json["CURVES"][curve],div,600,250,domain_x,[0,temp_json["CURVES"][curve].length],curve)
	var newDiv = document.createElement("div"); 
	disposible_log_div = "log_plot_div_sub"
	newDiv.id = disposible_log_div
	var currentDiv = document.getElementById("log_plot_div");
	currentDiv.append(newDiv)
	
    /////////
	console.log("generic_template:",reformatJSONforPlotting(temp_json))
	new_generic_template = reformatJSONforPlotting(temp_json)
	height = new_generic_template[0]["curve_box"]["height"]
	currentDiv.style.height = height+50+"px";
	////
	//array_of_plotting_jsons = forMultipleCurvesMinimumDataIntoTemplateFunc(curves_to_skip,prebuilt_minimal_styles_by_curvename)
	result = wellioviz.multipleLogPlot(disposible_log_div,[reformatJSONforPlotting(temp_json,curve,disposible_log_div)])
	//result = wellioviz.multipleLogPlot(disposible_log_div,array_of_plotting_jsons)
    console.log("curve plot should be present now... the template supplied is:",result)
}
 
////////// TEMPORARY GLOBALS TO CHANGE TO BETTER THING IN FUTURE!!!!!!!!  ////////////////////////////////////

let curves_to_skip = [{
	///// Curves included as an array of strings are onlythat will be plotted. If empty, will plot everything.
	"only_curves_to_include_if_present":[], // "BS","GR","RHOB","CALI","RS"
	///// If the array above is empty, all curves will be plotted except for the ones below.["Depth","Dep","UWI"]
	"curves_to_skip_if_present":["DEPTH","DEPT","depth","dep","DEP"]
  }]

let prebuilt_minimal_styles_by_curvename = [{
	//// Add your own curvenames and map them to a style, then define the style in second part of JSON.
	"mapping_curvename_to_stylename":{
	  "GR":"GammaRay",
	  "GR1":"GammaRay",
	  "Gamma-ray":"GammaRay",
	  "Caliper":"Caliper",
	  "Cal":"Caliper",
	  "CALI":"Caliper",
	  "ILD":"Resititivity_1",
	  "ild":"Resititivity_1",
	  "RESD":"Resititivity_1",
	  "RES":"Resititivity_1",
	  "Res":"Resititivity_1",
	  "RHOB":"Caliper",
	  "BS":"BS"
	},
	"styles":{
	  "GammaRay":{
		"line_color":"pink",
		"fill":"yes",
		"fill_direction":"right",
		// "cutoffs":[0,ShaleSiltCutOff,SiltSandCutOff],
		"cutoffs":[0,60,88],
		"fill_colors":["yellow","orange","gray"]
	  },
	  "Resititivity_1":{
		"line_color":"red",
		"fill":"yes",
		"fill_direction":"left",
		"cutoffs":[5,10,25],
		"fill_colors":["#ffe6e6","#ffb3b3","red"]
	  },
	  "Caliper":{
		"line_color":"purple",
		"fill":"yes",
		// "fill_direction":caliper_fill_direction,
		"fill_direction":"right",
		"cutoffs":[0],
		"fill_colors":["#dbdbdb"]
	  },
	  "BS":{
		"line_color":"purple",
		"fill":"yes",
		// "fill_direction":caliper_fill_direction,
		"fill_direction":"left",
		"cutoffs":[9],
		"fill_colors":["purple"]
	  },
	  "all_others":{
		"line_color":"black",
		"fill":"yes",
		"fill_direction":"left",
		"cutoffs":[0],
		"fill_colors":["gray"]
	  } 
	}
  }]

function changeConfig(config_value,config){
	draw_curve("log_plot_div",{"height_multiplier_components":config_value})
}

function draw_curve(div,config_change="none"){
	if(!div){div = "log_plot_div"}

	let height_multiplier_components = 1.5
	if(config_change!="none"){
		if(Object.keys(config_change)=="height_multiplier_components"){
			height_multiplier_components = config_change["height_multiplier_components"]
		}
	}
	
	// if(!curve){
	// 	curve = "GR";
	// 	console.log("temp_json['CURVES'][curve] = ",temp_json["CURVES"]["GR"])
	// }
	///console.log("curve = ",curve)
	///var domain_x = [Math.min.apply(null, temp_json["CURVES"][curve]),Math.max.apply(null, temp_json["CURVES"][curve])]
    ///makePlot(temp_json["CURVES"][curve],div,600,250,domain_x,[0,temp_json["CURVES"][curve].length],curve)
	var newDiv = document.createElement("div"); 
	disposible_log_div = "log_plot_div_sub";
	newDiv.id = disposible_log_div
	// newDiv.class = "log_plot_div"
	newDiv.classList.add = "horizontal_div_scroll_fix"
	var currentDiv = document.getElementById("log_plot_div");
	currentDiv.append(newDiv)
	depth_curve_name = wellioviz.findDepthName(temp_json)
	three_things_2 = wellioviz.fromJSONofWEllGetThingsForPlotting(temp_json,depth_curve_name)
	curve_names2 = three_things_2["curve_names"]
	uwi2 = three_things_2["uwi"]
	well_log_curves_reformatted_for_d3_2 = three_things_2["well_log_curves_reformatted_for_d3"]
	///// hard coded for now but need to change!!!!!!!!!!!!!!!!!!

	let header_sep_svg_or_not = "yes";
	let rectange_depth_top = -9999999;
	///// hard coded for now but need to change!!!!!!!!!!!!!!!!!!
	example_template = getExampleTemplateWithEdits(height_multiplier_components,header_sep_svg_or_not,rectange_depth_top)
	/////////

	
	console.log("generic_template:",reformatJSONforPlotting(temp_json))
	new_generic_template = reformatJSONforPlotting(temp_json)
	height = new_generic_template[0]["curve_box"]["height"]
	currentDiv.style.height = height+60+"px";
	////
	array_of_plotting_jsons = forMultipleCurvesMinimumDataIntoTemplateFunc(well_log_curves_reformatted_for_d3_2,curves_to_skip,prebuilt_minimal_styles_by_curvename,uwi2,depth_curve_name)
	//result = wellioviz.multipleLogPlot(disposible_log_div,[reformatJSONforPlotting(temp_json,curve,disposible_log_div)])
	result = wellioviz.multipleLogPlot("log_plot_div",array_of_plotting_jsons)
    console.log("curve plot should be present now... the template supplied is:",result)
}

function forMultipleCurvesMinimumDataIntoTemplateFunc(well_log_curves_reformatted_for_d3_2,curves_to_skip,prebuilt_minimal_styles_by_curvename){
	var array_of_jsons_for_what_to_plot = []
	var array_curvenames = Object.keys(well_log_curves_reformatted_for_d3_2[0])
	var UWI_index = array_curvenames.indexOf("UWI")
	array_curvenames.splice(UWI_index, 1)
	for (var i = 0; i < array_curvenames.length; i++) {
	  if(curves_to_skip[0]["curves_to_skip_if_present"].includes(array_curvenames[i])){}
	  else{
		 if(curves_to_skip[0]["only_curves_to_include_if_present"].includes(array_curvenames[i]) || curves_to_skip[0]["only_curves_to_include_if_present"].length == 0 ){
		   ///// Get Styles if they exist, if not, use "all_others"
		  var style = prebuilt_minimal_styles_by_curvename[0]["styles"]["all_others"]
		   if(prebuilt_minimal_styles_by_curvename[0]["mapping_curvename_to_stylename"][array_curvenames[i]]){
			var stylename = prebuilt_minimal_styles_by_curvename[0]["mapping_curvename_to_stylename"][array_curvenames[i]]
			 style = prebuilt_minimal_styles_by_curvename[0]["styles"][stylename]
		   }
		   
			var json_template_for_plotting = wellioviz.minimumDataIntoTemplateFunc(example_template,well_log_curves_reformatted_for_d3_2,[uwi2],           [array_curvenames[i]],[style["line_color"]],[""],[
			   {"curve_name":array_curvenames[i],"fill":style["fill"],"fill_direction":style["fill_direction"],"cutoffs":   style["cutoffs"],"fill_colors":  style["fill_colors"],"curve2":""}],"well_holder_1A",180,400,depth_curve_name)
	  ///
	  array_of_jsons_for_what_to_plot.push(json_template_for_plotting)  
		 }
	  }
	}  
	return array_of_jsons_for_what_to_plot
  }

function getExampleTemplateWithEdits(height_multiplier_components,header_sep_svg_or_not,rectange_depth_top){
	
	var example_template1 = wellioviz.curveBoxTemplateExamples("example")
	var height_multiplier_components = parseFloat(height_multiplier_components)
	var header_sep_svg_or_not = "yes"
	example_template1[0]["curve_box"]["height_multiplier_components"] = height_multiplier_components;
	example_template1[0]["curve_box"]["header_sep_svg_or_not"] = header_sep_svg_or_not
	example_template1[0]["curve_box"]["title"]["text"] = uwi2;
	// example_template1[0]["curve_box"]["show_title"] = "yes"
	// example_template1[0]["curve_box"]["svg_header_height"] = svg_header_height;
	example_template1[0]["components"][0]["rectangles"][0]["depth_top"] = rectange_depth_top;
	example_template1[0]["components"][0]["rectangles"][0]["height"] = 0;
	return example_template1
  }

// function draw_curve_from_data(curve,div,curve_name){
// 	// if(!div){div = "#log_plot_div"}
// 	// if(!curve){
// 	// 	curve = "GR";
// 	// 	console.log("temp_json['CURVES'][curve] = ",temp_json["CURVES"]["GR"])
// 	// }
// 	// if(!curve_name){curve_name = "unknown curve"}
// 	// var curve = temp_json["CURVES"]["GR"]
// 	var curve = Array.from(curve)
// 	//var curve = "GR"
// 	var div = "#dl_trial_a";
// 	var curve_name = "GR";
// 	console.log("curve = ",curve);
// 	console.log("div = ",div);
// 	console.log("curve_name = ",curve_name);

// 	// var domain_x = [Math.min.apply(null, curve),Math.max.apply(null, curve)]
//  //    makePlot2(curve,div,600,250,domain_x,[0,curve.length],curve_name)
//     var domain_x = [Math.min.apply(null, curve),Math.max.apply(null, curve)]
//     makePlot(curve,div,600,250,domain_x,[0,curve.length],curve_name)
// }