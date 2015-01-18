var happened=false;

function runprogram(arg){
	if (happened !==true)
		{  arg();   
		}
	else if (happened === true)
		{ console.log ("you can't do that twice");
		};
	};
 
function doOnce()
		{
		happened = true;
		console.log("you found true love");
 		};
				
runprogram(doOnce );
runprogram(doOnce );
runprogram(doOnce ); 
runprogram(doOnce ); 



 