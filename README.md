# wellio_Viz.js
d3.js v5 visualization sister repo for wellio.js



## Building basic demo here: 
https://justingosses.github.io/wellioviz/

This is the wellio demo but with the visualization going to be rebuilt with wellioviz. Currently only using the bare minimum of wellioviz but will build more in as time goes on.... Currently using a single fill for all curveNames, Xmas themed colors.

### MOST RECENT OBSERVABLE DEMO IS: https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2

## At this time, this repo is basically a brainstorm about how to build upon this proof of concept on Observable:
https://observablehq.com/@justingosses/well-log-in-d3-js-v5

&

https://observablehq.com/@justingosses/overly-simplified-stratigraphic-modeling

&

https://observablehq.com/@justingosses/well-log-curve-cross-sections


<a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5"><img src="well_log_screenshot.png"></a>

## Previous Work
This builds on previous work in <a href="https://github.com/JustinGOSSES/wellio.js">wellio.js</a>

Wellio.js is all about las file <=> JSON file, so it will stay a separate repository and node.js package.

Wellio.js & wellio_viz.js could be used together. It would be easy to visualize all your las files in a local or remote folder you point a web application at.

## Why

Most geologists who make charts of well logs via code seem to do so in Python, often working in Jupyter notebooks. Very often, they will use matplotlib. There are other potential places and reasons you might need code-created plots of well logs, that matplotlib doesn't work great for. For many of these use-cases, a JavaScript based approach to plotting well logs makes more sense.

1. <b>Websites that provide well logs in LAS format to audiences on the web.</b> Storing PNGs created with matplotlib is less than ideal as all the images have to be greated, stored, and loaded before the user needs them. This takes a lot of storage space.
2. <b>GUIs for well correlation.</b> This could be web-based or built with web tools but running locally. Currently, there really isn't a free open-source application for well log correlation, at least to the best of my knowledge. This means if you don't have Enterprise scale money, (academics, non-profits, hobbyest, students, people in between jobs, etc.) you're often limited to correlating a handfull of wells at most using paper and pencil. 
3. <b>Interactive plotting for visualization within notebook environment.</b> Matplotlib is very limited in terms of true interactivity. JavaScript visualizations running in a Jupyter notebook otherwise runnning Python offer more flexibility and power for interactive visualizations than many Python visualizations libraries that are often just wrappers for a portion of a JavaScript library. Swapping out curves, changes appearance, applying thresholds to how things are depicted, and adding tops or other types of annotation can be more easily built into easy to use GUIs if JavaScript is used for visualization instead of Python tooling.

<i>Point of Caution: The last two are going to be pretty hard to build well and are out of scope of this project.</i>

## Possible Visualization Pieces
- Axis
- Curvebox Title
- Axis titles
- *Scales, and scale title with units*
- Curves
- Curve fill based on under or over a curve 
- Curve fill multiple fill colors based on cutoffs & under or over a curve value
- Curve fill based on overlap of two curves
- Curve fill based on SVG pattern
- Curve fill like property but visualized as curve line color
- Curve fill like property but visualized as colored rectangle within well box or curve box.
- Top lines
- Top lines between well boxes
- Top titles

## Visualization Boxes
- Curvebox: Single Curve (single well)
- Curvebox: Multiple Curves (single well)
- CurveboxHolder: Single Well (single or multiple curve per box all from single well)
- CurveboxHolder: Multiple Well (single or multiple curve per box all from multiple well) AKA Cross-Section

## Other User-Interface Possibilities
- Selecting wells via map by polygon or line
- Selecting wells from well list by clicking
- Export to working webpage with map of some well variable, cross-section, example wells, etc. 
- Export table of possible well selections based on potential required curves and tops

## Nice Ability / Problems to Solve
#### When making cross-section:
- If top & distance above and below top to plot specified but one or more selected wells don't have that top, how will it decide what parts of the well to plot? 
- How will the scaling remain the same if wells have different lengths to plot due to not well wells having given distance below the top to plot?
#### Smart well curve name selection if an exact match not found
- User should have the ability to provide a list of curve names to plot if available in order of choice. For example, [GR, GR1, GRBest, Gamma Ray, GammaRay]. Ideally this sort of list could be provided as defaults, so a user could reply GR and it would be smart enough to use GR1 if it existed with the user having to specify that. 
#### Well Selection
- Ability to zoom in on different parts of a well without having to click button(s) a lot or at all. 
- Visualization of well log curve & top availability and missing distribution. 
- Ability to do rapid search for similar log shape or find max difference between log shapes within 2 tops. 
#### Top Creation / Changing
- Ability to click to creat a new top. 
- Ability to use drag or some other input to create a probabilistic distribution of potential position of a top. 


## Crazy Ideas / Non-standard Visualization Features Brainstorm
- Ability to overlap curves and see heatmap of some sort for large number of wells.
- Ability to select curve segments and see closest matches in X number of wells based on some criteria for how many and which ones to check

## Potential API organization brainstorm:
- Central point of organizatin for API is curvebox.
- Each curvebox is built from JSON template. This enables default values to be used most of the time and new values to be easiely substituted via template.key = something calls. This will supply data, text, and styling choices for each curve box. instead of calling d3.js code directly, inputs will be supplied via the template. 
- There are multiple options for combining curveboxes. At this time, it looks like the most flexible will be to intiate a html div with an given ID, then append SVGs to that div. Each curvebox is created and appended separately as a separate div. 
- Curvebox template will cover everything except: multi-curvebox title, top lines between curve boxes, [width, height, padding, margins, etc] or div that the SVGs get appended to. 
- Initial template is used with good defaults. 
- 1. For single curve single well, only thing that must be changed is well-name, curveName, curve data. 
- 2. For multiple curve + single well + single curvebox all that needs to be changed is the same as before but two curve names and maybe fill parameter if fill is wanted.
- 3. For single curve multiple wells, an array of curveNames acceptable in order or preference, multiple wellio JSON datas objects is all that is required at minimum. 
- 4. If tops are wanted in the above option for a cross-section, then an object with top name and array of top depths for each well name or `None` must be given which will be used to plot tops. Multiple such objects can be provided.


- How to handle multiple JSON formatS? 
- 1. Not everyone will want to use wellio.js style JSON. Some might only want to supply the data being plotting and how to plot it in order to minimize the amount of data sent over the internet. *HOW DO WE TRANSFORM DIFFERENT DATA ORGANIZATIONS INTO ONE WE CAN WORK WITH*
- 2. An examples of things that are calculated from the full well log information in wellio JSON that might be explicitly given in abbreviated form in another JSON format. 
- 2. A. Depth curve might be supplied via a step, top, and bottom instead of a curve. 
- 2. B. Max plotting values might be given instead of calculated. This is especially true if the max or min is a bad value. 
- 2. C Depth curve for one curve in one well might be different than depth curve for another curve in the same well. If we try to plot both curves in the same curve box, how do we make sure the right depth curve is used and not the wrong one? The default behavior is a single depth curve. 

An Example of a different way to format data as input:
data2 = [{
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


## Theoretical Development Plan
- Play around with it could be on Observable. 
- Explore different potential ways to organize the code
- Build it into a vanilla front-end and node.js package when it is clear how API should work.
- Deploy to npm. 
- Build into production use-cases in a couple of different ways

## Wellio work tie-in (and other library/packages)
There are several long-standing wellio.js improvements that would help make the visualization work here more robust. 
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/12">Change</a> how wellio handles new lines so wrapped lines in LAS files are okay. 
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/5">Slight changes in parsing to more closely match LAS 2.0 format and enable some flexibility in how that format is interpreted when people create LAS files.
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/6">Write data transformation for welly dataframe</a> <=> wellio JSON, so users in a Python Jupyter notebook can transform or access their well logs in LAS format with the familiar welly python package and then easily shoot them into wello_viz for visualization. 
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/7">Write data transformation for LASIO Dict <=> wellio JSON</a>, so users in a Python Jupyter notebook can transform or access their well logs in LAS format with the familiar LASIO python package and then easily shoot them into wello_viz for visualization. 
- Should coordinates be included in the wellio JSON or be separate? This was discussed in <a href="https://github.com/JustinGOSSES/wellio.js/issues/8">this issue</a>.
- Create transformation functions such that well logs in other JSON formats can work fine, perhaps all that is needed would be a flat for LASIO JSON or another type of JSON rather than wellio.js generated JSON.
