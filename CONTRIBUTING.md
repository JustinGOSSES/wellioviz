

## What Type of Contributions Are Welcome?
All contributions welcome! 

Anything confusing or absent in documentation as well. Inline documentation, documentation built with documentation.js, tests, example incoming data jsons, and code changes are all welcome. Briefly check issues to see if your issue already exists.

If you're unfamiliar with pull requests, just add an issue. 

## How to Make the Docs
- Make changes to docs/doc_setup.yml
- Install locally <a href="https://github.com/documentationjs/documentation#documentation">documentation.js</a>
- Run in the home directory of wellioviz: `documentation build ./dist/index.js --config docs/doc_setup.yml -f html -o docs`
- go to the docs directory. Run `python3 -m http.sever`
- Go to a browser and open http://localhost:8000/index.html

## Keeping Things In Sync During Development.
Potential code to keep in sync is in several locations: 
- An Observable notebook
- This code repository, particularly in the index.js file in the dist directory. 
- Documentation as found in the docs folder in this code repository.
- The demo page found in the docs folder in this code repository.

The way I'm developing is to do changes in Observable notebook first. For this type of work, it has been a faster way to developer. Additionally, because all the code is automatically executed in each cell when code changes, it allows me to catch bugs earlier than I would otherwise. The active notebook is noted in the README. 

I try to sync changes to the index.js file in this code repository after each work session. 

#### Index.js & Observable notebook are almost always kept in sync. When they aren't, I'll let people know and put it in the README.
#### The demo page is not kept in sync and will only be updated occasionally. 
#### The docs are updated gradually. Sometimes there will be new or changing functions that aren't populated yet.

## Pull Requests
- When you make a pull request, please try to keep the changes to one feature at a time. 
- Instead of tests, please fork the active notebook noted in the README add in your changed functions and make sure everything still works with your changes. If there are changes needed to be made to get things to work that are not in index.js but only in the Observable notebook, please note that in your pull request. This is unlikely but theoretically possible.
- State why you are proposing this change. 
- Please consider other use-cases and make sure your code changes aren't narrowing the scope of wellioviz to only your use case.
