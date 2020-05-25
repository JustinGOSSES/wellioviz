### Usage context

WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs, particularly those already converted to JSON, using the d3.js version 5 visualization library.

Central to wellioviz is the concept that what to plot and how to plot it can be put into a JSON template of instructions. That template will already has sensible defaults filled in, such that the end-user only has to understand what they want to change about the plotting, not all possible changes or the d3.js code itself.

Wellioviz doesn't have any native well log file loading capbilities. It is only visualization. Therefore, most of the demos use something else to load the well log curves and get them into JSON. The companion library, Wellio, is the standard option for converting LAS 2.0 files into JSON, but wellioviz is built with the idea that developers will write adaptors to transform their data into the wellioviz template before passing it to the curveBox function.

The curveBox function takes in information about what to plot and how to plot it from the standardized template and draws a curvebox. The curvebox can have one or more on curves within it. 

There are a variety of help functions for certain tasks like plotting all the curves in a well, but the only mandetory parts of wellioviz really are (1) the template given to the curveBox() function and (2) the curveBox function. Everything else is optional depending on need. 

For context on usage, it is probably worthwhile to also check out the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/docs/ARCHITECTURE.MD">Architecture</a> section and examples listed in the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/README.md">README</a>.md.

#### Hellow World Using a Well Log coming in as a las2.0 and plotted with Wellioviz.
https://observablehq.com/@justingosses/hello-wellioviz

#### Demo Showing Some of The Variables In the Plotting Template Via a Well Log coming in as a las2.0 and plotted with Wellioviz.
-- IN PROGRESS --

#### Hello World Using a Well Log in LAS 2.0 & JavaScript Notebook  (Wellio & Wellioviz)
-- IN PROGRESS --

#### Hello World Using a Well Log in LAS 2.0 & both Python (LASIO) and JavaScript (Wellio & Wellioviz)
-- IN PROGRESS --

### Examples:
#### Observable Demos:
- <a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2">https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2</a>
#### Website Demos:
-- IN PROGRESS --