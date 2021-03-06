## Usage context

For context on usage, it is probably worthwhile to quickly check out the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/docs/ARCHITECTURE.MD">Architecture</a> section and examples listed in the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/README.md">README</a>.md then come back here.

WELLIOVIZ is a JavaScript library that provides functionality to visualize well logs using the d3.js version 5 visualization library.


### Key Concepts on Usage
#### Sensible Defaults the Developer Doesn't Have to Mess With
<b>Central to wellioviz is the concept that what to plot and how to plot it can be put into a JSON template of instructions.</b> That template will already has sensible defaults filled in, such that the end-user only has to understand what they want to change about the plotting, not all possible changes or the d3.js code itself.


##### Wellioviz handles the visualization. It does not handle loading of well logs or a graphic user interface
Wellioviz doesn't have any native well log file loading capabilities. It is only visualization.



Therefore, most of the demos use something else to load the well log curves and get them into JSON. The companion library, Wellio.js, is the standard option for converting LAS 2.0 files into JSON entirely with JavaScript. However, wellioviz is built with the idea that developers will write adaptors to transform their data into the wellioviz template before passing it to the curveBox function. 

One example of this is the sparse input data transformation functions Wellioviz has that are built around the idea that some people want to strip out the parts of the well log you aren't plotting and only send to Wellioviz on the front-end the minimal amount of data needed. This speeds things up by shrinking the data you need to send from a backend system to the front-end.


#### Installation
Check out the <a href="/installation">installation section</a> of the docs for more information on how to get wellioviz working in different settings.

#### Wellioviz has some functions you will never use and a few that will be always used!
</b>The only mandatory parts of wellioviz really are (1) the plotting JSON template given to the curveBox() function that contains information about what to plot and how to plot it and (2) the curveBox function. Everything else is optional depending on need.</b>

#### Smallest Possible Sequence to Use Wellioviz
1. Load your LAS 2.0 file into memory. This will come in as a txt file converted to a string. General JavaScript functions can be used to load the file into memory. There are a couple different ways to do this depending on if the LAS 2.0 well log comes in from a file saved in the same directory as the code, a file loaded from the user's local computer into a web application, or pulled from somewhere else on the web via an API. All of these examples are shown in different Observable Demos linked to in this repositories README.md file.
2. Use wellio to convert the string of well log information into a wellio-style JSON.
<code class="black"> `well_json_01_01_095_19W4 = wellio.las2json(well_as_string)`</code>
3. Supply this and the depth curve name to the next function, like so:
<code class="black"> `three_things_2 = wellioviz.fromJSONofWEllGetThingsForPlotting(well_json_01_01_095_19W4,"DEPTH")`</code>
The three_things objects holds an object or dict with three key:value pairs. The three keys are "curve_names", "uwi", and "well_log_curves_reformatted_for_d3". We'll use these in the next steps.
4. First though we need to get a blank template to be populated. This template holds both the data and the style for how things are visualized by wellioviz. We'll get one from wellioviz by calling: 
<code class="black"> `example_template = wellioviz.curveBoxTemplateExamples("example")`</code>
5. You can either use the default style options for each curve, exert a large amount of fine grain control, or style things somewhere between. In this example, we'll do something somewhere in between using the function:
    <code>wellioviz.minimumDataIntoTemplateFunc()</code>

    <code class="black">gr_plot_template_noFill = 
    wellioviz.minimumDataIntoTemplateFunc(
            example_template,well_log_curves_reformatted_for_d3_2,[uwi2],["CALI"],["black"],[""],[
                {"curve_name":"GR",
                "fill":"no",
                "fill_direction":"left",
                "cutoffs":[0,ShaleSiltCutOff,SiltSandCutOff],
                "fill_colors":["gray","orange","yellow"],
                "curve2":""
                }
                ],
                "well_holder_1A",200,400,"DEPT")</code>

    <code class="black">resd_plot_template_1 = wellioviz.minimumDataIntoTemplateFunc(example_template,well_log_curves_reformatted_for_d3_2,[uwi2],['ILD'],["RED"],[""],[
    {"curve_name":"ILD","fill":"yes","fill_direction":"left","cutoffs":[5,10,25],"fill_colors":["#ffe6e6","#ffb3b3","red"],"curve2":"ILD"}],"well_holder_1B",200,400,"DEPT")</code>

    <code class="black">poro_plot_template_1 = wellioviz.minimumDataIntoTemplateFunc(example_template,well_log_curves_reformatted_for_d3_2,[uwi2],["NPHI","DPHI"],["purple","pink"],[""],[{
                   "curve_name":"NPHI",
                   "fill":"yes",
                   "fill_direction":"between",
                   "cutoffs":[0],
                   "fill_colors":["lightblue"],
                   "curve2":"DPHI"
                 },
                 {
                   "curve_name":"DPHI",
                   "fill":"no",
                   "fill_direction":"left",
                   "cutoffs":[],
                   "fill_colors":[],
                   "curve2":""
                 }
               ],"well_holder_1C",200,400,"DEPT")</code>

6. We'll then put each of those well log curves into a single div to hold all the curves for that well. 

    <code class="black">result_1 = wellioviz.multipleLogPlot("well_holder",[gr_plot_template_noFill,resd_plot_template_1,poro_plot_template_1])</code>

This will create a div with several sub-divs with SVGs within them that represent the various curves in the well. They will all get appended to the div called "well_holder".

### Examples of How to Use

##### Hello Wellioviz: Easy Way to Get Started
The absolutely quickest way to get started (no installation) is to try it out on ObservableHQ. There is a <a href="https://observablehq.com/@justingosses/hello-wellioviz">Hello Wellioviz demo</a> that shows how to bring wellioviz into Observable and uses a small number of functions to quickly plot an example LAS 2.0 well log. You can also load your own LAS 2.0 well logs file from your computer into the browser and try it.  

##### Observable Demo with Single Well & Multiple Well & Sparse Style Input Usage Examples
https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm

##### GUI that introduces all the configurable variables in Wellioviz
-- IN PROGRESS --

##### Hello World Using a Well Log in LAS 2.0 & JavaScript Notebook  (Wellio & Wellioviz)
-- IN PROGRESS --

##### Hello World Using a Well Log in LAS 2.0 & both Python (LASIO) and JavaScript (Wellio & Wellioviz)
-- IN PROGRESS --
