//Checking Connection
console.log("We Connect G");


//Global Variables =======================================
var currentQuestion = 0;
var end = false;
var selection;
var int;

//Create Game Object ======================================
var game = {
	correctAnswers: 0,
	incorrect:   0,
	unanswered:  0,

	gameStructure: [{
		question: "Rap was becoming well known in the 90s. Which artist had the first number one rap single?",
		choices: ["Vanilla Ice", 
				"DJ Jazzy Jeff and the Fresh Prince", 
				"MC Hammer", 
				"Kriss Kross"
		],
		correct: "Vanilla Ice",
		image: "assets/images/vanilla.gif"
	}, {

		question: "Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, and Trini?",
		choices: ["All That",
				 "Saved By the Bell",
				 "The Mighty Morphin Power Rangers",
				 "Beverly Hills 90210",

		],
		correct: "The Mighty Morphin Power Rangers",
		image: "assets/images/power.gif"
	}, {

		question: "Which record company had huge success in the 90s with artists such as the Notorious BIG, Mase, and Total?",
		choices: ["Bad Boy",
				 "Murder Inc.",
				 "Motown",
				 "Death Row"
		],
		correct: "Bad Boy",
		image: "assets/images/big.gif" 
	}, {


		question: "Which NBA team did NOT win a championship in the 90s?",
		choices: [ "Los Angeles Lakers",
				 "Detroit Pistons",
				 "Houston Rockets",
				 "San Antonio Spurs"
		],
		correct: "Los Angeles Lakers",
		image: "assets/images/laker.gif"
	}, {

		question: "These two best friends came together to write the Oscar winning movie, 'Good Will Hunting'?",
		choices: [ "Ben Stiller and Owen Wilson",
				 "Demi Moore and Bruce Willis",
				 "Jim Carey and Will Smith",
				 "Ben Affleck and Matt Damon"

		],
		correct: "Ben Affleck and Matt Damon",
		image: "assets/images/apples.gif"
	}, {

		question: "Which phrase is a common catchphrase on South Park?",
		choices: [ "Oh no silly gooses!",
				 "Kick it and kick it good.",
				 "You are dead ducks boys!",
				 "Screw you guys...I'm going home."

		],
		correct: "Screw you guys...I'm going home.",
		image: "assets/images/south.gif"
	}, {

		question: "The 1990s was a golden age for modern Disney movies. Which Disney Movie did NOT debut in the 90s?",
		choices: ["Beauty and the Beast",
				 "Tarzan",
				 "The Lion King",
				 "The Little Mermaid"
		],
		correct: "The Little Mermaid",
		image: "assets/images/mermaid.gif"
	}, {

		question: "Which teen pop idol was NOT in the Mickey Mouse Club?",
		choices: ["Justin Timberlake",
				 "Britney Spears",
				 "Jessica Simpson",
				 "JC Chasez"
		],
		correct: "Jessica Simpson",
		image: "assets/images/jessica.gif"

	}]
};

//function time =====================================

gameStart();

function gameStart() {

	currentQuestion = 0;
	//On button click start
	$("#start").click(function(){

		//remove question button
		$("#start").remove();

		displayQuestion();
	});

}

function checkEnd(){

	//Limit questions to question array index
	if (currentQuestion === game.gameStructure.length){
		end = true;
		//clears current elements
		$(".countdown").empty();
		$(".question").empty();
		$(".choices").empty();
		$(".message").empty();
		//adds end screen to DOM
		$(".message").append("THE END")
		.append("<p> Correct Answers: " + game.correctAnswers + " Out of "+ game.gameStructure.length + "</p>")
		.append("<p> Unanswered Questions: " + game.unanswered + "</p>")
		.append("<button id='btnreset'>Game Reset</button>");
		gameReset();
		
		
	}

}

function displayQuestion(){
	checkEnd();
	if (end === false) {

			//run countdown function
			countDown(12);

			//select question from current question and add to DOM
			var question = game.gameStructure[currentQuestion].question;
			$(".question").append(question);
			
			//create choices as buttons
		    for (i = 0; i < game.gameStructure[i].choices.length; i++) {
		    	choice = game.gameStructure[currentQuestion].choices[i];

		    	var ul = $('.choices')
		    	var li = $('<li>')
		    		.addClass('liDom')
		    		.appendTo(ul);
		    	var button = $('<button>')
		    		.addClass('choiceforQuestion')
		    		.text(choice)
		    		.appendTo(li);	
		    }//Ends for loop
		    // Once elements are created run clickChoice click event
		    clickChoice();
	}//ends if statement
    
}


function clickChoice(){
	//set click counter
	var click = 0;
	//on click event for choices
	$(".choiceforQuestion").click(function(){
		click++
		//add user click selection to global variable
		selection = $(this).text()

		//check if a choice has been clicked and run function
		if(click>0){
			checkCorrect();
		}
	})
}


function checkCorrect(){
	//if this function is running then choice has been clicked stop timer
	clearInterval(int);


	//set correct answer variable
	var correctAns = game.gameStructure[currentQuestion].correct;
	var img = game.gameStructure[currentQuestion].image;

	console.log("CorrectAns Variable: " + correctAns);
	console.log("User Selection: " + selection);
	
	//clear question in DOM
	$(".question").empty();
	$(".choices").empty();

	//check if correct
	if (selection===correctAns){
		var timeoutID = setTimeout(myTimer, 2700);
		//add one to correct answerts
		game.correctAnswers++;
		console.log("Number of answers correct: " + game.correctAnswers);
		//add message to DOM
		$(".message").append("<p>YOU'RE CORRECT!</p>")
		.append("<p>Your answer is: " + correctAns + "</p>")
		.append("<img src="+img+ ">");

	}else if (selection==="timeUp") {
		var timeoutID = setTimeout(myTimer, 2700);
		$(".message").append("TIME IS UP!!!")
		.append("<p>The correct answer is: " + correctAns + "</p>")
		.append("<img src="+img+ ">");
		console.log(game.unanswered);

	}
	else{
		var timeoutID = setTimeout(myTimer, 2700);
		$(".message").append("YOU'RE WRONG!")
		.append("<p>The correct answer is: " + correctAns + "</p>")
		.append("<img src="+img+ ">");

		console.log("wrong!");
	}
		
		function myTimer(){
			$(".message").empty();
			
			displayQuestion();
		}

//increment current question counter
	currentQuestion++;
}

//set countdown for each question
function countDown(i) {
    int = setInterval(function() {

    	//add Time Left counter into DOM
        $(".countdown").html("<p>Time Left: " + i +"</p>");
        i-- ;

        		//if countdown reaches zero
		        if( i === -1){
		    	console.log("times up!");
		    	//change selection variable for correct statement
		    	selection="timeUp";
		    	game.unanswered++;
		    	checkCorrect();
		    	}
    }, 1000);

   

}

//Reset Game Function
function gameReset(){
	$("#btnreset").click(function(){
		currentQuestion = 0;
		end = false;
		game.correctAnswers = 0;
		game.incorrect =  0;
		game.unanswered = 0;
		$(".message").empty();
		$(".start").append("<button id='start'>Start</button>")
		gameStart();

	});
}


// $(document).ready(function (){


// }); //document ready end