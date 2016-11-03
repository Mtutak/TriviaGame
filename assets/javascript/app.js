console.log("We Connect G");

var game = {
	correct:     0,
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


function gameStart() {
	$("#start").click(function(){

	})

}

function displayQuestion(){
	//create question
	var question = game.gameStructure[0].question;
	$(".question").append(question);
	//create choices as buttons
    for (i = 0; i < game.gameStructure[0].choices.length; i++) {
    	choice = game.gameStructure[0].choices[i];
    	var choiceButtons = $('<li/><button/>', {"class": "choice"}).text(choice);
        $('.choices').append('<li><button value= + i + />' + choice + '</li>');
    }
}

// $(document).ready(function (){


// }); //document ready end