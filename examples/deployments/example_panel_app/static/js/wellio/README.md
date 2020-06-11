# wellio.js
#### JavaScript for converting well-log standard .las file format to json format and then back again.

[![DOI](https://zenodo.org/badge/116549236.svg)](https://zenodo.org/badge/latestdoi/116549236)

[![NPM](https://nodei.co/npm/wellio.png?compact=true)](https://npmjs.org/package/wellio)

## Purpose
 There currently isn't any .las -> JSON parser that I was able to find. There is <a href="https://lasio.readthedocs.io/en/latest/">lasio</a> and <a href="https://github.com/agile-geoscience/welly">welly</a> for python, but nothing to ingest las files in JavaScript. Wellio.js is an attempt to fill that gap, so I can build other stuff. Once you have well data as JSON, many other JavaScript-based things as possible. I'll try to keep those other things separate, except as demos for Wellio.

## Contributors: 
- https://github.com/JustinGOSSES
- https://github.com/dcslagel

## Does this upload my well logs to your server? 
Nope, it only loads to your browser's memory and then your browser forgets it when you close the tab.

## Can I see the demo right now?
Yes, there are several options. 
#### 1. Github pages demo <a href="https://justingosses.github.io/wellio.js/">page</a>: 
Open the demo page running on github pages. Click one of the big blue buttons up top to  open a file loader. You can either use a LAS files already part of the webpage or you can load a local LAS file from your computer. 

If you want to test the 'load local file' feature and don't have any local LAS files, you can quickly get one by going to <a href="https://raw.githubusercontent.com/JustinGOSSES/wellio.js/master/assets/00-01-01-073-05W5-0.LAS">this</a> link and saving the results to a ".las" file using your browser. That is a raw las file for well UWI 00-01-01-073-05W5-0.

#### 2. ObservableHQ demo <a href="https://beta.observablehq.com/@justingosses/upload-well-logs-convert-las-to-json-with-wellio-then-visual/2">page</a>:
ObservableHQ is new way to explore and play with JavaScript code. Think Jupyter notebook but in a more reactive and interactive form. It runs JavaScript code instead of Python/Julia/R. I've created a notebook on there with the same functionality as the demo but with visualizations using Vega instead of g3.js & d3.js. This demo uses syntax of
`wellio = require(wellio)`
to call the sever-side wellio npm module functions in the browser. There is also <a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5">this demo on OBservable that loads a LAS file directly.

#### 3. Jupyter Notebook Node.js <a href="https://github.com/JustinGOSSES/wellio.js/blob/master/notebooks/Wellio%20Demo%20in%20Jupyter%20Notebook%20Node.js.ipynb">demo</a>
Wellio can also be worked with in a jupyter notebook running a node.js kernal.

#### 4. Jupyter Notebook running Python that uses node.js for a couple cells via Pixiedust library
[This is coming. Currently <a href="">an issue</a> that needs help]. This will demonstrate a use-case where you want to manipulate LAS data in python but find it easier to visualize the data from a JSON format, likely using JavaScript data visaulization tooling.

## Code Organization Summary

There are currently separate front-end and back-end javascript versions of wellio. Eventually, they will merge.

#### Server-side
The server-side wellio can be found in the <b>dist</b> folder. You can install it locally via `npm install wellio` as described on the npm homepage <a href="https://www.npmjs.com/package/wellio">here</a>. You can also call this via require(wellio) in ObservableHQ as described in the ObservableHQ demo above. 

##### Wellio functions currently working include:
- returnThing: A testing function that returns anything provided to it. 
	`wellio.returnThing("test")` = "test"
- loadLAS: A function that takes an argument of the well log name as a string, finds that file in the local file system and returns it as a string of text. 
	`var well_string = wellio.loadLAS("00/01-01-073-05W5/0.LAS")`
- las2json: Takes the result of loadLAS or another text string, or another LAS file already loaded into memory, and converts it into the wellio json format and returns that json string. 
	`var well_json = wellio.las2json(well_string)`
- CurveNames: Given a well already converted into json, returns the available curve names as an array.
	`var curvesNames = wellio.CurveNames(well_json) ; where curvesNames = ['GR','ILD','PHID']`
- VER_block: Given a well already converted into json, returns verision information block data as a string.
	`var VER_block = wellio.VER_block(well_json)`
- UWI: Given a well already converted into json, returns the well UWI as a string.
	`var UWI_well_json = wellio.UWI(well_json) ; where UWI_well_json is '00/01-01-073-05W5/0`
- getCurve: Given a well already converted into json and the name of a curve as a string, returns an array of the data values for that curve. 
	`var GR_well_json = wellio.getCurve(well_json,"GR") ; where GR_well_json is an array of the GR data, for example [99,93,76,55,67,66,67,78]`
	
##### Non-wellio fuctions you'll want to know about when using wellio to convert las -> json on command line using node.js
- To start with node.js after installing it type into a command line `node` .
- Once in command line node environment, to start with wellio, you'll have to do `wellio = require('wellio')` After this point, you'll be able to use the commands above.
- After converting a las file to json format with the command `well_json = wellio.las2json(well_string)` as described above you'll have to stringify it first via `well_json_string = JSON.stringify(well_json)` and then write it to a file via `fs.writeFile("UWI_of_Well.json", well_json_string, 'utf8', function (err) {console.log("error")})`


#### Front-end side
This repo contains various pieces of code for the github pages demo page. In addition to the the wellio.js JavaScript file in the js folder, there is the index.html, which is the main html page for <a href="https://justingosses.github.io/wellio.js/">the github pages demo</a>. 

CSS files are in the CSS folder. 

Several example well logs are in the ASSETS folder.

<a href="https://github.com/agile-geoscience/g3">G3.js</a> is used to draw a plot of the well log curves. It leverages <a href="https://github.com/d3">d3.js</a>.
<a href="https://github.com/vkiryukhin/vkBeautify">VKbeautify.js</a> is a script for adding spaces and such to JSON to make them prettier when printed.
<a href="https://github.com/google/code-prettify">run_prettify.js</a> does something similar but is focused on making it print nicely into HTML DOM elements. 


#### <b>Wellio.js</b> <a href="https://github.com/JustinGOSSES/wellio.js/blob/master/js/wellio.js">script</a> will have a few basics functions (not all are written yet)
1. las2json(onelas) : <i>Function that takes a single LAS text file representing a single well and returns an object variable in JSON format for that well.</i>
2. download(filename, text): <i>Function that takes a filename and text string and writes a file (either json or las) to your designated downloads folder.</i>



## Road Map
Right now, wellio.js just does LAS -> Wellio JSON. There are variety of features that could be added to increase the functionality of wellio and in particular enable cross-communication with other LAS-focused projects. 

Potential cross-communication conversions include:
1. wellio <-> las files (have the las to wellio direction but need the back again conversion)
2. wellio <-> <a href="https://github.com/agile-geoscience/welly">welly</a> objects (python)
2. wellio <-> <a href="https://lasio.readthedocs.io/en/latest/">lasio</a> (python)
3. wellio json objects -> wellio_plus json objects  with wellio_plus being defined as having data and functions that go behind the data in a LAS file. 

Examples of wellio_plus data & functions that could be part of the prototype would be:
- common function calls like max, min, average of each curve, etc.
- pick depths
- geographic location
- age of data acquisition 
- non-original curves that are created and used as engineered features for machine-learning.
- other well-centric data points or datasets that might be useful for machine-learning. 

#### Can you help? Of course you can! 
There are a variety of <a href="https://github.com/JustinGOSSES/wellio.js/issues">issues</a> that need worked. Several of which are suitable for those who are new to JavaScript. Please add any suggestions you'd like or bugs you find to the issues.

## Where To Get Open-Source Well Logs in .LAS format?
You can use the file upload button to load into your browsers memory any LAS files from your local computer. I've also included a few well logs in the /assets/ folder of this repo from the electronic data file below. 

Electronic data (including well logs, tops, etc.) for Athabasca Oil Sands Data McMurray/Wabiskaw Oil Sands Deposit <a href="http://ags.aer.ca/publications/SPE_006.html">http://ags.aer.ca/publications/SPE_006.html Data is also in the repo folder: SPE_006_originalData</a>

Report for Athabasca Oil Sands Data McMurray/Wabiskaw Oil Sands Deposit <a href="http://ags.aer.ca/document/OFR/OFR_1994_14.PDF">http://ags.aer.ca/document/OFR/OFR_1994_14.PDF</a>

### Why Bother? Geologists Use Python...
EDIT: *Long story short, I needed a way to load las files and work with them as json in JavaScript in order to work with them on the web or using web tools*

### Examples of where it can be used
It can convert LAS files into JSON and then curves can be visualized in three dimensions using three.js as <a href="https://beta.observablehq.com/@justingosses/three-js-well-log-demo-geology">this</a> brief demo on ObservableHQ shows. Once your can make well logs in three.js, it is only a short jump to put them in augmented reality or virtual reality. For example, <a href="https://github.com/google-ar/three.ar.js?files=1">this repo</a> is a helper library for putting three.js objects into Augmented reality scenes.

There is also a few Observable notebooks (javascript, online, editable, and forkable by anyone) <a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5">here</a> and <a href="https://observablehq.com/@justingosses/well-log-curve-cross-sections">here</a> I've toyed around with that use wellio.js to import well logs and parse the string of the las file into JSON for visualization. 

## Example of LAS format and JSON formated well log data

### Original las file example
or go <a href="https://justingosses.github.io/wellio.js/">here</a> for live example.
```
~VERSION INFORMATION
 VERS.                 2.0:   CWLS LOG ASCII STANDARD -VERSION 2.0
 WRAP.                  NO:   ONE LINE PER DEPTH STEP
~WELL INFORMATION BLOCK
#MNEM.UNIT           DATA                    DESCRIPTION OF MNEMONIC
#---------    -------------------            -------------------------------
# Generated from Intellog Unique Number	CW_73_75/WELL/2722
WELL.         CHEVRON MGSU 1 MITSUE 01-01    : Well_name    - WELL
LOC .         00/01-01-073-05W5/0            : Location     - LOCATION
UWI .         00/01-01-073-05W5/0            : Uwi          - UNIQUE WELL ID
ENTR.         JAYE                           : Entered      - ENTERED BY
SRVC.         SCHLUMBERGER                   : Scn          - SERVICE COMPANY
DATE.         23 DEC 86                      : Date         - LOG DATE
STRT.M        390                            : top_depth    - START DEPTH
STOP.M        650                            : bot_depth    - STOP DEPTH
STEP.M        0.25                           : increment    - STEP LENGTH
 NULL. -999.2500:NULL Value
~CURVE INFORMATION BLOCK
#MNEM UNIT       ERCB CURVE CODE    CURVE DESCRIPTION
#-----------   ------------------   ----------------------------------
DEPT.M        00 001 00 00         : DEPTH        - DEPTH
DPHI.V/V      00 890 00 00         : PHID         - DENSITY POROSITY (SANDSTONE)
NPHI.V/V      00 330 00 00         : PHIN         - NEUTRON POROSITY (SANDSTONE)
GR  .API      00 310 00 00         : GR           - GAMMA RAY
CALI.MM       00 280 01 00         : CAL          - CALIPER
ILD .OHMM     00 120 00 00         : RESD         - DEEP RESISTIVITY (DIL)
~PARAMETER INFORMATION
#MNEM.UNIT           DATA             DESCRIPTION OF MNEMONIC
#---------         -----------     ------------------------------
GL  .M        583.3                : gl           - GROUND LEVEL ELEVATION
EREF.M        589                  : kb           - ELEVATION OF DEPTH REFERENCE
DATM.M        583.3                : datum        - DATUM ELEVATION
TDD .M        733.4                : tdd          - TOTAL DEPTH DRILLER
RUN .         ONE                  : Run          - RUN NUMBER
ENG .         SIMMONS              : Engineer     - RECORDING ENGINEER
WIT .         SANK                 : Witness      - WITNESSED BY
BASE.         S.L.                 : Branch       - HOME BASE OF LOGGING UNIT
MUD .         GEL CHEM             : Mud_type     - MUD TYPE
MATR.         SANDSTONE            : Logunit      - NEUTRON MATRIX
TMAX.C        41                   : BHT          - MAXIMUM RECORDED TEMPERATURE
BHTD.M        733.8                : BHTDEP       - MAXIMUM RECORDED TEMPERATURE
RMT .C        17                   : MDTP         - TEMPERATURE OF MUD
MUDD.KG/M     1100                 : MWT          - MUD DENSITY
NEUT.         1                    : NEUTRON      - NEUTRON TYPE
RESI.         0                    : RESIST       - RESISTIVITY TYPE
RM  .OHMM     2.62                 : RM           - RESISTIVITY OF MUD
RMC .OHMM     0                    : RMC          - RESISTIVITY OF MUD CAKE
RMF .OHMM     1.02                 : RMF          - RESISTIVITY OF MUD FILTRATE
SUFT.C        0                    : SUFT         - SURFACE TEMPERATURE
~A  DEPTH     PHID     PHIN       GR      CAL     RESD
  390.000    0.199    0.457   82.478  238.379    2.923
  390.250    0.208    0.456   86.413  238.331    2.925
  390.500    0.246    0.452   90.229  238.069    2.917
  390.750    0.266    0.475   90.944  238.752    2.898
  391.000    0.287    0.484   88.866  239.724    2.890
  391.250    0.288    0.474   82.638  241.951    2.844
  391.500    0.241    0.461   83.345  244.478    2.748
  391.750    0.215    0.471   88.403  247.116    2.725
  392.000    0.190    0.448   91.038  250.475    2.748
  392.250    0.219    0.478   89.579  254.764    2.845
  392.500    0.269    0.552   84.092  258.019    2.939
  392.750    0.316    0.458   78.479  260.143    3.088
  393.000    0.299    0.429   72.249  256.370    3.338
```

#### LAS -> JSON
```var lasjson = function las2json(onelas)```
will give you something like this:
``` 
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
					"MNEM_0":{"MNEM":"","UNIT":"","ERCB CURVE CODE":"","CURVE DESCRIPTION 1":"","CURVE DESCRIPTION 2":""},
				}		
			,
			"PARAMETER INFORMATION":{
					"MNEM_0":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""}, 
					"MNEM_1":{"MNEM":"","UNIT":"","DATA":"","DESCRIPTION OF MNEMONIC 1":"","DESCRIPTION OF MNEMONIC 2":""},
				}
			,
			"CURVES":{
					"Curve_NAME_ONE" :[1,2,3,4,5,6,7,8,9,10,11],
					"Curve_NAME_ONE" :[1,2,3,4,5,6,7,8,9,10,11],
				}
		}
```

