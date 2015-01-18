//mypage1 js 

//1  PAGE LOAD
//on page load blink the hide show message
$(".message").hide("slow").show("slow");

//a control box (a button) that toggles the display matrix 
$(".controlBox").click(function(){
//	$(".containerBox").hide("slow").show("slow");
    $(".containerBox").toggle(1000);
    $(".controlBox").fadeOut(800).fadeIn(200);
    //$(".message")
});
 
//2  ADD TEXT TO TEXT BLOB
//hit the green button and add to the data collector
$(".submit").click(function(){     //on clicking the submit circle
	    $(".submit").fadeOut(300).fadeIn(200);     //animate the circle

	    //then append the value to the datacollector
 		var input1 = document.getElementById("siteName").value;
 		var input2 = document.getElementById("siteURL").value;
 		//var input3 = document.getElementById("rank").checked;

	    console.log(input1);
	    console.log(input2);
//	    console.log(input3);
 
		$(".dataCollector").prepend( "</br> >>> " + input1 + 
			      " >>> " + input2  )
});


//3 
//define an array for the site objects
//hit the purple button to add data to the allSites array

//create the array structure
var allSites=[];

//create one instance of a newSite
var newSite = { sitename: "My Home Page", 
				url: "http://www.myhomepage.com", 
				rank: 1, 
				notes: "Blank", 
				html: "" 
				} 


//add the first site to allSites
allSites.push(newSite);   //begin by creating one site object in allSites[]


//debug - check WORKS
console.log("first element of allSites is " + allSites[0].url ) 
console.log( allSites.length)

//click purple button
$(".submitToObject").click(function(){     //on clicking the submit circle
	    $(".submitToObject").fadeOut(300).fadeIn(200);     //animate the circle


	console.log("allSites[0] url is... " + allSites[0].url );
	//console.log("allSites[1] url is... " + allSites[1].url );   //undefined

 
    	//Read the site information from the user input form   
		// newSite.sitename = document.getElementById("siteName2").value;
 	// 	newSite.url = document.getElementById("siteUrl2").value;
 	// 	newSite.rank = document.getElementById("siteRank2").value;
 	// 	newSite.notes = document.getElementById("siteNote2").value;
 	// 	newSite.html = "<div class= simpleBox>  </div>"  //and define the presentation html


 




 	function readNewSite(){
 		allSites[allSites.length]

 	};

 		var newSite = {
		sitename : document.getElementById("siteName2").value,
 		 url : document.getElementById("siteUrl2").value,
 		 rank : document.getElementById("siteRank2").value,
 		 notes : document.getElementById("siteNote2").value,
 		 html : "<div class= simpleBox>  </div>"
		};

 		 
//THIS IS SUPPOSED TO BE SAME AS ABOVE, BUT IT DOES NOT WORK.
	// 	  function newSite(sitename, url, rank, notes, html) {
 	// 	   	newSite.sitename = document.getElementById("siteName2").value;
 	// 		newSite.url = document.getElementById("siteUrl2").value;
 	// 		newSite.rank = document.getElementById("siteRank2").value;
 	// 		newSite.notes = document.getElementById("siteNote2").value;
 	// 		newSite.html = "<div class= simpleBox>  </div>" ;  
 	// 		}


	console.log("allSites[0] url is... " + allSites[0].url );   
	console.log("allSites[1] url is... " + allSites[1].url );

 	//Debug - display the values you read
 		console.log("New site object has these values.")
	    console.log(newSite.sitename);
	   	console.log(newSite.url);
	   	console.log(newSite.rank);
	    console.log(newSite.notes);
	   	console.log(newSite.html);
  
  		//console.log(newSite.toString);

	//Add the new site object to the array that contains all site objects.
	//for development purposes there is always one existing site object in the array to start
 
	allSites.push(newSite);

	console.log("allSites[0] url is... " + allSites[0].url );
	console.log("allSites[1] url is... " + allSites[1].url );
 });

//var allSites = [newSite]

//	   	console.log(allSites);

//create a single object

//   var site = {name:"NY Times", URL:"http://nytimes.com", rank: 1, note: "news"};

// var allSites = [

//     1: {name:"NY Times", URL:"http://nytimes.com", rank: 1, note: "news"};
//     2: {name:"Google", URL:"http://google.com", rank: 2, note: "search"};
//     3:  {name:"Think Progress", URL:"http://thinkprogress.com", rank: 1, note: "news"};
//     4:  {name:"Twitter", URL:"http://twitter.com", rank: 4, note: "social"};
// 			];


// var allSites =[];       //create an array called allSites

// var len = 5;  //why????
// for (var i=0;  i< len;  i++){
// 	allSites.push({
// 		name: "nytimes",
// 		url:  "http://www.nytimes.com",
// 		rank:  1, 
// 		notes:  "Insert Notes Here",
// 		html:  "<div class= simpleBox>  </div>"
//    	});
// }


$(".addSite").click(function(){     
console.log('clicked it');

//open the form, fill out site data, and click enter
//write site data to new site object in allSites  


//draw site box in Container box
$('.containerBox').append( allSites[0].html)   //find containerbox and insert html for this one site

})

//better way to do it would be to redraw the container box after each site is entered, because
//user will enter information that may alter sort order.    

// var arr = [];
// var len = oFullResponse.results.length;
// for (var i = 0; i < len; i++) {
//     arr.push({
//         key: oFullResponse.results[i].label,
//         sortable: true,
//         resizeable: true
//     });
// }




// create an array of site objects
//  
//	var allSites =  [ site[0], site[1], site[2], site[3] ];
    




//$(".dataCollector").append(" Information You Entered </br>");

//for (i = 0; i < 5; i++) {
//    text += "The number is " + i + "<br>";
//}
 

//  A user data object userData{} containing allSites array and userInfo object
//
//     1)   allSites[]   array of site objects
//				site{} object (name, url, rank, note, etc)
//     2)   userInfo{}  object (first name, last name, email, etc.)


// userData.allSites[i].url   ... for example to get url for index i
// or
// userData.userInfo.email ... to get email
//




