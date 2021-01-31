# wellio_Viz.js

WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, particularly those already converted to JSON, using the d3.js visualization library.

[![NPM](https://nodei.co/npm/wellioviz.png?compact=true)](https://npmjs.org/package/wellioviz)

<a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2"><img src="docs/images/well_log_screenshot_new.png"></a>


## Demos & Examples
#### Full Websites
1. HTML demo as github pages page in this repository
    - Status: Up to Date (almost always). 
    - Link: Basic webpage demo here: https://justingosses.github.io/wellioviz/demo.html Note that the user interface on this page is part of the demo but not the only way to use wellioviz as wellioviz is just the visualization capability.
    - Who for: People who want to see it work with a well log provided by the website, so they don't have to provide one, or people who went to load their own well log file into the browser from their local computer. All data stays in the browser window, nothing leaves your browser.

#### Full Websites
1. HTML demo as github pages page in this repository
    - Status: Up to Date (almost always). Currently a bare-bones example but plan to flesh out more.
    - Link: Building a basic webpage demo here: https://justingosses.github.io/wellioviz/demo.html 

#### Observable Demos
1. Hello Wellioviz Mini Demo in ObservableHQ.com
    - Link: https://observablehq.com/@justingosses/hello-wellioviz
    - Status: Up to date.
    - Who for: People who wnat to see what it does quickly. Litterally the hello world version. Loads well that exists at an URL.
2. Demo that consumes well logs directly from Government Open Data sites, so you don't have to download files locally
    - Link: https://observablehq.com/@justingosses/a-notebook-using-wellio-js-wellioviz-js-for-quick-looks-of-la
    - Status: Up to date
    - Who for: People who want to check out well logs that exist on a government site without having to download the file and work with it locally. Requires each well log to be in LAS 2.0 file format and downloadable from a specific URL.
3. Demo in Observable of Most Recent Published Code with 3 Examples:
    - Link: <a href="https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm">https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm</a>
    - Status: Code is pulled from NPM, so this reflects the latest code that has been published to NPM. May lag slightly compared to the code on this github repository in master branch. 
    - Who for: Good demo to check out if you want to see wellioviz work with both well log data in wellio.js style JSON and sparse style JSON. Uses whatever most recent version of wellioviz and wellio published to NPM.
4. Observable Notebook Where Code is Developed. Has functions written-out inline. 
    - Status: Stale. Development has shifted to local development with UI using demo.html found in docs folder. 
    - Link: <a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2">here</a>
<<<<<<< HEAD


#### Community Built Demos!
<INSERT YOUR EXAMPLE HERE VIA A PULL REQUEST !!!>
=======
    - Who for: If you want to see some of the actual functions in a setting where all changes are live, with the understanding that this code is old and some functions might have changed,this is a good one to check out as it is decidedly less "magical". Brings in well log that exists at an URL.
>>>>>>> 4530e7f04310ee6fcecb0604a6a1df9426732187


#### Alterative Observable-notebook-based demos out of date
- Status: Way out of date! but usefull to check out for illustrative purposes maybe.
- Link: Other older Observable notebooks that use older versions of wellioviz code but give further idea what is possible are: 
- https://observablehq.com/@justingosses/well-log-in-d3-js-v5
- https://observablehq.com/@justingosses/overly-simplified-stratigraphic-modeling
- https://observablehq.com/@justingosses/well-log-curve-cross-sections

## DOCS
Docs are here: https://justingosses.github.io/wellioviz/  

## Architecture 
<a href="images/wellioviz_architecture.png"><img src="docs/images/wellioviz_architecture.png"></a>

For more information on how wellioviz is organized, check out the <a href="docs/ARCHITECTURE.MD">ARCHITECTURE.MD</a> document. 


## Why?

Most geologists who make charts of well logs via code seem to do so in Python, often working in Jupyter notebooks. This is fine for a lot of things, but there are some use-cases where having a JavaScript visualization library makes for a better option.

1. <b>GUIs for well correlation.</b> Currently, there really isn't a free open-source application for well log correlation, at least to the best of my knowledge. This means if you don't have Enterprise scale money, (academics, non-profits, hobbyest, students, people in between jobs, etc.) you're often limited to correlating a handfull of wells at most using paper and pencil. Wellio (something to convert LAS files to JSON) and Wellioviz (something to visualize well logs as JSON into SVGs on a webpage) are critical pieces for a free non-code web-based well log visualization to exist. Although a full GUI (graphic user interface) is slightly out of scope for wellioviz, wellioviz could be extended to do this. 

2. <b>Websites that provide well logs to audiences on the web.</b> Although PNG images of well logs could be created and stored on server before being sent on demand to the front-end, this is less than ideal as all the images have to be created, stored, and loaded before the user needs them. This takes a lot of storage space. Additionally, it prevents scrolling, zooming, and overlays. Visualizing the logs on the fly in JavaScript is a better option for websites that want to given users an idea what a well log contains.

3. <b>Interactive well plotting with export into SVG or full HTML Pages from inside Jupyter Notebook</b>  Building the visualization in JavaScript also opens up the possibility of working in a Jupyter notebook and exporting wells as SVGs or full HTML webpages. Additionally, there aren't any limits on interactivity that you might hit in a python visualization package that is wrapping JavaScript behind the scenes. Kepler.gl in Jupyter is an example of this functionality where beautiful maps get created inside Jupyter notebook and get published as self-contained front-end only full HTML/CS/JS pages.

<i>Point of Caution: To some of extent, all of these are not completely in scope of the project. Wellioviz is a visualization library. 1,2,&3 also require graphic user interfaces and other things that are better to be built as projects that utilize wellioviz.</i>


## Contributing
Check out the Contributing <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/CONTRIBUTING.md">Guidelines</a>. Issues, documentation, pull requests, examples, test cases, and questions needed!

I also have a description in Contributing.md of how I tend to work on the project and what things to expect will always be in sync in case there are questions on that.

#### Organization of Issues on Kanban board here: https://github.com/JustinGOSSES/wellioviz/projects/1

## Code of Conduct
<a href="CODE_OF_CONDUCT.md">Code of Conduct</a>


#### Further Thinking...

<a href="docs/BRAINSTORMS.md">BRAINSTORM.md</a>
<a href="docs/audiences.md">AUDIENCES.md</a>

