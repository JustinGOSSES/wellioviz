(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
wellio = require('wellio');

las2json = wellio.las2json;
},{"wellio":2}],2:[function(require,module,exports){
(function (global){
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.commonJsModule=e():"undefined"!=typeof global?global.commonJsModule=e():"undefined"!=typeof self&&(self.commonJsModule=e())}(function(){var define,module,exports;module={exports:(exports={})};

// var fs = require('fs');

module.exports = {
	//// For quick testing when a LAS file isn't handy, use returnThing function
	//// It just returns the argument given to it
	returnThing: function(onelas){
		return onelas
	},
	//// Loads a LAS 2.0 file from local files
	loadLAS:function(well_log){
		var file = well_log
		var contents = fs.readFileSync(file).toString();
		// var contents = fs.readFileSync('test.LAS', 'utf8');
		return contents
	},
	//// Converts a LAS 2.0 file already loaded into memory into a json format
	las2json: function(onelas){
		//// var lasjson establishes a blank json for holding las 2.0 data. It will look like the example below:
		var lasjson = {
				"VERSION INFORMATION":{
					"VERS":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""},
					"WRAP":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""}
				}
				,
				"WELL INFORMATION BLOCK":{
						"GENERATED":"",
						"MNEM_0":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""},
						"MNEM_1":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""},
						"MNEM_2":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""}
					}
				,
				"CURVE INFORMATION BLOCK":{
						"MNEM_0":{"MNEM":"","UNIT":"","ERCB CURVE CODE":"","CURVE DESCRIPTION 1":"","CURVE DESCRIPTION 2":""}, 
						"MNEM_0":{"MNEM":"","UNIT":"","ERCB CURVE CODE":"","CURVE DESCRIPTION 1":"","CURVE DESCRIPTION 2":""}
					}	
				,
				"PARAMETER INFORMATION":{
						"MNEM_0":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""}, 
						"MNEM_1":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""}
					}
				,
				"CURVES":{
						"Curve_NAME_ONE" :[1,2,3,4,5,6,7,8,9,10,11],
						"Curve_NAME_ONE" :[1,2,3,4,5,6,7,8,9,10,11],
					}
			}
		//// Some objects in the json were partially populated in the example above to make understanding the format easier.
		//// We'll empty them as a first step 
		lasjson["VERSION INFORMATION"] = {};
		lasjson["WELL INFORMATION BLOCK"] = {};
		lasjson["CURVE INFORMATION BLOCK"] = {};
		lasjson["PARAMETER INFORMATION"] = {};
		lasjson["CURVES"] = {};
		//// Within the "blocks" ["CURVE INFORMATION BLOCK","PARAMETER INFORMATION", etc.] there are other objects with repeating keys.
		//// The variables below will be the building blocks for each of those objects {}. They are initially populated with empty strings as the values.
		var ver_info_obj = {"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""};
		var well_info_obj = {"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""};
		var curve_info_obj = {"MNEM":"","UNIT":"","ERCB CURVE CODE":"","CURVE DESCRIPTION 1":"","CURVE DESCRIPTION 2":""};
		var param_info_obj = {"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""};
		//// The las file is read as a txt file. It will first be split into seperate strings based on "~" character which occurs at the top of each "block"
		console.log("onelas = ",onelas)
		var split1 = onelas.split("~");
		console.log("split1 = ",split1)
		var vers_str = "";
		var well_info_str = "";
		var curve_info_str = "";
		var param_info_str = "";
		var other = "";
		var curve_str = "";

		//// As the 'OTHER' block may or may not be present, we have to split by '~' and then look for a substring to make sure we have the right block before we put each into a variable.
		for(i = 0; i < split1.length; i++){
			if(split1[i].includes("VERSION")){var vers_str = split1[i]}
			else if (split1[i].includes("WELL INFORMATION")){well_info_str = split1[i]}
			else if (split1[i].includes("CURVE INFORMATION")){curve_info_str = split1[i]}
			else if (split1[i].includes("PARAMETER")){param_info_str = split1[i]}
			else if (split1[i].includes("OTHER")){other = split1[i]}
			else if (split1[i].includes("A  DEPTH")){curve_str = split1[i]}
			else{console.log("there is a problem, in wellio.js the las2json() function has to many item in the string array created by splitting on '~'. ")}
		}


		//// Working with version block first by splitting it by newline and places each item into an array
		//// and taking items of array 1 and 2 for vers and wrap
		var vers_line = vers_str.split("\n")[1];
		var wrap_line = vers_str.split("\n")[2];
		//// As version information, well information, and parameter information blocks contain objects with the same keys, we can process them using a loop.
		//// function to process objects for ver_info_obj, well_inf_obj, and param_info_obj
		//// The splitLineofType1() function takes as argument the prototypical object building block and the array of strings for that block
		function splitLineofType1(ver_info_obj,arrayString){
			//// splits string (should be a single line from the LAS text) by ":", takes the first item of the resulting array, and then replaces any " " with "".
			var vers_line_1half = arrayString.split(":")[0].replace(" ","");
			//// splits the previous string variable by "." into an array of strings.
			var vers_line_1half_array = vers_line_1half.split(".")
			//// trimming this so I get "UWI" instead of "UWI    "
			ver_info_obj["MNEM"] = vers_line_1half_array[0].trim()
			var unit_and_data = vers_line_1half_array.slice(1,vers_line_1half_array.length);
			var unit_and_data_str = "                        ";
			if (unit_and_data.length > 1){
				unit_and_data_str = unit_and_data[0].toString()+"."+unit_and_data[1].toString();
			}
			else{
				unit_and_data_str = unit_and_data.toString()
			}
			var unit = unit_and_data_str[0,5].trim();
			var data = unit_and_data_str.substring(5,unit_and_data_str.length).trim();
			ver_info_obj["DATA"] = data
	  		ver_info_obj["UNIT"] = unit
	  		//// 
	  		if(arrayString.split(":")[1].indexOf("-") !== -1){
	  			ver_info_obj["DESCRIPTION OF MNEMONIC 1"] = arrayString.split(":")[1].split("-")[0].trim()
	  			ver_info_obj["DESCRIPTION OF MNEMONIC 2"] = arrayString.split(":")[1].split("-")[1].replace("\r","").trim()
	  		}
	  		else{
	  			ver_info_obj["DESCRIPTION OF MNEMONIC 1"] = arrayString.split(":")[1].replace("\r","").trim()
	  			ver_info_obj["DESCRIPTION OF MNEMONIC 2"] = ""
	  		}
	 		return ver_info_obj
		};
		lasjson["VERSION INFORMATION"]["WRAP"] = splitLineofType1(Object.assign({}, ver_info_obj),wrap_line);
		lasjson["VERSION INFORMATION"]["VERS"] = splitLineofType1(Object.assign({}, ver_info_obj),vers_line);
		//// Working with PARAMETER INFORMATION block second by splitting it by newline into an array and taking items after 0,1,2 or [3:]
		//// This basically just skips some lines with titles and such
		var param_line_array = param_info_str.split("\n").slice(3,);
		for(i = 0; i < param_line_array.length; i++){
			//// create one object for parameter line
			if(param_line_array[i] != ""){
				var param_obj_inst = splitLineofType1(Object.assign({}, param_info_obj),param_line_array[i]);
				lasjson["PARAMETER INFORMATION"][param_obj_inst["MNEM"]] = param_obj_inst
			}
		}
		//// Working with CURVE INFORMATION BLOCK second by splitting it by newline into an array and taking items after 0,1,2 or [3:]
		var curve_line_array = curve_info_str.split("\n").slice(3,);
		for(i = 0; i < curve_line_array.length; i++){
			//// create one object for parameter line
			if(curve_line_array[i] != ""){
				var curve_obj_inst = splitLineofType1(Object.assign({}, curve_info_obj),curve_line_array[i]);
				lasjson["CURVE INFORMATION BLOCK"][curve_obj_inst["MNEM"]] = curve_obj_inst
			}
		}
		//// Working with WELL INFORMATION BLOCK second by splitting it by newline into an array and taking items after 0,1,2 or [3:]
		var well_line_array = well_info_str.split("\n").slice(3,);
		for(i = 0; i < well_line_array.length; i++){
			if(well_line_array[i].includes("Generated")){
				lasjson["WELL INFORMATION BLOCK"]["GENERATED"] = well_line_array[i].replace("\r","").replace("\t"," ").replace("#","")
			}
			//// create one object for parameter line
			else if(well_line_array[i] != ""){
				var well_obj_inst = splitLineofType1(Object.assign({}, well_info_obj),well_line_array[i]);
				lasjson["WELL INFORMATION BLOCK"][well_obj_inst["MNEM"]] = well_obj_inst
			}
			else{
				console.log(" got else ")
			}
		}
		//// Working with CURVES second by splitting it by newline into an array,
		//// then using the first line item of that array to find the curve names
		//// using those curves names to establish object keys and then interating through the other array items
		//// and populating arrays for each key
		var curve_str_array = curve_str.split("\n");
		var curve_names_array = [];
		var curve_names_array_holder = [];
		if(curve_str_array[0][0] === "A"){
			curve_names_array = curve_str_array[0].split(" ")
			var last_curv_name_position = curve_names_array.length - 1;
			curve_names_array[last_curv_name_position] = curve_names_array[last_curv_name_position].replace("\r","")
			console.log("0 curve_names_array = ",curve_names_array)
			curve_names_array = curve_names_array.slice(1,curve_names_array.length);
			for(i = 0; i < curve_names_array.length; i++){
				if(curve_names_array[i] !== ""){
					console.log("0.5 curve_names_array[i] = ",curve_names_array[i])
					curve_names_array_holder.push(curve_names_array[i]);
					lasjson["CURVES"][curve_names_array[i]] = []
				}
			}
		}
		else{console.log("Couldn't find curve names above curves in LAS, check formatting!")}
		//// start at position 1 instead of 0 is to avoid the curve names
		for(j = 1; j < curve_str_array.length; j++){
			var curve_data_line_array = curve_str_array[j].split(" ");
			var counter_of_curve_names = 0;
			console.log("curve_data_line_array.length = ",curve_data_line_array.length)
			console.log("curve_data_line_array = ",curve_data_line_array)
			var last_curv_data_line_position = curve_data_line_array.length - 1;
			console.log("curve_data_line_array[last_curv_data_line_position] = ",curve_data_line_array[last_curv_data_line_position])
			curve_data_line_array[last_curv_data_line_position] = curve_data_line_array[last_curv_data_line_position].replace("\r","")
			console.log("curve_data_line_array[last_curv_data_line_position] = ",curve_data_line_array[last_curv_data_line_position])
			for(k = 0; k < curve_data_line_array.length; k++){
				if(curve_data_line_array[k] !== ""){				
					lasjson["CURVES"][curve_names_array_holder[counter_of_curve_names]].push(curve_data_line_array[k])
					counter_of_curve_names += 1;
				}
			}
		}
		console.log(" test: lasjson",lasjson);
		return(lasjson)
	},
	
	//// Given a well already converted into json, returns the available curves
	CurveNames: function(well_json){
		var curveNames = Object.keys(well_json["CURVES"]);
		return curveNames
	},
	//// 
	VER_block: function(well_json){
		return well_json["VERSION INFORMATION"]
	},
	//// Given a well already converted into json, returns the well UWI
	UWI: function(well_json){
		return well_json["WELL INFORMATION BLOCK"]["UWI"]["DATA"]
	},
	//// Given a well already converted into json, returns a given curve name in string format
	getCurve(well_json,curve){
		if (!well_json["CURVES"][curve]){
			console.log("in getCurve function, that curve does not exist! =",curve)
			return "that curve does not exist! see console.log"

		} else {
			return well_json["CURVES"][curve]
		}
	}
}



return module.exports;});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
