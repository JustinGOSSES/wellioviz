### Basic Sketch
<a href="images/wellioviz_architecture.png"><img src="/images/wellioviz_architecture.png" style="max-width:800px;"></a>

### Different Data Inputs

      This code is written with the assumption that different users will want to bring in well log data in different formats. Code will need to transform that data into an established template format.

      Some users will want to only send to the JavaScript the data they want to plot. They might want this to minimize the amount of data that has to be sent from backend server to the client's front-end website. This is referred to elsewhere in the code and documentation as the sparse incoming data approach.
      
      Others might use wellio.js to convert a whole LAS 2.0 formatted well log file to JSON on the front-end. They would then send that whole JSON along with instructions with how to plot some portion of it to wellioviz.
      
      Still others might want to bring in data in a format I don't know of. Ideally, it should be easy to adapt for that purpose as the plotting function takes a standard JSON. End users should be able to provide their own functions to reformat their data & style choices into the template that is fed into the curveBox function.
      
      #### Code Organization:
      Code is organized into 4 groups of functions: 
        
      <b>Loading, Transformation, Packaging, & Plotting.</b> 
        
      The further one gets through the steps, the more there is one way to do things as opposed to multiple ways. 
      - In the loading & transformation steps, different functions will exist as incoming data is formatted in different ways initially.
      - Different functions will execute things differently in step 3 depending mostly on how things are being plotted, and no longer on the data format.
      - In the fourth step, where plotting occurs, everything uses the same function, CurveBox, and potentially additional functions if more than a single well bore is shown.


### Core Organization in Abstract Terms:
- Central point of organizatin for API is curvebox. 
- Each curvebox is built from JSON template. The JSON includes information for what is plotted and how it is plotted. This will supply data, text, and styling choices for each curve box. Instead of calling d3.js code directly, inputs will be supplied via the template. 
- Organization of input information is: 
    - CurveBox-wide information
    - Curve Information
    - Top (line) information
    - Rectangle information
- Use of JSON as input to plotting functions using standard format enables:
    1. default values to be used most of the time and new values to be easiely substituted via template.key = something calls. 
    2. Possible supplying of the JSON from not just JavaScript but other languages like Python. A similar organization is followed with Altair/Vega as seen in <a href="https://eitanlees.github.io/altair-stack/">this blog post</a>. 
- There are multiple options for combining curveboxes. This will require the JavaScript code to generate not just SVGs, but also divs that are appended to divs created by other code. 
    - At this time, it looks like the most flexible will be to intiate a html div with an given ID, then append SVGs to that div. 
    - Each curvebox is created and appended separately as a separate div. 
    - Inside this main curvebox div, header information and curves within curvebox are optionally separate divs or a single SVG. 
        - The former enables scrolling of the curves while still seeing the header. The later enable saving the curvebox as an actual SVG file.
- An initial CurveBox JSON template is used that has good defaults that then has limited key:value pairs replaced with new information for that specific curveBox. Things will be possible like:
    - 1. For single curve single well, only thing that must be changed is well-name, curveName, curve data. 
    - 2. For multiple curve + single well + single curvebox all that absolutely needs to be changed is the same as before but two curve names and maybe fill parameter if fill is wanted.
    - 3. For single curve multiple wells, an array of curveNames acceptable in order or preference, multiple wellio JSON datas objects is all that is required at minimum. 

### Where to Make Changes After A Visualization is Already Plotted Once
<a href="images/wellioviz_architecture_data_change.png"><img src="/images/wellioviz_architecture_data_change.png" style="max-width:800px;"></a>


### Visualization Organization
- Curvebox: The central unit of visualization. Can contain either a single Curve or multiple curves, typically from one well.
- Within CurveBox, header information is in one DIV, curves in another div. Both of these in a curvebox div. To enable scrolling the curves might have to be within a nested div.
- CurveboxHolder aka a Cross-section: Made up of multiple curveboxes. Each curvebox can represent a different well or different curves (one per box) from the same well. Typically no plotting between curveboxes but there may be for tops in cross-sections. 

#### Organization of CurveBoxes & Cross-sections
<a href="images/curve_box_org.png"><img src="/images/curve_box_org.png" style="max-width:800px;"></a>
<a href="images/cross_section_org.png"><img src="/images/cross_section_org.png" style="max-width:800px;"></a>



### Initial List of Curvebox Visualization Visual Parts
These will all be generated by the curveBox() function according to the explicity instructions within the plotting JSON given to the curveBox() function.
- Axis (for example ticks and integers to represent depth) (x and y)
- Axis titles (x and y)
- Curvebox Title
- Curve lines (color, stroke size, stroke style)
- Curve fill based on under or over a curve 
- Curve fill multiple fill colors based on cutoffs & under or over a curve value
- Curve fill based on overlap of two curves
- Curve fill based on SVG pattern
- Curve fill like property but visualized as curve line color
- Curve fill like property but visualized as colored rectangle within well box or curve box.
- Curve units
- Curve min & max
- Curve Name
- Top lines
- Top titles
- Boxes with transparency to represent core location, formations, etc.
- Box titles
- X & Y values on hover
- Clickable curvebox with coordinates returned to other functions via click



