//VARIABLES AND FUNCTIONS

var siteStructure1 = new String ("<div class=simpleBox>	<div class = testBox><div class= delete>D</div></div>"  );
var siteStructure2 = new String ("</div>")
var siteStructure3 = new String ('<li>Enter Site Information</li> ')
var siteStructure4 = new String
("<li>Enter name:<input type=\"text\" name=\"inputform\"  id=\"0\" size=\"15\" ></li> <li>Enter URL:<input type=\"text\" id=\"1\" name=\"inputform\"   size=\"15\" ></li> ")



//draw the entire array that is defined 
function drawArray(){
	$(".simpleBox2").detach();   //if it exists wipe it out
	
	//display the filled out entries
  	for (i=0; i < allSites.length; i++)
		{
		$(".containerBox").append(siteStructure1  + siteStructure4 + allSites[i].sitename + "</br>" + allSites[i].url + siteStructure2  );
  		}	//close for loop
	}; //close drawArray

// take user entered data and create new object in array.
function addSite(){
	aSite.sitename = document.getElementById('0').value; 
	aSite.url =  document.getElementById('1').value; 
	allSites.push(aSite);
};

//DATA MODEL -- MANAGE THE ARRAY OF SITES HERE

///////////////////////////////////////////////////////////////////////////////
//1 DATA MODEL INITIALIZATION

//Construct and create the array (with no object elements)
var allSites=[];

//construct the aSite object
function aSite(sitename, url, rank, notes, html){
	this.sitename = sitename;
	this.url = url;
	this.notes = notes;
	this.html = html;
};

//Add one empty site to the array.
allSites.push(aSite);  
//if the array is empty it will have one empty aSite... 
//if it is passed in containing some aSite elements 
// then the final element will be an empty aSite object

	
///////////////////////////////////////////////////////////////////////////////
//2 DATA MODEL EDITING

		//open a form
			//user refreshes page

		//enter data
			//user enters data in form

		//click enter button
			//click green button to add a newSite Object to the array
		$(".submit").click(function(){     
   			$(".submit").fadeOut(300).fadeIn(200);    
 				console.log("clicked");
 				addSite();	
 				console.log ("allsites length is " +allSites.length);
				drawArray();
 			});
 
		//close form and create site object
		//add site object to the array.

		//delete a site

		$(".delete").click(function(){     
   			$(".delete").fadeOut(300).fadeIn(200);    
 				console.log("clicked delete");
		});

		function deleteSite(){

		};

		$(".simpleBox").click(function(){     
   			$(".simpleBox").fadeOut(300).fadeIn(200);    
 				console.log("clicked simpleBox");
		});

		$(".testBox").click(function(){     
   			$(".testBox").fadeOut(300).fadeIn(200);    
 				console.log("clicked textBox");
		});


///////////////////////////////////////////////////////////////////////////////
//DISPLAY MODEL

//display the entire array with each site object
drawArray();

	//display some data values (name, url, etc.) from aSite in each site object
	//use the html in the aSite object
	//display the array number
	//always include an "empty" site object for adding next aSite

//press a button to display form to add site
//press a button to modify data for a site
//press a button to delete a site

 
//