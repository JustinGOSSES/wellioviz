# wellio_Viz.js
d3.js v5 visualization sister repo for wellio.js

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
3. <b>Interactive plotting for visualization within notebook environment.</b> Matplotlib is very limited in terms of true interactivity. JavaScript visualizations running in a Jupyter notebook otherwise runnning Python offer more flexibility and power for interactive visualizations than many Python visualizations libraries that are often just wrappers for a portion of a JavaScript library. <i>Keplergl is my favorite example of this. It can take in pandas dataframe enabling quick Python data processing and transformation but also has great styling defaults via well chosen CSS defaults and the ability to change how data is encoded and displayed via well designed baked-in GUI functionality. Additionally, the final result can be exported to a full web page wile retaining the ability to give the end-user GUI functionality over the visualization encoding and styling.</i>

## Possible Use-Cases
- Webpage (JavaScript)
- Jupyter Notebook (Python with some JavaScript)
- ObservableHQ notebook (JavaScript)
- Full Locally running application (html, css, JavaScript with local server)
- Full Locally running application (packaged as Electron app)
- Full Locally running application (packaged as Python package that starts up local webpage)

## Possible Visualization Pieces
- Axis
- Curvebox Title
- Axis titles
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


## Non-standard Visualization Features Brainstorm
- Ability to overlap curves and see heatmap of some sort for large number of wells.
- Ability to select curve segments and see closest matches in X number of wells based on some criteria for how many and which ones to check

## Potential API organization brainstorm:
- Central point of organizatin for API is curvebox.
- Each curvebox is built from JSON template. This enables default values to be used most of the time and new values to be easiely substituted via template.key = something calls. This will supply data, text, and styling choices for each curve box. instead of calling d3.js code directly, inputs will be supplied via the template. 
- There are multiple options for combining curveboxes. At this time, it looks like the most flexible will be to intiate a html div with an given ID, then append SVGs to that div. Each curvebox is created and appended separately as a separate div. 
- Curvebox template will cover everything except: multi-curvebox title, top lines between curve boxes, [width, height, padding, margins, etc] or div that the SVGs get appended to. 

