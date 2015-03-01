# Fast Image Prototyper
## Versionnumber 0.1.1 (2015-02-25) Alpha
Mini Application to create a quick Paper-App-Demo. 

## Features
* Display Demo App

## Known Bugs
* Swipe events problematic on blackberry

## Roadmap / Future 
* Error Handling
    * when page not found
    * Catch all
* refactoring / Code separation
* create App Editor
    * Moblie Phone Editor
* Landscape / Portrait mode
    * Multi - touch events
    * Popup - Alert Message
* Mobile / Desktop support (click-events)
* Image preload
* Action-Hotspot sizing/positioning optimization (add Bottom and Right)



## System Requirement & Prerequisits
HTML5 capable browser

## Usage
* create images, for Demo
* create Json, with workflow
* attach `#live` onto the url to hide the Action-Hotspots

### SourceControl Link & Information
https://github.com/akumagamo/image_prototype.git

## Documentation

### File / Folder Structure 
    +-+- image_prototype
      +-+- img (destination for Demo Images)
      | +- ...
      +-+- scripts (Javascript folder)
      | +- JSXTransformer.js (only for development)
      | +- react.min.js
      +- LICENSE  (TBD)
      +- readme.md (this document)
      +- index.html

### App-Json Description
      { name:"first-app", /* Name of the App*/
        size:{width:600, height:800}, /* size of the App that should be displayed not in use at present */
        workflow:{ /* App-Flow-Object*/
	     startPageIdx:0, /* Index of the Page to start on */
	     pages:[{        /* Pages Collection with pages for App-Flow */
	            name:"Start Page", /* page name */
	            image:"img/page_one.png", /* Image to Display */
	            actionPoints:[{   /* Action-Hotspots List for the page */
	                position:{top:0,left:0},  /* Top left corner for Action-Hotspot*/
	                size:{width:600,height:800}, /* size of the Action-Hotspot*/
	                newPageIdxs:[-1,2,-1,-1,-1] /* Action to Next Page Mapping in order click, swipe: up, right, down, left */
				},
				...
			]},
		     ...
		    ]
		}
	}
		
	  
### External Libs
* react.js (http://facebook.github.io/react/)
