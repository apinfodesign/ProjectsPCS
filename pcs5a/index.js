var readline = require('readline');
 
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a FIRST number to add: ", function(answer) {
var first;
var second;
  // TODO: Log the answer in a database
  console.log("You entered: ", answer);
  first = 1* answer;
   
		rl.question("Enter a SECOND number to add: ", function(answer2) {
			  // TODO: Log the answer in a database
		console.log("You entered: ", answer2);
			  
		second = 1*answer2;
			//	out = parseInt(first)+parseInt(second);

		out = first + second;	
	
		console.log("The sum is: " + out);
		rl.close();
		});
});

