# wellioviz.js

### WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, particularly those already converted to JSON, using the d3.js visualization library.

Central to wellioviz is the concept that how to plot and what to plot can be put into a JSON template that has sensible defaults, such that the end-user only has to understand what they want to change about the plotting, not the whole d3.js code.

[![NPM](https://nodei.co/npm/wellioviz.png?compact=true)](https://npmjs.org/package/wellioviz)
<a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2"><img src="images/well_log_screenshot_new.png" style="width:75%"></a>



## Why?

Most geologists who make charts of well logs via code seem to do so in Python, often working in Jupyter notebooks. Very often, they will use matplotlib. This is fine for a lot of things, but there are some use-cases where having a JavaScript visualization library makes for a better option.

1. <b>Websites that provide well logs in LAS format to audiences on the web.</b> Storing PNGs created with matplotlib is less than ideal as all the images have to be created, stored, and loaded before the user needs them. This takes a lot of storage space. Visualizing the logs on the fly in JavaScript is a better option.
2. <b>GUIs for well correlation.</b> Although this is slightl out of scope for wellioviz, it could be extended to do this. This could be web-based or built with web tools but running locally. Currently, there really isn't a free open-source application for well log correlation, at least to the best of my knowledge. This means if you don't have Enterprise scale money, (academics, non-profits, hobbyest, students, people in between jobs, etc.) you're often limited to correlating a handfull of wells at most using paper and pencil. Wellio (something to convert LAS files to JSON) and Wellioviz (something to visualize well logs as JSON into SVGs on a webpage) are critical pieces for this to exist.
3. <b>Interactive well plotting with export into SVG or full HTML Pages from inside Jupyter Notebook</b> Matplotlib is very limited in terms of true interactivity. Other python visualization packages are better but not as powerful as JavaScript visualizations running in a Jupyter notebook. Building the visualization in JavaScript also opens up the possibility of working in a Jupyter notebook and exporting wells as SVGs or full HTML webpages.

<i>Point of Caution: To some of extent, all of these are not completely in scope of the project. Wellioviz is a visualization library. 1,2,&3 also require graphic user interfaces and other things built on top of wellioviz.</i>

#### Further Thinking...
<a href="docs/BRAINSTORMS.md">BRAINSTORM.md</a>
<a href="docs/audiences.md">AUDIENCES.md</a>
