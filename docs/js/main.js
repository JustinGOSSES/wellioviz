///////////////////////  global objects placeholders   ////////////////////////  
//// ... maybe not good programming practice but quick to do for simple demo.

//// var all_files is a holder for the las files uploaded into the browser
var all_files = [""];
//// var temp_json is the single well las file converted to json object format
var temp_json = {};

////////////////////////  HELPER FUNCTIONS  //////////////////////// 


// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

//// Function that checks if a temp_json exists. If it does, it allows divs that manipulate that JSON to show
function checkForJSONThenCollapse(divID){
  console.log("divID",divID)
  console.log("check check")
  console.log(temp_json)
  if(divID=="#welldisplaycurves"){
    draw_curve("log_plot_div")
  }
  if (!temp_json['WELL INFORMATION BLOCK']){"button did nothing because well JSON doesn't exist"}
  else{
    $('.collapse').collapse("hide")
    //// toggle only the one clicked!
    $(divID).collapse("toggle")
  }
}



//// helper function that removes the text depiction of the las file. 
function removeTextLAS(){
  fileContentsDiv = document.getElementById("fileContents");
  while (fileContentsDiv.hasChildNodes()) {
    fileContentsDiv.removeChild(fileContentsDiv.lastChild);
  }
}

//// helper function that removes the children of the given DOM element. 
function remove_DOM_children(div_name){
  if(!div_name){
    div_name = 'log_plot_div'
  }
  fileContentsDiv = document.getElementById(div_name);
  while (fileContentsDiv.hasChildNodes()) {
    fileContentsDiv.removeChild(fileContentsDiv.lastChild);
  }
}

//// helper function that removes the inner html of the given DOM element, like the "test" from <p>test</p>
function removeInnerHTML(div_id){
  document.getElementById(div_id).innerHTML = ""
}

//// helper function that take a string and a substring of that string and replaces the substring with "" or nothing if it finds the substring.
function removeSubStr(string,substring){
  return string.replace(substring,"")
}

////////////////////////  LOADING FUNCTIONS  //////////////////////// 



//// Reads in an example LAS files from webpage assets instead of local computer
function readInLASFromASSETS(){
  //all_files = ["./assets/00-01-01-073-05W5-0.LAS"];
  //// removes all status spans for uploads
  removeInnerHTML("upload-file-info");
  removeInnerHTML("upload-success");
  $.ajax({
            url : "./assets/00-01-01-073-05W5-0.LAS",
            dataType: "text",
            success : function (data) {
              all_files = [data,""]
              document.getElementById("upload-success").innerHTML = "upload success";
              console.log("successfully loaded .draw_curve_from_data/assets/00-01-01-073-05W5-0.LAS")
            },
            error : function (XMLHttpRequest, textStatus, errorThrown) {
              document.getElementById("upload-success").innerHTML = "upload failure";
              console.log("error in function readInLASFromASSETS() : ",textStatus, errorThrown)
            } 
        });
}

//// function for "Load into browser memory" button
function readInFilesFunction(){
  //// removes all status spans for uploads
  removeInnerHTML("upload-file-info");
  removeInnerHTML("upload-success");
  var files = document.getElementById("files").files;
  if (files && files.length !== 0) {
    all_files = []
    for (var i = 0, file; file = files[i]; i++) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
          all_files.push(evt.target.result);
      }
      reader.onerror = function (evt) {
          document.getElementById("fileContents").innerHTML = "error reading file";
      }
    }
  uploadStatusSpan = document.getElementById("upload-file-info").innerHTML = "upload success";
  }
  else{
    uploadStatusSpan = document.getElementById("upload-file-info").innerHTML = "  "+"upload failure";
  }
  //console.log("all_files = ",all_files)
}



function changeMenuBarButtonColorOnConvert(){
    //// CHANGE buttons from gray to blue in top row
    var listMenuItems = document.getElementsByClassName("afterconvert")
    console.log("list",list)
    var i;
    for (i = 0; i < listMenuItems.length; i++) {
      // button.style.backgroundColor = "blue";
      console.log("menu_item",listMenuItems[i])
      // listMenuItems[i].classList.add("text-primary")
      listMenuItems[i].classList.add("text-light")
    }
}

//// Function that calls several other functions involved with converting a new well from las to json 
//// updating the global variables as needed, and changing some new DOM elements to reflect the new well data.
//// It calls the las2json(onelas) function found in wellio.js JavaScript file.
function convert_and_startHelpers(){
  //// removes the buttons for the well curves from the previous well if they exist
  remove_DOM_children("curveButtons_holder")
  //// calls the function that takes a single LAS text file representing a single well and returns an object variable in JSON format for that well.
  var single_well_json = las2json(all_files[0]);
  // console.log('single_well_json = ',single_well_json)
  //// replaces the global variable temp_json with the new well json var single_well_json
  temp_json = single_well_json
  //// function that looks at temp_json object, finds what curves are present in that well, and makes buttons to draw them using g3.js
  addCurveOptionButtons()
  //// adds inner html to p for the UWI name of the well in questino that was just loaded and converted
  console.log("temp_json['WELL INFORMATION BLOCK'] =", JSON.stringify(temp_json["WELL INFORMATION BLOCK"]))
  document.getElementById("which_well").innerHTML = "UWI = "+temp_json["WELL INFORMATION BLOCK"]["UWI"]["DATA"];
  document.getElementById("which_well_text").innerHTML = "UWI = "+temp_json["WELL INFORMATION BLOCK"]["UWI"]["DATA"];
  document.getElementById("which_well_display").innerHTML = "UWI = "+temp_json["WELL INFORMATION BLOCK"]["UWI"]["DATA"];
  document.getElementById("which_well_json").innerHTML = "UWI = "+temp_json["WELL INFORMATION BLOCK"]["UWI"]["DATA"];
  document.getElementById("which_well_download").innerHTML = "UWI = "+temp_json["WELL INFORMATION BLOCK"]["UWI"]["DATA"];

  changeMenuBarButtonColorOnConvert()
}


////////////////////////  DISPLAY FUNCTIONS  //////////////////////// 


//// This takes the well files uploaded as las files, treats all of them as text files and prints ALL OF THEM to the DOM.
//// this is different than the json conversion, which at this points only converts and keeps the first well!
function displayFileFunction(){
  var upload_success_span_txt = document.getElementById("upload-success").innerHTML
  //// goes into this part of loop if wepbage las is used
  if(upload_success_span_txt === "upload success"){
      fileContentsDiv = document.getElementById("fileContents")
      var para = document.createElement("P")
      var t = document.createTextNode(all_files[0]);
      para.appendChild(t); 
      fileContentsDiv.appendChild(para); 
  }
  //// goes here if las from user's local computer is used
  else{
    var files = document.getElementById("files").files
    if (files) {
      for (var i = 0, file; file = files[i]; i++) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            fileContentsDiv = document.getElementById("fileContents")
            var para = document.createElement("P")
            var t = document.createTextNode(evt.target.result);      // Create a text node
            para.appendChild(t); 
            fileContentsDiv.appendChild(para); 
        }
        reader.onerror = function (evt) {
            document.getElementById("fileContents").innerHTML = "error reading file";
        }
      }  
    }
  }
}



//// function that leverages vkbeuatify library to pretty print the stringified wellio json then puts it into a DOM element so it can be seen by the user
function print_well(){
  document.getElementById("well_json_prettyprint").innerHTML = vkbeautify.json(JSON.stringify(temp_json),1);
  console.log('JSON.stringify(temp_json) = ',vkbeautify.json(JSON.stringify(temp_json),4))
}

//// function called by convert_and_startHelpers() that looks at the global temp_json object 
//// and finds the curve names and adds them as buttons that when clicked draws those curves using g3.js.
//// It calls addSingleCurveButton(div_id,curve_name) for each curve.
function addCurveOptionButtons(){
  /// curveButtons_holder
  var div_id = "curveButtons_holder"
  var curves_available = Object.keys(temp_json["CURVES"])
  console.log("curves_available = ",curves_available)
  for(each_curve in curves_available){
    addSingleCurveButton(div_id,curves_available[each_curve])
  }
}

//// function called by addCurveOptionButtons() adds Curves buttons that when clicked draws a curve plot using g3.js.
function addSingleCurveButton(div_id,curve_name){
          var node = document.createElement("button");
          node.setAttribute('onclick','draw_curve("'+String(curve_name)+'")')                 // Create a <li> node
          var textnode = document.createTextNode(curve_name);         // Create a text node
          node.appendChild(textnode);                              // Append the text to <li>
          document.getElementById(div_id).appendChild(node);  
}


//// function that creates a hidden link that is clicked programatically that uses HTML5 to download the file at that link
//// the two arguments are the UWI string of the global temp_json object, and a stringified version of the entire wellio json object.
//// It calls the download() function found in wellio.js JavaScript file.
function download_test(){
  //console.log("download_test() ","in")
  download(temp_json["WELL INFORMATION BLOCK"]["UWI"]["DATA"]+".json", JSON.stringify(temp_json));
}

//// Function that takes a filename string and a string (you might have to stringify a json object) 
//// and writes into an actual JSON file to be downloaded into your browsers specified download folder.
function download (filename, text) {
    var element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }
  
