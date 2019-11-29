### Who:


### Skill level:


### Prior knowledge:


### Assumed learning path(s):


### Goals:


### Tasks:


### Likely combinations:


### How these things should affect API design:


### Potential API organization brainstorm:
Central point of organizatin for API is curvebox.

Each curvebox is built from JSON template. This enables default values to be used most of the time and new values to be easiely substituted via template.key = something calls. This will supply data, text, and styling choices for each curve box. instead of calling d3.js code directly, inputs will be supplied via the template.

There are multiple options for combining curveboxes. At this time, it looks like the most flexible will be to intiate a html div with an given ID, then append SVGs to that div. Each curvebox is created and appended separately as a separate div.

Curvebox template will cover everything except: multi-curvebox title, top lines between curve boxes, [width, height, padding, margins, etc] or div that the SVGs get appended to.

Initial template is used with good defaults.
 -- For single curve single well, only thing that must be changed is well-name, curveName, curve data.
-- For multiple curve + single well + single curvebox all that needs to be changed is the same as before but two curve names and maybe fill parameter if fill is wanted. 
-- For single curve multiple wells, an array of curveNames acceptable in order or preference, multiple wellio JSON datas objects is all that is required at minimum. 
-- If tops are wanted in the above option for a cross-section, then an object with top name and array of top depths for each well name or None must be given which will be used to plot tops. Multiple such objects can be provided.

### Likely pain points:
- Combining JavaScript and Python
- node.js vs. front-end JavaScript / working with modules
- Enabling Extensiability to underlying d3.js created SVGS that are at the end of functions that trigger other functions.
- Intelligent picking and then adjusting of dimensions.

### Likely bigger API decisions:
- Whether to append multiple SVGs to a div or put SVG into separate divs
- How much to pack into an initial JSON provided to wellioviz
- How to maintain the ability to return SVG and not just append SVG
- How much of interaction should be built into wellioviz vs. code that uses wellioviz? Put another way, how much of demo app should be inside wellioviz vs. the main.js for the demo page?
- How to enable easy and flexible use on html/css/JS front-end page, Observable, different wells in JSON formatting, mostly Python Jupyter notebook use, and backend pre-rendered SVGs from same codebase?