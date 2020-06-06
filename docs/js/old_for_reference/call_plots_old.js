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



function makePlot(single_curve,div,height,width,domain_x,domain_y,curve_name){
	// "#log_plot_div"
	var b2=g3.plot(div).height(height).width(width).xDomain(domain_x).yDomain([0,single_curve.length]).xTitle(curve_name).draw()
	console.log("got to second part of makePlot2 and b2 = ",b2)
	g3.log(b2,single_curve).draw()
	console.log("got to second part of makePlot2 and b2 = ",b2)

}

function makePlot2(single_curve,div,height,width,domain_x,domain_y,curve_name){
	// "#log_plot_div"
	// var div = "dl_trial_a"
	var b2=g3.plot(div).height(height).width(width).xDomain(domain_x).yDomain([0,single_curve.length]).xTitle(curve_name).draw()
	console.log("1 got to second part of makePlot2 and b2 = ",b2)
	g3.log(b2,single_curve).draw()
	console.log("2 got to second part of makePlot2 and b2 = ",b2)

}

function draw_curveG3(curve,div){
	if(!div){div = "#log_plot_div"}
	if(!curve){
		curve = "GR";
		console.log("temp_json['CURVES'][curve] = ",temp_json["CURVES"]["GR"])
	}
	console.log("curve = ",curve)
	var domain_x = [Math.min.apply(null, temp_json["CURVES"][curve]),Math.max.apply(null, temp_json["CURVES"][curve])]
    makePlot(temp_json["CURVES"][curve],div,600,250,domain_x,[0,temp_json["CURVES"][curve].length],curve)
}

function reformatJSONforPlotting(temp_json,curve,div){
    generic_template = [
        {"multipleLines":"yes",
        "curveNames":[curve],
         "curveColors":["black","pink"],
         "fill":[
            {"curveName":curve,"fill":"yes","fillDirection":"left","cutoffs":[0,65,75,89],"fillColors":["lightgreen","green","red","pink"],"curve2":""},
           {"curveName":"PHID","fill":"yes","fillDirection":"left","cutoffs":[],"fillColors":[],"curve2":""}
         ],
         "data":"data_goes_here_once_formatted",
         "width":250,
         "height":600,
         "margin":({top: 20, right: 3, bottom: 30, left: 30}),
         "depth_curve_name":"DEPTH",
        "divID":div
        }]
    ///////////
    wellDataForPlotting = wellioviz.fromJSONofWEllGetThingsForPlotting(temp_json)
    curveDataFormatted = wellDataForPlotting["well_log_curves_reformatted_for_d3"]
    curve_names = wellDataForPlotting["curve_names"]
    uwi = wellDataForPlotting["uwi"]
    console.log("curveDataFormatted in function draw_curve() ",curveDataFormatted)
    console.log("curveName in template generic_template['curveNames']:",generic_template[0]["curveNames"])
    //////////
    generic_template[0]["data"] = curveDataFormatted
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
    
    /////////
    console.log("generic_template:",reformatJSONforPlotting(temp_json))
    result = wellioviz.multipleLogPlot(div,[reformatJSONforPlotting(temp_json,curve,div)])
    console.log("curve plot should be present now... the template supplied is:",result)
}

function draw_curve_from_data(curve,div,curve_name){
	// if(!div){div = "#log_plot_div"}
	// if(!curve){
	// 	curve = "GR";
	// 	console.log("temp_json['CURVES'][curve] = ",temp_json["CURVES"]["GR"])
	// }
	// if(!curve_name){curve_name = "unknown curve"}
	// var curve = temp_json["CURVES"]["GR"]
	var curve = Array.from(curve)
	//var curve = "GR"
	var div = "#dl_trial_a";
	var curve_name = "GR";
	console.log("curve = ",curve);
	console.log("div = ",div);
	console.log("curve_name = ",curve_name);

	// var domain_x = [Math.min.apply(null, curve),Math.max.apply(null, curve)]
 //    makePlot2(curve,div,600,250,domain_x,[0,curve.length],curve_name)
    var domain_x = [Math.min.apply(null, curve),Math.max.apply(null, curve)]
    makePlot(curve,div,600,250,domain_x,[0,curve.length],curve_name)
}