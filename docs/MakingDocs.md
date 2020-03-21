# How to Make the Docs
- Make changes to docs/doc_setup.yml or the documentation between /** **/ in the index.js file.
- Install locally <a href="https://github.com/documentationjs/documentation#documentation">documentation.js</a>
- Run in the home directory of wellioviz:    
  `documentation build ./dist/index.js --config docs/doc_setup.yml -f html -o docs`
- go to the docs directory. Run:    
  `python3 -m http.server`
- Go to a browser and open http://localhost:8000/index.html
