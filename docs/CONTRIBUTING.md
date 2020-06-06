## What Type of Contributions Are Welcome?
All contributions welcome! Big, small, code, documentation, or questions.

If you’d like to contribute, but you’re not so experienced with JavaScript, look for good first issue tags or email the maintainer for suggestions.

## Code of Conduct
<a href="CODE_OF_CONDUCT.md">Code of Conduct</a>

### What Issues Exist
Check the <a href="https://github.com/JustinGOSSES/wellioviz/issues">Issues</a> for outstanding issues & features under development. There is an attempt at organizing the issues using the project board <a href="https://github.com/JustinGOSSES/wellioviz/projects/1">here</a>. For the most part, the issues board contains all the issues.. just in an organization to make it clear what is being worked on now.

## Ways to Contribute!

### Issues, Features, and Bug Reports

Add a feature request or bug report issue <a href="https://github.com/JustinGOSSES/wellioviz/issues/new/choose">here</a> When you add an issue, there will be two choices for issues templates to use, one for bug reports and another for feature requests.

### Pull Requests
If you've fixed an issue in the code, please consider submitting a pull request, which is basically a fork or branch of this repository submitted back to it with a specific change. 
1. State why you are proposing this change. 
2. When you make a pull request, please try to keep the changes to one feature at a time if possible (not always possible). 
3. We don't have tests yet, so in lieu of that, please fork the active Observable notebook noted in the README add in your changed functions and make sure everything still works with your changes. If there are changes needed to be made to get things to work that are not in index.js but only in the Observable notebook, please note that in your pull request. This is unlikely but theoretically possible.
- Please consider other use-cases and make sure your code changes aren't narrowing the scope of wellioviz to only your use case.
- Follow the PUll REQUEST template <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/.github/pull_request_template.md">here</a>

### Documentation
Please submit a pull request or issue for anything confusing or absent in documentation as well. 

Wellioviz documentation is built with <a href="http://documentation.js.org/">documentation.js</a>, a library that grabs inline code documentation above each function and markdown files specified in docs/doc_setup.yml to build HTML documentation pages. You can find a live version of the docs <a href="https://justingosses.github.io/wellioviz/#introduction">here</a>

#### How to Make the Docs
- Fork the original repository to your profile. Clone a copy locally.
- Add new markdown files to the docs by making changes to docs/doc_setup.yml or edit documentation between /** **/ in the index.js file or edit any of the markdown files specified in doc_setup.yml.
- Install locally <a href="https://github.com/documentationjs/documentation#documentation">documentation.js</a>
- Run in the home directory of wellioviz:    
  `documentation build ./dist/index.js --config docs/doc_setup.yml -f html -o docs`
- go to the docs directory. Run: `python3 -m http.server` . Alternatively, if you have node.js and would like to use that you can run in your terminal `http-server`. Please note, that if you run the server from anywhere except the docs directory, the image links won't work. The docs page on the github.com repository runs from the docs folder on the master branch as well.
- Go to a browser and open http://localhost:8000/index.html . You should see the docs. They'll look just like the docs mentioned above that are live as a github pages page but with your changes. 
- When you're satisfied with the change, push back to your branch & then submit a pull request back to the original repository. 


### How to Edit & Generate Demo.html
The tricky part is probably the bundle.js script. Everything else works like vanilla JavaScript.
To regenerate the bundle.js script in docs/js used in the demo.html page:
- install npm
- use npm to install: browserify, wellio.js, and d3.js
- navigate in terminal to docs/js folder
- run `browserify call_plots.js main.js get_wellio.js vkbeautify.js -o bundle.js`
This will pull in wellio.js and wellioviz.js from your local node environment and combine them and the other JavaScript into a single bundle.js file that the demo.html file uses.



## How I'm Keeping Things In Sync During Development.
The way I'm developing is to do changes in Observable notebook first. For this type of work, it has been a faster way to write working code. Because all the code is automatically executed in each cell when code changes, it allows me to catch bugs earlier than I would otherwise. I can have multiple plots of different types built in the same notebook and make sure they all still build as I change code! 

The active notebook is noted in the README. 

#### How I try develop this repository now...
1. Make changes to <a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2">an Observable notebook</a> that has all the code. These changes are usually for one, or  maybe two issues, on the <a href="https://github.com/JustinGOSSES/wellioviz/projects/1">kanban board</a>. 
2. Create a branch for these changes on the git repo. 
3. When I'm happy with the changes in the Observable notebook, I copy them to the <a href="https://github.com/JustinGOSSES/wellioviz/blob/master/dist/index.js">index.js file</a> in the git repository.
4. Merge the forked branch back into master. 
5. Change version in the package.json file. Push that change.
6. Run npm publish. 
7. Clear issues that are fixed due to the version bump.

These means the code in certain <a href="https://observablehq.com/@justingosses/well-log-in-d3-js-v5-notebook-2"> Observable notebooks</a> where I'm actively working with the code might be ahead of the master branch in private mode, but I try to only publish (share the changes to the notebook publically) once I have pushed to the github repository.

- The code in master branch will always be in sync with code on NPM.
- Index.js & Observable notebook are almost always kept in sync. When they aren't, I'll let people know and put it in the README.
- The docs are updated gradually. Sometimes there will be new or changing functions that aren't populated yet.
- The html demo page is not kept in sync and will only be updated occasionally. The Observable notebooks are better places to look for up-to-date demos. In particular, <a href="https://observablehq.com/@justingosses/first-wellio-example-with-all-wellioviz-functions-from-npm">this</a> notebook, which pulls all its wellioviz code from NPM. You can change which version of wellioviz code is pulled from NPM by changing the cell towards the top that pulls in wellioviz for use.

## And lastly
If anything is confusing, open an issue.
