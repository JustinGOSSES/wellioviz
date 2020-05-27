# wellio_Viz.js

WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, particularly those already converted to JSON, using the d3.js visualization library.

[![NPM](https://nodei.co/npm/wellioviz.png?compact=true)](https://npmjs.org/package/wellioviz)

<a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2"><img src="docs/images/well_log_screenshot_new.png"></a>

## IT IS IN PROGRESS.....

## Demos & Examples

#### 1.More Recent Obserevable-Notebook-Based Demo
- ##### LOOK AT THIS ONE TO SEE CURRENT CODE: https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2
- Status: Up to date
- Link: <a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2">here</a>

- ###### Additionally, there is this similar demo that uses the most up to date code that has been pushed to NPM. 
- Status: Code is pulled from NPM, so this reflects the latest code that has been published to NPM. This may lag slightly compared to the code on this github repository, but not by a lot. 
- Link: <a href="https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm">https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm</a>
- ##### Hello Wellioviz smallest unit demo
- Status: Up to date.
- Link: https://observablehq.com/@justingosses/hello-wellioviz


#### 2. HTML demo as github pages page in this repository
- Status: Out of date
- Link: Building a basic demo here: https://justingosses.github.io/wellioviz/demo.html <---- THIS IS OUT OF DATE
- This is the wellio demo but with the visualization going to be rebuilt with wellioviz. Currently only using the bare minimum of wellioviz but will build more in as time goes on.... uses an older version of index.js than in this repo...will update to current eventually... in progress


#### 3. Alterative Observable-notebook-based demos out of date
- Status: Way out of date!
- Link: Other older Observable notebooks that use older versions of wellioviz code but give further idea what is possible are: 
- https://observablehq.com/@justingosses/well-log-in-d3-js-v5
- https://observablehq.com/@justingosses/overly-simplified-stratigraphic-modeling
- https://observablehq.com/@justingosses/well-log-curve-cross-sections

## Why?

Most geologists who make charts of well logs via code seem to do so in Python, often working in Jupyter notebooks. Very often, they will use matplotlib. This is fine for a lot of things, but there are some use-cases where having a JavaScript visualization library makes for a better option.

1. <b>Websites that provide well logs in LAS format to audiences on the web.</b> Storing PNGs created with matplotlib is less than ideal as all the images have to be created, stored, and loaded before the user needs them. This takes a lot of storage space. Visualizing the logs on the fly in JavaScript is a better option.
2. <b>GUIs for well correlation.</b> Although this is slightl out of scope for wellioviz, it could be extended to do this. This could be web-based or built with web tools but running locally. Currently, there really isn't a free open-source application for well log correlation, at least to the best of my knowledge. This means if you don't have Enterprise scale money, (academics, non-profits, hobbyest, students, people in between jobs, etc.) you're often limited to correlating a handfull of wells at most using paper and pencil. Wellio (something to convert LAS files to JSON) and Wellioviz (something to visualize well logs as JSON into SVGs on a webpage) are critical pieces for this to exist.
3. <b>Interactive well plotting with export into SVG or full HTML Pages from inside Jupyter Notebook</b> Matplotlib is very limited in terms of true interactivity. Other python visualization packages are better but not as powerful as JavaScript visualizations running in a Jupyter notebook. Building the visualization in JavaScript also opens up the possibility of working in a Jupyter notebook and exporting wells as SVGs or full HTML webpages.

<i>Point of Caution: To some of extent, all of these are not completely in scope of the project. Wellioviz is a visualization library. 1,2,&3 also require graphic user interfaces and other things built on top of wellioviz.</i>

## Architecture 
<a href="images/wellioviz_architecture.png"><img src="docs/images/wellioviz_architecture.png"></a>

For more information on how wellioviz is organized, check out the <a href="docs/ARCHITECTURE.MD">ARCHITECTURE.MD</a> document. 

## DOCS
Docs will be here: https://justingosses.github.io/wellioviz/ They are only partially up to date currently. 

## Contributing
Check out the Contributing <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/CONTRIBUTING.md">Guidelines</a>. Issues, documentation, pull requests, examples, test cases, and questions needed!

I also have a description in Contributing.md of how I tend to work on the project and what things to expect will always be in sync in case there are questions on that.

#### Organization of Issues on Kanban board here: https://github.com/JustinGOSSES/wellioviz/projects/1

#### Further Thinking...

<a href="docs/BRAINSTORMS.md">BRAINSTORM.md</a>
<a href="docs/audiences.md">AUDIENCES.md</a>

## Code of Conduct
<a href="CODE_OF_CONDUCT.md">Code of Conduct</a>
