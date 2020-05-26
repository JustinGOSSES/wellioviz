### Usage context

For context on usage, it is probably worthwhile to quickly check out the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/docs/ARCHITECTURE.MD">Architecture</a> section and examples listed in the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/README.md">README</a>.md then come back here.

WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs using the d3.js version 5 visualization library.


#### Key Concepts on Usage
##### Sensible Defaults the Developer Doesn't Have to Mess With
<b>Central to wellioviz is the concept that what to plot and how to plot it can be put into a JSON template of instructions.</b> That template will already has sensible defaults filled in, such that the end-user only has to understand what they want to change about the plotting, not all possible changes or the d3.js code itself.

##### Wellioviz handles the visualization. It does not handle loading of well logs or a graphic user interface
Wellioviz doesn't have any native well log file loading capbilities. It is only visualization. 


Therefore, most of the demos use something else to load the well log curves and get them into JSON. The companion library, Wellio.js, is the standard option for converting LAS 2.0 files into JSON entirely with JavaScript. However, wellioviz is built with the idea that developers will write adaptors to transform their data into the wellioviz template before passing it to the curveBox function. 

One example of this is the sparse input data transformation functions Wellioviz has that are built around the idea that some people want to strip out the parts of the well log you aren't plotting and only send to Wellioviz on the front-end the minimal amount of data needed. This speeds things up by shrinking the data you need to send from a backend system to the front-end.


##### Installation
Check out the installation section of the docs for more information on how to get wellioviz working in different settings.

##### Wellioviz has some functions you will never use and a few that will be always used!
</b>The only mandatory parts of wellioviz really are (1) the plotting JSON template given to the curveBox() function that contains information about what to plot and how to plot it and (2) the curveBox function. Everything else is optional depending on need.</b>

##### Hello Wellioviz: Easy Way to Get Started
The absolutely quickest way to get started (no installation) is to try it out on ObservableHQ. There is a <a href="https://observablehq.com/@justingosses/hello-wellioviz">Hello Wellioviz demo</a> that shows how to bring wellioviz into Observable and uses a small number of functions to quickly plot an example LAS 2.0 well log. You can also load your own LAS 2.0 well logs file from your computer into the browser and try it.  

##### GUI that introduces all the configurable variables in Wellioviz
-- IN PROGRESS --

##### Hello World Using a Well Log in LAS 2.0 & JavaScript Notebook  (Wellio & Wellioviz)
-- IN PROGRESS --

##### Hello World Using a Well Log in LAS 2.0 & both Python (LASIO) and JavaScript (Wellio & Wellioviz)
-- IN PROGRESS --
