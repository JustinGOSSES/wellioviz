

## What Type of Contributions Are Welcome?
All contributions welcome! 

.... for context
## Keeping Things In Sync During Development.
The way I'm developing is to do changes in Observable notebook first. For this type of work, it has been a faster way to write working code. Because all the code is automatically executed in each cell when code changes, it allows me to catch bugs earlier than I would otherwise. I can have multiple plots of different types built in the same notebook and make sure they all still build as I change code! 

The active notebook is noted in the README. 

<i>I try to sync changes to the index.js file in this code repository after each work session.</i> 

Potential code to keep in sync is in several locations: 
- An Observable notebook
- This code repository, particularly in the index.js file in the dist directory. 
- Documentation as found in the docs folder in this code repository.
- The demo page found in the docs folder in this code repository.

#### Index.js & Observable notebook are almost always kept in sync. When they aren't, I'll let people know and put it in the README.
#### The demo page is not kept in sync and will only be updated occasionally. 
#### The docs are updated gradually. Sometimes there will be new or changing functions that aren't populated yet.



## Ways to Contribute!

### Documentation
Anything confusing or absent in documentation as well. Inline documentation, documentation built with documentation.js, tests, example incoming data jsons, and code changes are all welcome. Briefly check issues to see if your issue already exists.

#### How to Edit & Generate the Docs
There is Documentation on how to make the docs in the docs folder<a href="https://github.com/JustinGOSSES/wellioviz/blob/master/docs/MakingDocs.md"> here</a>

### Bug Reports & Issues

If you're unfamiliar with pull requests, just add an issue. 


### Pull Requests
- When you make a pull request, please try to keep the changes to one feature at a time. 
- Instead of tests, please fork the active notebook noted in the README add in your changed functions and make sure everything still works with your changes. If there are changes needed to be made to get things to work that are not in index.js but only in the Observable notebook, please note that in your pull request. This is unlikely but theoretically possible.
- State why you are proposing this change. 
- Please consider other use-cases and make sure your code changes aren't narrowing the scope of wellioviz to only your use case.
