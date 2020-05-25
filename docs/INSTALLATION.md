## Installation Instructions for Various Environments

#### Intro to node.js modules
Wellioviz is a node.js module. If you've only brought JavaScript into an HTML project via a <script></script> tag, you probably want to learn a little bit about how to use npm (node package manager) to get JavaScript modules into your front-end code. <a href="https://medium.com/jeremy-keeshin/hello-world-for-javascript-with-npm-modules-in-the-browser-6020f82d1072">This</a> is a short demo that only covers the minimum you need to know.


### Observable Notebook - JavaScript 
##### (easiest way to get started)
To use wellioviz in a ObservableHQ.com JavaScript notebook, you can simply have a cell that says `wellioviz = require('https://bundle.run/wellioviz)` 

If you want to bring in a specific version, you can add the version on the end like so `wellioviz = require('https://bundle.run/wellioviz@0.0.25')`.

You would then call wellioviz functions in other cells by adding the function name on the end of wellioviz like: `example_template = wellioviz.curveBoxTemplateExamples("example")`.

You can find an example of this in the <a href="https://observablehq.com/@justingosses/hello-wellioviz">Hello Wellioviz"</a> notebook on ObservableHQ.com.

### Install for Use on Front-end Website
As mentionted above, if you haven't used npm modules in an HTML page before, you probably want to reach a little about them. 

There is more than one way to get npm modules into a front-end project. Wellioviz doesn't have anyting about it that requires very advanced ways. For example, <a href="https://medium.com/jeremy-keeshin/hello-world-for-javascript-with-npm-modules-in-the-browser-6020f82d1072">here</a> and <a href="https://www.agiliq.com/blog/2019/01/using-npm-to-manage-frontend-libraries/">here</a> are two different blog posts to walk you through installing a npm JavaScript module into a front-end project. 

#### One possible way to use wellioviz in a website:
1. Install <a href="https://nodejs.org/en/download/">node.js</a>
2. Install <a href="https://www.npmjs.com/get-npm">npm</a>
3. Navigate to the directory of your new project.
4. Create a package.json file that looks like this:
`{
    "dependencies": {
        "wellioviz": "0.0.25"
    }
}`
Note, the latest version of wellioviz is probably not 0.0.25 by now. Any other modules you need would go in here too after wellioviz line separated by a comma.
5. From the same folder that has the package.json run `npm install`. This will create a folder called "node_modules" and there should be another folder called wellioviz.
6. Creat an HTML file at the same top-level of your project directory. Inside it, put a sript tag `<script src="node_modules/wellioviz/dist/index.js"></script>`. You should be able to call wellioviz functions in your other JavaScript files now.

#### A second possible way to use wellioviz in a website:
This way is slightly cleaner in terms of namespace. Additionally, you may not want to include your entire node modules folder if that gets big!

1. Install <a href="https://nodejs.org/en/download/">node.js</a>
2. Install <a href="https://www.npmjs.com/get-npm">npm</a>
3. Install <a href="http://browserify.org/">browserify</a>
4. Navigate to the directory of your new project.
5. Run `npm install wellioviz`
6. Create a directory called `JS`. 
7. Navigate into `JS` directory and create a file called `main.js`.
8. In main.js include a line `wellio = require('wellioviz');`.
9. If you had multiple JavaScript files, lets say called main.js, other.js and more.js, you'd now go inside the JS folder run the command `browserify main.js other.js more.js -o bundle.js`. This would not only combine those folders into a single file, but it would also pull in the wellioviz library because of the line in step 8.
10. Creat an HTML file at the same top-level of your project directory. Inside it, put a sript tag `<script src="JS/bundle.js"></script>`. You should be able to call wellioviz functions in your other JavaScript files now.

### Node.js backend
You're probably not going to use wellioviz on the backend. The one exception is if you wanted to create a large number of static SVGs of well logs from your LAS files.

1. Install <a href="https://nodejs.org/en/download/">node.js</a>
2. Install <a href="https://www.npmjs.com/get-npm">npm</a>
3. Run `npm install wellioviz`.
4. To use wellioviz from the command line run `node --require wellioviz`. This should start the node console with wellioviz included. You should see a `>` on the next console line.
5. Now run `var wellio = require('wellioviz')`
6. The console output should be `undefined`, which is a big scary, sorry. 
7. However, if you run `wellioviz.help` you'll now see returned on the next line =`'I'm really no help. Please check out the docs at https://justingosses.github.io/wellioviz/ or the main README.md at https://github.com/JustinGOSSES/wellioviz. Best of luck.'`.
8. Further wellioviz functions are just the variable name you created `wellioviz` + `.` + function name with arguments included inside the `()`.


### Jupyter Notebook with JavaScript Kernal
-- IN PROGRESS --

### Jupyter Notebook with Python Kernal
-- IN PROGRESS --

### Install Wellioviz for Contributing to Wellioviz
1. Fork the repository https://github.com/JustinGOSSES/wellioviz.git on github.com to your own account. 
2. Clone your fork of repository that is now on your github page `git clone https://github.com/`+yourUserName+`/wellioviz.git`.
3. Navigate inside `cd wellioviz`.
4. Make changes
5. To see Wellioviz changes appear in the demo.html page, make sure to run browserify after any changes as described in the second option for install under "Install for Use on Front-end Website".
6. When you are ready to merge changes back, push the changes back to your account on github.com. 
7. On the repository page of your fork, you'll see a button called "new pull request" on the left side to the right of the "branch" button. Click that to start a pull request. And follow the prompts.r