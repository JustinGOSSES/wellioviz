# wellio.js
#### JavaScript for converting well-log standard .las file format to json format and then back again.

[THIS IS VERY NEW AND IN PROGRESS]
[ONLY TRYING TO GET TO WORK WITH LAS 2.0 RIGHT NOW]

## Purpose
 There currently isn't any .las -> JSON parser that I was able to find. There is <a href="https://lasio.readthedocs.io/en/latest/">lasio</a> and <a href="https://github.com/agile-geoscience/welly">welly</a> for python, but nothing to ingest las files in JavaScript. Wellio.js is an attempt to fill that gap, so I can build other stuff. Once you have well data as JSON, many other JavaScript-based things as possible. I'll try to keep those other things separate, except as demos for Wellio.

## Does this upload my well logs to your server? 
Nope, it only loads to your browser's memory and then your browser forgets it when you close the tab.

## Can I see the demo right now?
Yes, there are two options. 
#### Github pages demo <a href="https://justingosses.github.io/wellio.js/">page</a>: 
Open the demo page running on github pages. Click one of the big blue buttons up top to  open a file loader. You can either use a LAS files already part of the webpage or you can load a local LAS file from your computer. 

If you want to test the 'load local file' feature and don't have any local LAS files, you can quickly get one by going to <a href="https://raw.githubusercontent.com/JustinGOSSES/wellio.js/master/assets/00-01-01-073-05W5-0.LAS">this</a> link and saving the results to a ".las" file using your browser. That is a raw las file for well UWI 00-01-01-073-05W5-0.

#### ObservableHQ demo <a href="https://beta.observablehq.com/@justingosses/upload-well-logs-convert-las-to-json-with-wellio-then-visual">page</a>:
ObservableHQ is new way to explore and play with JavaScript code. Think Jupyter notebook but in a more reactive and interactive form. It runs JavaScript code instead of Python/Julia/R. I've created a notebook on there with the same functionality as the demo but with visualizations using Vega instead of g3.js & d3.js. This demo uses syntax of
`wellio = require(wellio)`
to call the sever-side wellio npm module functions in the browser.

## Code Organization Summary

There are currently separate front-end and back-end javascript versions of wellio. Eventually, they will merge.

#### Server-side
The server-side wellio can be found in the <b>dist</b> folder. You can install it locally via `npm install wellio` as described on the npm homepage <a href="https://www.npmjs.com/package/wellio">here</a>. You can also call this via require(wellio) in ObservableHQ as described in the ObservableHQ demo above. 

##### Functions currently working include:
- returnThing: A testing function that returns anything provided to it. 
	`wellio.returnThing("test")` = "test"
- loadLAS: A function that takes an argument of the well log name as a string, finds that file in the local file system and returns it as a string of text. 
	`var well_string = wellio.loadLAS("00/01-01-073-05W5/0.LAS")` = <full well log as string>
- las2json: Takes the result of loadLAS or another text string, or another LAS file already loaded into memory, and converts it into the wellio json format. 
	`var well_json = wellio.las2json(well_string)` = <all information in las 2.0 file but string txt file converted to json>
- CurveNames: Given a well already converted into json, returns the available curves
	`var curvesNames = wellio.CurveNames(well_json)` = ['GR','ILD','PHID']
- VER_block: Given a well already converted into json, returns verision information block data
	`var VER_block = wellio.VER_block(well_json)` = <verion information block of text information in string form>
- UWI: Given a well already converted into json, returns the well UWI
	`var UWI_well_json = wellio.UWI(well_json)` = text string of UWI, for example => '00/01-01-073-05W5/0'
- getCurve: Given a well already converted into json, returns a given curve name in string format
	`var GR_well_json = wellio.getCurve(well_json,"GR")` = an array of the GR data, for example [0.00,0.99,,,]


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


## Where To Get Open-Source Well Logs in .LAS format?
You can use the file upload button to load into your browsers memory any LAS files from your local computer. I've also included a few well logs in the /assets/ folder of this repo from the electronic data file below. 

Electronic data (including well logs, tops, etc.) for Athabasca Oil Sands Data McMurray/Wabiskaw Oil Sands Deposit <a href="http://ags.aer.ca/publications/SPE_006.html">http://ags.aer.ca/publications/SPE_006.html Data is also in the repo folder: SPE_006_originalData</a>

Report for Athabasca Oil Sands Data McMurray/Wabiskaw Oil Sands Deposit <a href="http://ags.aer.ca/document/OFR/OFR_1994_14.PDF">http://ags.aer.ca/document/OFR/OFR_1994_14.PDF</a>

### Why Bother? Geologists Use Python...
While trying to build a machine-learning program to mimic specific geologist's stratigraphic surface picking, I concluded I was limited by the number and quality of my input features. Specifically, I needed more features and the methods I were using to come up with effective ones were too slow. 

I found trying to do well log feature creation in Jupyter notebooks using Python to be too linear and time intensive involving re-writing or re-running too much code in between seeing the results. JavaScript has more interactive and reactive data visualization libraries, so that is driving tool choice. For clarity, I'm using the term reactive in the <a href="https://vimeo.com/36579366">Bret Victor</a> sense, not the <a href="https://reactjs.org/">react.js</a> sense. 

Additionally, using JavaScript opens up the possibility of simple widgets that could be run in the browser without needing to install a program on users' computers and the possibility of open-source well log software without needing to know a computer language to do things. 

I'm imagining a reactive style well-log feature creation widget, something like <a href="http://ncase.me/joy/">joy.js</a>,  that would include cross-filtering across multiple figures like in <a href="https://dc-js.github.io/dc.js/">dc.js</a>, while also leveraging numpy-style array math, like in <a href="https://deeplearnjs.org/">deeplearn.js</a>. 

*Long story short, I needed a way to load las files and work with them as json in JavaScript in order to build another thing.*

## Example

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

