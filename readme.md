# Fast Image Prototyper
## Versionnumber 0.1.1 (2015-02-25) Beta
(***Documentation last update 2015-10-31 12:30***)  

Mini Application to create a quick Paper-App-Demo. 

![prototyper search app demo screenshots](https://raw.githubusercontent.com/akumagamo/html-image-prototyper/master/readme/prototyper-search-demo.png "prototyper search app demo")   

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
HTML5 capable browser or Smart Device

## Usage
* create images, for Demo
* create Json, with workflow
* attach `#live` onto the url to hide the Action-Hotspots

### SourceControl Link & Information
https://github.com/akumagamo/image_prototype.git

### Base App - Code Example

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
	// Tested on Win7 with Chrome 46+ (in Device Mode)

See ```demo.html``` for an working example, here a link to a working Demo [Image Prototyper Demo](https://rawgit.com/akumagamo/html-image-prototyper/demo/index.html)  


## Documentation

### File / Folder Structure 
    +-+- image_prototyper
      +-+- img (destination for Demo Images)
      | +- ...
	  +-+- readme
	  | +- prototyper-search-demo.png
      +-+- scripts (Javascript folder)
      | +- JSXTransformer.js (only for development)
      | +- react.min.js
      +- LICENSE
      +- readme.md (this document)
      +- index.html

### App-Json Objects Properties
...
	  
### External Libs
* react.js (http://facebook.github.io/react/)
