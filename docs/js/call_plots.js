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
		  "width": 260, 
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

function draw_curve(curve,div){
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
    result = wellioviz.multipleLogPlot(disposible_log_div,[reformatJSONforPlotting(temp_json,curve,disposible_log_div)])
    console.log("curve plot should be present now... the template supplied is:",result)
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