# wellio_Viz.js
d3.js v5 visualization companion for wellio.js

## A Brainstorm from this proof of concept:
https://observablehq.com/@justingosses/well-log-in-d3-js-v5

#### Builds on previous work in <a href="https://github.com/JustinGOSSES/wellio.js">wellio.js</a>
#### Could be used in Jupyter notebook running Python via ipywidgets and traillets...
## Benefits vs. matplotlib approach:
- D3.js enables more interactivity
- exportable to working webpages if wellio.js & wellio_viz.js used together. Could even be generic webpage. Visualize all your las files in a folder you point it at.
- Could be bare-bones free GUI for picking tops.

## Visualization Components
#### Single Well Curvebox
#### Multiple Well Curvebox
#### Multiple Single Well Curve Boxes

## Visualization Features
### Standard Expected Features of Visualization Compontents
#### curve
#### multiple curves in same curve box
#### horizontal lines
#### Diagonal lines that connect horizontal lines across curve boxes
#### Solid fill
#### Patterned fill
#### Color scale fill
#### Color fill based on value curve with cut-offs
#### Color fill based on curve overlap
#### Color fill based on some other curve-like property that isn't the curve shown but along same axis.

### Less Standard Expected Features of Visualization Compontents
#### Ability to overlap curves and see heatmap of some sort for large number of wells.
#### Ability to select curve segments and see closest matches in X number of wells based on some criteria for how many and which ones to check

## Other Features
#### Ability to call in Jupyter notebook that is mostly Python
#### Ability to interact with notebook via HTML/CSS/JS for some functions that python isn't good at like:
- Selecting wells via map by polygon or line
- Selecting wells from well list by clicking
- Export to working webpage with map of some well variable, cross-section, example wells, etc. 
- Export table of possible well selections based on potential required curves and tops


