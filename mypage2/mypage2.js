//mypage1 js 

//create the array structure
var allSites=[];

//define the standard inner html of the site box
var siteStructure1 = new String ("<div class=simpleBox> <ul><li>"  );
var siteStructure2 = new String ("</li></ul> </div>");
//<div class = simpleBox><p>Site</p><ul><li>    </li><li>    </li><li>    </li><li>    </li></ul></div>	

var siteStructure3 = new String ("<div class=submitBox><div class=submitToObject> </div></div><div class=submitBox><div class=submitNot> </div></div>");

//create one instance of a newSite
var newSite = { sitename: "some site name", 
				url: "", 
				rank: "", 
				notes: "", 
				html: ""
				};

//a constructor function for an aSite object with five named elements
function aSite(sitename, url, rank, notes, html){
	this.sitename = sitename;
	this.url = url;
	this.notes = notes;
	this.html = html;
}

var tempSite = {};

//DATA MODEL  MANAGE THE ARRAY OF SITES HERE
//Create the array.
//Add a site to the array.
		//open a form
		//enter data
		//close form and create site object
		//add site object to the array.

//DISPLAY MODEL
//display the entire array with each site object
//press a button to display form to add site
//press a button to modify data for a site
//press a button to delete a site


//add the first site to allSites
allSites.push(aSite);   //begin by creating one site object in allSites[]

console.log("push newSite to allSite one time only");

//DEBUG debug - check WORKS
console.log("allSites[0] is "  +  allSites[0].sitename         + " || " + allSites[0].url  
							+ " || " + allSites[0].rank     + " || " +  allSites[0].notes   
							+ " || " + allSites[0].notes  	+ " || AND LENGTH IS " +  allSites.length);


	// allSites.push(newSite);   //begin by creating one site object in allSites[]

// console.log("allSites[1] is "  +  allSites[1].sitename         + " || " + allSites[1].url  
// 							+ " || " + allSites[1].rank     + " || " +  allSites[1].notes   
// 							+ " || " + allSites[1].notes  	+ " || AND LENGTH IS " +  allSites.length);

function drawArray(){
	$(".simpleBox").detach();

  	for (i=0; i < allSites.length; i++)
		{
		$(".containerBox").append(siteStructure1 + allSites[i].sitename + " " + i + " " + siteStructure2);
  		console.log(" iterating through " + i + " with allSites[i].name = " + allSites[i].sitename
  		 + " at length of " + allSites[i].length);
		}	//close for loop
	} //close drawArray

function readCurrentUserForm(){
	//Read the site information from the user input form   
 	newSite.sitename= document.getElementById('0').value; 
	newSite.url 	= document.getElementById('1').value; 
	newSite.rank 	= document.getElementById('2').value; 
	newSite.notes 	= document.getElementById('3').value; 
	newSite.notes 	= document.getElementById('4').value; 
	}

function addSite(){
	var tempSite = newSite.name;
	return tempSite;
};

//click purple button to add a newSite Object to the array
$(".submitToObject").click(function(){     //on clicking the submit circle
	    $(".submitToObject").fadeOut(300).fadeIn(200);     //animate the circle
 
	readCurrentUserForm();    

	addSite();

	allSites.push(tempSite);   //push the new user site data on to the stack
 
	drawArray();
});   //close submit circle
	

//click red subtract submitNot button
$(".submitNot").click(function(){     //on clicking the submit circle
	    $(".submitNot").fadeOut(500).fadeIn(200);     //animate the circle
		allSites.pop();   //delete final element
		drawArray();	
});


//a control box (a button) that toggles the display matrix 
$(".controlBox").click(function(){
//	$(".containerBox").hide("slow").show("slow");
    $(".containerBox").toggle(1000);
    $(".controlBox").fadeOut(800).fadeIn(200);
    //$(".message")
});
 
 




