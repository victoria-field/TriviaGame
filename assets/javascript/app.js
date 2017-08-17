var game = {
	correct: "0",
	incorrect: "0",
	questions: [{
		id: 1,
		question: "What is not a house at Hogwarts?", 
		options: ['Stallion', 'Slitherin', 'Ravenclaw'],
		answer: ['Stallion'], 

		},{
		
		id: 2,
		question: 'What platform does the Hogwarts Express depart from?',
		options:  ['5', '7 1/2','9 3/4'],
		answer: '9 3/4', 
		
		},{

		id: 3,	
		question: 'Where is the opening to the Chamber of Secrets?', 
		options:  ['Hagrids Hut','Girls Bathroom','Hogsmead'], 
		answer: 'Girls Bathroom',
		
		},{

		id: 4,	
		question: 'Which name below is one of the ghosts at Hogwarts?', 
		options: ['Casper','Nearly Headless Nick','Brandon'],
		answer:  'Nearly Headless Nick',
		
		},{
		
		id: 5,
		question: 'Who gave Harry his 1st broom?', 
		options:  ['Professor McGonagall', 'Professor Snape', 'Ginny'], 
		answer:  'Professor McGonagall', 
		
		},{

		id: 6,
		question: 'What kind of pet does Hermione have?', 
		options: ['Owl','Cat','Rat'], 
		answer: 'Cat', 
		
		},{

		id: 7,	

		question: 'What is the last Horcrux?',
		options: ['Harry', 'The Watch', 'Ginny'],
		answer: 'Harry',
	
		}],

	intervalId: "",
	counter: 30,
	questionCounter: 7,


};



$(document).ready(function(){

	$("#start").on("click", run); {

		// $("input[name = questionArray[0]:checked");

		$("#qs").html(game.questions.question + game.questions.options);

		for(var i = 0; i < game.questions.length; i++){
			
			var answerSelected = on("click");
			
			if(answerSelected == game.questions.question.answer){
				game.correct ++

			} else(game.incorrect ++)
		};
		
    function run() {
     game.intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      game.counter--;

      $("#show-number").html("<h2>" + game.counter + "</h2>");


      //  Once number hits zero...
      if (game.counter === 0) {

        stop();
        alert("Time Up!");
      }
    }

    	

		// if () {

		// }

	};
var unanswered = game.questionCounter - (game.incorrect + game.correct);
	// function displayResults(){

	// }

	function resetGame() {
	game.questionCounter = 7;
	game.correct = 0;
	game.incorrect = 0;
	unanswered = 0;
	game.counter = 30;
	generateHTML();
	timerWrapper();
}

});