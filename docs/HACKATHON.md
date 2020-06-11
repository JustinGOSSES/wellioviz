# Hackathon! 
#### Plans for SWUNG Transform Hackathon 2020

## Types of Sprint Issues to Pick From:
### 1. Tiny Issues that will have accompanying walk throughs to show new users how to make that type of change
- Make Changes to Documentation:
    - A. Improve something in the documentation that you found confusing.
    - B. Add terminal examples to usuage & install sections of the documentation.
    - C. Add gallery section with links to additional examples that have,are,will be created.

1. Fork an example on Observable and add in your own well log & change how it is displayed.
    - ObservableHQ is like Jupyter but for JavaScript and exist online as a live, editable, reactive notebook that can be edited and forked. Learn a little about them <a href="https://observablehq.com/@observablehq/a-taste-of-observable">here</a> and in a <a href="https://observablehq.com/@observablehq/observable-for-jupyter-users">Observable for Jupyter users</a>.
    - You can find several Observable notebook demos on the Wellioviz<a href="https://github.com/JustinGOSSES/wellioviz/blob/master/README.md">README</a>, which you can fork and then change. 
    - One of the first things to do is to add in your own LAS 2.0 format well logs. While the "hello wellioviz" notebook has just one way to get a well log into Observable, <a href="https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm">this</a> notebook shows a couple different ways.
    - In addition to changing the well, you can change colors, line thickness, fill colors, full cutoffs, width, heights, percent of well visible via scrolling, and a range of other configuration. The data and configuration is given to the curveBox() function in a standard format. You can see an example of that format by running wellioviz.curveBoxTemplateExamples("example") and examining the JSON returned. To see what the curveBox() function expects as values for each key, run wellioviz.curveBoxTemplateExamples("definitions").
    - Observable lets you make interactive user interfaces very easily. I've built a small slide to change the cutoff values for the fill in the gammay-ray log in <a href="https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm">this Observable notebook</a>. Do a serch to find "experimental shale/silt cutoff slider" to go right to the slider widget. <a href="https://observablehq.com/@jashkenas/inputs">This</a> observable notebook has a great introduction to inputs and things like slider widgets. There's great little demos that could be made with widgets like this to show other interactive control of some of wellioviz's configuration options.

2. Improve the documentation!
    - The documentation for wellioviz is built with documentation.js. Like most documentation tools, it works but can be frustrating. I promise it isn't as bad as using Sphinx in Python though.
    - You can find some instructions for re-building the documentation after a change is made in the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/docs/CONTRIBUTING.md">Contributing.md</a> file.
    - If there is anything confusiong, change it. If you think something could use more detailed instructions, change it. If you followed the instructions and dthey didn't work, submit an issue or add alternative instructions to the documentation.


### 2. Medium Scale Work
- Add new variable to plotting template and main plotting function curveBox()  <=== need to write instructions for this!
    - Possible Idea: Add functionality such that developers can turn off the default behavior that removes any curveBox that already exists in a div when you provide that div as the place for a new curvebox. You might want to turn that off so users can add multiple curves to the same div without having to handle the multiple div creation on their side. Brief discussion in <a href="https://github.com/JustinGOSSES/wellioviz/issues/98">this</a> issue.

### 3. Larger more complicating Issues "from the pile"
- Issue boards:
    - Prime Issue Board: https://github.com/JustinGOSSES/wellioviz/projects/1
    - Userfriendliness Issue Board: https://github.com/JustinGOSSES/wellioviz/projects/2

There are a variety of issues that can be worked on for wellioviz. Some issues that are better suited for small hackathon scale springs have been tagged with either <a href="https://github.com/JustinGOSSES/wellioviz/labels/hackathon_easy">"hackathon_easy"</a> or <a href="https://github.com/JustinGOSSES/wellioviz/issues?q=is%3Aissue+is%3Aopen+label%3Ahackathon_advanced">"hackathon_advanced"</a>.

### 4. Build GUIs for the visualization library
This is more of a full hackathon project. What exists currently is best demonstrated by <a href="https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm">this Observable notebook</a> and this <a href="https://justingosses.github.io/wellioviz/demo.html">barebones demo webpage</a>. What doesn't exist yet is a webpage or Observable notebook where a non-code user can play around with all the style configuration variables in the plotting template to change things like colors, fills, line widths, sizes, etc. You can see an example of what is possible in the Observable notebook where there is a slider to change the dividing line between shale & silt and silt & sand in the gamma-ray log. 
