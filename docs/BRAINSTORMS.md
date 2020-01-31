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


## Crazy Ideas / Non-standard Visualization Features Brainstorm
- Ability to overlap curves and see heatmap of some sort for large number of wells.
- Ability to select curve segments and see closest matches in X number of wells based on some criteria for how many and which ones to check



- How to handle multiple JSON formatS? 
- 1. Not everyone will want to use wellio.js style JSON. Some might only want to supply the data being plotting and how to plot it in order to minimize the amount of data sent over the internet. *HOW DO WE TRANSFORM DIFFERENT DATA ORGANIZATIONS INTO ONE WE CAN WORK WITH*
- 2. An examples of things that are calculated from the full well log information in wellio JSON that might be explicitly given in abbreviated form in another JSON format. 
- 2. A. Depth curve might be supplied via a step, top, and bottom instead of a curve. 
- 2. B. Max plotting values might be given instead of calculated. This is especially true if the max or min is a bad value. 
- 2. C Depth curve for one curve in one well might be different than depth curve for another curve in the same well. If we try to plot both curves in the same curve box, how do we make sure the right depth curve is used and not the wrong one? The default behavior is a single depth curve. 

An Example of a different way to format data as input:
data2 = [{
"api_no_14": "7376",
"curve_type": "RHOB",
"curve_values": [2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526,2.2322, 2.2513, 2.2548, 2.2445, 2.2223, 2.2047, 2.198, 2.2088, 2.2248, 2.2399, 2.251, 2.255, 2.2526],
"linecolor": "rgb(205,0,0,1)",
"logscale": false,
"max_depth": "1607.3",
"min_depth": "1598.3",
"null_value": -999.25,
"step": 0.1,
"units": "g/cc",
"x_max": "3",
"x_min": "2",
}]




#### Previous Work
This builds on previous work in <a href="https://github.com/JustinGOSSES/wellio.js">wellio.js</a>

Wellio.js is all about las file <=> JSON file, so it will stay a separate repository and node.js package.

Wellio.js & wellio_viz.js could be used together. It would be easy to visualize all your las files in a local or remote folder you point a web application at.

#### Wellio work tie-in (and other library/packages)
There are several long-standing wellio.js improvements that would help make the visualization work here more robust. 
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/12">Change</a> how wellio handles new lines so wrapped lines in LAS files are okay. 
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/5">Slight changes in parsing to more closely match LAS 2.0 format and enable some flexibility in how that format is interpreted when people create LAS files.
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/6">Write data transformation for welly dataframe</a> <=> wellio JSON, so users in a Python Jupyter notebook can transform or access their well logs in LAS format with the familiar welly python package and then easily shoot them into wello_viz for visualization. 
- <a href="https://github.com/JustinGOSSES/wellio.js/issues/7">Write data transformation for LASIO Dict <=> wellio JSON</a>, so users in a Python Jupyter notebook can transform or access their well logs in LAS format with the familiar LASIO python package and then easily shoot them into wello_viz for visualization. 
- Should coordinates be included in the wellio JSON or be separate? This was discussed in <a href="https://github.com/JustinGOSSES/wellio.js/issues/8">this issue</a>.
- Create transformation functions such that well logs in other JSON formats can work fine, perhaps all that is needed would be a flat for LASIO JSON or another type of JSON rather than wellio.js generated JSON.
