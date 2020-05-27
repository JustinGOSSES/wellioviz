# wellioviz.js

### WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, particularly those already converted to JSON, using the d3.js visualization library.

Central to wellioviz is the concept that how to plot and what to plot can be put into a JSON template that has sensible defaults, such that the end-user only has to understand what they want to change about the plotting, not the whole d3.js code.

[![NPM](https://nodei.co/npm/wellioviz.png?compact=true)](https://npmjs.org/package/wellioviz)
<a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2"><img src="images/well_log_screenshot_new.png" style="width:75%"></a>

##### Github Repository: https://github.com/JustinGOSSES/wellioviz
##### Documentation: https://justingosses.github.io/wellioviz/#introduction
##### Observable Notebook Demo: https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm

## Why?

Most geologists who make charts of well logs via code seem to do so in Python, often working in Jupyter notebooks. This is fine for a lot of things, but there are some use-cases where having a JavaScript visualization library makes for a better option.

1. <b>GUIs for well correlation.</b> Currently, there really isn't a free open-source application for well log correlation, at least to the best of my knowledge. This means if you don't have Enterprise scale money, (academics, non-profits, hobbyest, students, people in between jobs, etc.) you're often limited to correlating a handfull of wells at most using paper and pencil. Wellio (something to convert LAS files to JSON) and Wellioviz (something to visualize well logs as JSON into SVGs on a webpage) are critical pieces for a free non-code web-based well log visualization to exist. Although a full GUI (graphic user interface) is slightly out of scope for wellioviz, wellioviz could be extended to do this. 

2. <b>Websites that provide well logs to audiences on the web.</b> Although PNG images of well logs could be created and stored on server before being sent on demand to the front-end, this is less than ideal as all the images have to be created, stored, and loaded before the user needs them. This takes a lot of storage space. Additionally, it prevents scrolling, zooming, and overlays. Visualizing the logs on the fly in JavaScript is a better option for websites that want to given users an idea what a well log contains.

3. <b>Interactive well plotting with export into SVG or full HTML Pages from inside Jupyter Notebook</b>  Building the visualization in JavaScript also opens up the possibility of working in a Jupyter notebook and exporting wells as SVGs or full HTML webpages. Additionally, there aren't any limits on interactivity that you might hit in a python visualization package that is wrapping JavaScript behind the scenes. Kepler.gl in Jupyter is an example of this functionality where beautiful maps get created inside Jupyter notebook and get published as self-contained front-end only full HTML/CS/JS pages.

<i>Point of Caution: To some of extent, all of these are not completely in scope of the project. Wellioviz is a visualization library. 1,2,&3 also require graphic user interfaces and other things that are better to be built as projects that utilize wellioviz.</i>

#### Further Thinking...
<a href="docs/BRAINSTORMS.md">BRAINSTORM.md</a>
<a href="docs/audiences.md">AUDIENCES.md</a>
