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

function draw_curve(curve,div){
	if(!div){div = "#log_plot_div"}
	if(!curve){
		curve = "GR";
		console.log("temp_json['CURVES'][curve] = ",temp_json["CURVES"]["GR"])
	}
	console.log("curve = ",curve)
	var domain_x = [Math.min.apply(null, temp_json["CURVES"][curve]),Math.max.apply(null, temp_json["CURVES"][curve])]
    makePlot(temp_json["CURVES"][curve],div,600,250,domain_x,[0,temp_json["CURVES"][curve].length],curve)
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