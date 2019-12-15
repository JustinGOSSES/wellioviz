//  Tests go here


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



  
testIncomingDataStream = [{
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

