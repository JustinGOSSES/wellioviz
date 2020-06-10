!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.commonJsModule=e():"undefined"!=typeof global?global.commonJsModule=e():"undefined"!=typeof self&&(self.commonJsModule=e())}(function(){var define,module,exports;module={exports:(exports={})};

// var fs = require('fs');

module.exports = {

  // Read and transform Lasio Json files to Wellio.js json data format

/**
 * File reading utility function.
 * @param {string} : file_to_read - The file to open.
 *
 * @returns {string} : The file's contents as a string.
 */
  read_lasio_json_file: function(file_to_read) {
    // Configure fs if running from node
    let fs = '';

    if (process !== 'undefined' && process.versions != null && process.versions.node != null) {
       fs = require('fs');
    }

    return fs.readFileSync(file_to_read, 'utf8');
  },

/**
* The lasio_obj_2_wellio_obj function transforms lasio JSON strings into wellio.js JSON data format in memory and returns it.
* @param {object} lasio_json - A JavaScript object representation of lasio well log format
*
* @example
* let wellio = require('wellio')
* let lasio_json_str = wellio.read_lasio_json_file('lasio.json');
* let lasio_obj = JSON.parse(lasio_json_str);
* let wellio_obj = wellio.lasio_obj_2_wellio_obj(lasio_obj);
*
* @returns {object} A wellio style JSON object
*/
  lasio_obj_2_wellio_obj: function(lasio_obj) {

    let std_headers = {
      'Version': 'VERSION INFORMATION',
      'Well': 'WELL INFORMATION BLOCK',
      'Curves': 'CURVE INFORMATION BLOCK', 
      'Parameter': 'PARAMETER INFORMATION'
    };

    let lasjson = {};
		lasjson["VERSION INFORMATION"] = {};
		lasjson["WELL INFORMATION BLOCK"] = {};
		lasjson["CURVE INFORMATION BLOCK"] = {};
		lasjson["PARAMETER INFORMATION"] = {};
		lasjson["CURVES"] = lasio_obj.data;

    // Example code for adding non-standard headers
    for (let item in lasio_obj.metadata) {
      if ( !(item in std_headers) ) {
        lasjson[item.toUpperCase()] = lasio_obj.metadata[item];
      }
      else {
        for (let mnemonic in lasio_obj.metadata[item]) {
          section = std_headers[item];      
          lasjson[section][mnemonic] = {
            MNEM: mnemonic,
            UNIT: '',
            DATA: lasio_obj.metadata[item][mnemonic],
            'DESCRIPTION OF MNEMONIC 1': '',
            'DESCRIPTION OF MNEMONIC 2': ''
          };
        }
      }
    }

    return lasjson;
  },


/**
 * A helper function that proves wellio,js was installed correctly. It merely returns the argument provided to it. For example, "test" as input would return "test".
 * @param {*} onelas anything
 * @returns Returns the input that was givne as an argument. This is just for testing that wellio was installed correctly.
 * @example wellio.returnThing("test") = "test"
 */
	returnThing: function(onelas){
		return onelas
	},


/**
* Loads a LAS 2.0 file from local files
* @param {string} well_log A string reprepresentatiion of filename of well log to be loaded into memory
* @returns {string} A string representation of the contents of that well log file. It is a single string.
*/
	loadLAS:function(well_log){
		var file = well_log
    var fs = '';

    if (process !== 'undefined' && process.versions != null && process.versions.node != null) {
       fs = require('fs');
    }
    var contents = fs.readFileSync(file).toString();
    // var contents = fs.readFileSync('test.LAS', 'utf8');
    return contents
	},
	//// Converts a LAS 2.0 file already loaded into memory into a json format
	/**
	 * las2jso function converts a LAS 2.0 file already loaded into memory as a string into a JSON object
	 * @param {string} onelas A string representation of a LAS 2.0 well log file. Typically from the result of the loadLAS function.
	 * @returns {Object} A JSON object that represents the information that was in the LAS 2.0 well log file but in JSON wellio style format.
	 */
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
		//// Split in to las sections that start with a tilde: ~.
		var split1 = onelas.split(/(~[^~]+)/);
		console.log("split1 = ",split1)
		var vers_str = "";
		var well_info_str = "";
		var curve_info_str = "";
		var param_info_str = "";
		var other = "";
		var curve_str = "";

		//// As the 'OTHER' block may or may not be present, we have to split by '~' and then look for a substring to make sure we have the right block before we put each into a variable.
		for(i = 0; i < split1.length; i++){
			//// Skip blank entries in the split1 array.
			if (split1[i].length === 0) {
				continue;
			}
			if(split1[i].includes("~V")){var vers_str = split1[i]}
			else if (split1[i].includes("~W")){well_info_str = split1[i]}
			else if (split1[i].includes("~C")){curve_info_str = split1[i]}
			else if (split1[i].includes("~P")){param_info_str = split1[i]}
			else if (split1[i].includes("~O")){other = split1[i]}
			else if (split1[i].includes("~A")){curve_str = split1[i]}
			else{
				console.log("WARNING: In wellio.js the las2json() function: split1[" + i + "] is not a recognized las section" )
				console.log("elem: [" + split1[i] + "]"); 
			}
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
		//// Working with PARAMETER INFORMATION block second by splitting it by newline into an array.
		//// This skips the line with the section's title.
		var param_line_array = param_info_str.split("\n").slice(1,);
		for(i = 0; i < param_line_array.length; i++){
			//// create one object for parameter line
			//// Skip empty elements and comment elements that start with '#'.
			if(param_line_array[i] != "" && param_line_array[i][0] !== '#'){
				var param_obj_inst = splitLineofType1(Object.assign({}, param_info_obj),param_line_array[i]);
				lasjson["PARAMETER INFORMATION"][param_obj_inst["MNEM"]] = param_obj_inst
			}
		}
		//// Working with CURVE INFORMATION BLOCK second by splitting it by newline into an array.
		//// This skips the line with the section's title.
		var curve_line_array = curve_info_str.split("\n").slice(1,);
		for(i = 0; i < curve_line_array.length; i++){
			//// create one object for parameter line
			//// Skip empty elements and comment elements that start with '#'.
			if(curve_line_array[i] != "" && curve_line_array[i][0] !== '#'){
				var curve_obj_inst = splitLineofType1(Object.assign({}, curve_info_obj),curve_line_array[i]);
				lasjson["CURVE INFORMATION BLOCK"][curve_obj_inst["MNEM"]] = curve_obj_inst
			}
		}
		//// Working with WELL INFORMATION BLOCK second by splitting it by newline into an array.
		//// This skips the line with the section's title.
		var well_line_array = well_info_str.split("\n").slice(1,);
		for(i = 0; i < well_line_array.length; i++){
			if(well_line_array[i].includes("Generated")){
				lasjson["WELL INFORMATION BLOCK"]["GENERATED"] = well_line_array[i].replace("\r","").replace("\t"," ").replace("#","")
			}
			//// create one object for parameter line
			//// Skip empty elements and comment elements that start with '#'.
			if(well_line_array[i] != "" && well_line_array[i][0] !== '#'){
				var well_obj_inst = splitLineofType1(Object.assign({}, well_info_obj),well_line_array[i]);
				lasjson["WELL INFORMATION BLOCK"][well_obj_inst["MNEM"]] = well_obj_inst
			}
			else{
				console.log("INFO: in else for well_line: " + i)
				console.log("elem: [" + well_line_array[i] + "]");
			}
		}
		//// Work with CURVES section by splitting it by newline into an array,
		//// Iterate through the array items populate arrays for each key
		var curve_str_array = curve_str.split("\n");

		//// Get the curve column names from the curve names in the curve information block
		////
		//// Per LAS_20_Update_Jan2014.pdf section 5.5 specs for ~C(Curve Information)
		//// - This section is manditory.
		//// - It desribes the curves and its units in the order they appear in the ~ASCII
		////	 log data section of the file.
		//// - The channels described in this section must be present in the data set.
		var curve_names_array_holder = [];
		var curve_info = Object.keys(lasjson['CURVE INFORMATION BLOCK']);

		if (curve_info.length > 0){
			for(k = 0; k < curve_info.length; k++){
				col_name = curve_info[k];
				curve_names_array_holder.push(col_name);
				lasjson.CURVES[col_name] = [];
			}
		}

		var curve_data_line_array = [];

		//// start at position 1 instead of 0 is to avoid the curve names
		for(j = 1; j < curve_str_array.length; j++){
			//// Skip empty rows.
			if (curve_str_array[j].length === 0) {
				continue;
			}

			var temp_data_array = curve_str_array[j].split(/\s+/);
			//// Split can leave an empty element at the beginning, remove it.
			if (temp_data_array[0].length === 0){
				temp_data_array.shift();
			}

			//// If data is wrapped continue to accumulate data from rows till
			//// we have a data element for each data column
			var idx = curve_data_line_array.length;
			curve_data_line_array.length = idx + temp_data_array.length;
			for (var i = 0; i < temp_data_array.length; i++, idx++) {
				curve_data_line_array[idx] = temp_data_array[i];
			}

			if (
				lasjson["VERSION INFORMATION"].WRAP.DATA == 'YES'
				&& curve_data_line_array.length < curve_names_array_holder.length)
			{
				continue;
			}

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
			//// Zero out curve_data_line_array for next set of data
			curve_data_line_array = [];
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
