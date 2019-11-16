# wellio_Viz.js
d3.js v5 visualization companion for wellio.js

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


## Visualization Components
#### Single Well Curvebox
#### Multiple Well Curvebox
#### Multiple Single Well Curve Boxes

## Visualization Features
### Standard Expected Features of Visualization Compontents
#### curve
#### multiple curves in same curve box
#### horizontal lines
#### Diagonal lines that connect horizontal lines across curve boxes
#### Solid fill
#### Patterned fill
#### Color scale fill
#### Color fill based on value curve with cut-offs
#### Color fill based on curve overlap
#### Color fill based on some other curve-like property that isn't the curve shown but along same axis.

### Less Standard Expected Features of Visualization Compontents
#### Ability to overlap curves and see heatmap of some sort for large number of wells.
#### Ability to select curve segments and see closest matches in X number of wells based on some criteria for how many and which ones to check

## Other Features
#### Ability to call in Jupyter notebook that is mostly Python
#### Ability to interact with notebook via HTML/CSS/JS for some functions that python isn't good at like:
- Selecting wells via map by polygon or line
- Selecting wells from well list by clicking
- Export to working webpage with map of some well variable, cross-section, example wells, etc. 
- Export table of possible well selections based on potential required curves and tops


