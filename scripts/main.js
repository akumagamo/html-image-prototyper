

/******************************************************************************/

var app ={
	name:"first-app",
	size:{width:600,height:800},
	orientation: "portrait", // landscape / portrait
	workflow:{
		startPageIdx:0,
		pages:[
			{
				name:"Start Page",
				image:"img/page_one.png",
				actionPoints:[
					{
						position:{top:0,left:0},
						size:{width:600,height:800},
						type:"touch",
						newPageIdx:1
					}
				]
			},
			{
				name:"Page Two",
				image:"img/page_two.png",
				actionPoints:[
					{
						position:{top:0,left:550},
						size:{width:50,height:50},
						type:"touch",
						newPageIdx:0
					},
					{
						position:{top:300,left:0},
						size:{width:600,height:100},
						type:"touch",
						newPageIdx:2
					}
				]
			},
			{
				name:"Page Three",
				image:"img/page_three.png",
				actionPoints:[
					{
						position:{top:0,left:550},
						size:{width:50,height:50},
						type:"touch",
						newPageIdx:0
					}
				]
			}
		]
	}
}