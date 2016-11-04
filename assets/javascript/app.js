console.log("We Connect G");

var currentQuestion = 0;
var selection;
var int;

//Create Game Object
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
		correct: "Vanilla Ice"
	}, {

		question: "Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, and Trini?",
		choices: ["All That",
				 "Saved By the Bell",
				 "The Mighty Morphin Power Rangers",
				 "Beverly Hills 90210",

		],
		correct: "The Mighty Morphin Power Rangers" 
	}, {

		question: "Which record company had huge success in the 90s with artists such as the Notorious BIG, Mase, and Total?",
		choices: ["Bad Boy",
				 "Murder Inc.",
				 "Motown",
				 "Death Row"
		],
		correct: "Bad Boy" 
	}, {


		question: "Which NBA team did NOT win a championship in the 90s?",
		choices: [ "Los Angeles Lakers",
				 "Detroit Pistons",
				 "Houston Rockets",
				 "San Antonio Spurs"
		],
		correct: "Los Angeles Lakers" 
	}, {

		question: "These two best friends came together to write the Oscar winning movie, 'Good Will Hunting'?",
		choices: [ "Ben Stiller and Owen Wilson",
				 "Demi Moore and Bruce Willis",
				 "Jim Carey and Will Smith",
				 "Ben Affleck and Matt Damon"

		],
		correct: "Ben Affleck and Matt Damon" 
	}, {

		question: "Which phrase is a common catchphrase on South Park?",
		choices: [ "Oh no silly gooses!",
				 "Kick it and kick it good.",
				 "You are dead ducks boys!",
				 "Screw you guys...I'm going home."

		],
		correct: "Screw you guys...I'm going home." 
	}, {

		question: "The 1990s was a golden age for modern Disney movies. Which Disney Movie did NOT debut in the 90s?",
		choices: ["Beauty and the Beast",
				 "Tarzan",
				 "The Lion King",
				 "The Little Mermaid"
		],
		correct: "The Little Mermaid" 
	}, {

		question: "Which teen pop idol was NOT in the Mickey Mouse Club?",
		choices: ["Justin Timberlake",
				 "Britney Spears",
				 "Jessica Simpson",
				 "JC Chasez"
		],
		correct: "Jessica Simpson"


	}]
};

gameStart();

function gameStart() {
	$("#start").click(function(){

	//remove question button
	$("#start").remove();

		displayQuestion();
	})

}

function checkEnd(){
	if (currentQuestion === game.gameStructure.length){
		$(".message").empty();
		$(".message").append("THE END")
		.append("<p> Correct Answers: " + game.correctAnswers + " Out of "+ game.gameStructure.length + "</p>")
		.append("<p> Unanswered Questions: " + game.unanswered + "</p>");
		currentQuestion = 0;
	}

}

function displayQuestion(){
	checkEnd();
	countDown(20);
	//create question
	var question = game.gameStructure[currentQuestion].question;
	$(".question").append(question);
	//create choices as buttons
    for (i = 0; i < game.gameStructure[0].choices.length; i++) {
    	choice = game.gameStructure[currentQuestion].choices[i];

    	var ul = $('.choices')
    	var li = $('<li>')
    		.addClass('liDom')
    		.appendTo(ul);
    	var button = $('<button>')
    		.addClass('choiceforQuestion')
    		.text(choice)
    		.appendTo(li);	
    }
    //run clickChoice click event
    clickChoice();
    
}

function clickChoice(){
	var click = 0;
	$(".choiceforQuestion").click(function(){
		click++
		selection = $(this).text()
		console.log(selection);

		if(click>0){
			checkCorrect();
		}
	})
}


function checkCorrect(){
	clearInterval(int);
	//set correct variable
	var correctAns = game.gameStructure[currentQuestion].correct;

	console.log("CorrectAns Variable: " + correctAns);
	console.log("User Selection: " + selection);
	
	//clear question in DOM
	$(".question").empty();
	$(".choices").empty();

	//check if correct
	if (selection===correctAns){
		var timeoutID = setTimeout(myTimer, 3000);
		game.correctAnswers++;
		console.log("Number of answers correct: " + game.correctAnswers);
		$(".message").append("YOU'RE CORRECT!")
		.append("<p>Your answer is: " + correctAns + "</p>");

	}else if (selection==undefined) {
		var timeoutID = setTimeout(myTimer, 3000);
		$(".message").append("TIME IS UP!!!")
		.append("<p>The correct answer is: " + correctAns + "</p>")
		.append("<img>");
		game.unanswered++;

	}
	else{
		var timeoutID = setTimeout(myTimer, 3000);
		$(".message").append("YOU'RE WRONG!")
		.append("<p>The correct answer is: " + correctAns + "</p>")
		.append("<img>");

		console.log("wrong!");
	}
		
		function myTimer(){
			$(".message").empty();
			currentQuestion++;
			console.log("Current Question: " + currentQuestion);
			displayQuestion();

	}


}

function countDown(i) {
    int = setInterval(function() {
        $(".countdown").html("<p>Time Left: " + i +"</p>");
        i-- ;
         if( i===0){
    	console.log("times up!");
    	checkCorrect();
    }
    }, 1000);

   

}



// $(document).ready(function (){


// }); //document ready end