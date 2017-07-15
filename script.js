
// main variables
var questions = ["Favorite Color?", "Favorite City?", "What state were you born in?", "Favorite season?", "Favorite Food"];
var answers = ["Blue", "Chicago", "Alaska", "Fall", "Pizza"];
var currentQuestion = 0;
var numCorrect = 0;
var numQuestions = questions.length;
var currentQuestion = 0;
var answerCorrect = false;
var numTries = 3;


// starts the quiz by displaying
// the answer text box, next button, and percentage correct
function startQuiz() {
	// display answer textbox and next button
	var hidden = document.getElementById("hide");
	hidden.setAttribute("id", "show");

	// display first question
	var firstQuestion = questions[0];
	document.getElementById("question").innerHTML = firstQuestion;

	// change start button to stop button
	document.getElementById("start").innerHTML = "Stop Quiz"
	document.getElementById("start").id = "stop"

	// start the record keeping (currently 0/0)
	updateRecord();

	// output first message prompt
	document.getElementById("message").innerHTML = "Submit your first answer!";

	// add listener for stopping the quiz
	document.getElementById("stop").addEventListener("click", stopQuiz);
}


// verify that the answer is alphabetical and does not contain white spaces
function validateAnswer(userAnswer) {

}


// proceed to the next question
function nextQuestion() {
	document.getElementById("answer-input").disabled = false;
	currentQuestion++;
	// reset variables
	answerCorrect = false;
	numTries = 3;

	// display next question
	var question = questions[currentQuestion];
	document.getElementById("question").innerHTML = question;

	// reset the form
	document.getElementById("answer-input").value = '';

	// update message area
	document.getElementById("message").innerHTML = "Submit your answer!";
}


// stop the quiz
// reset settings and output
function stopQuiz() {
	numCorrect = 0;

	// hide answer textbox and next button
	var shown = document.getElementById("show");
	shown.setAttribute("id", "hide");

	// change stop button to start button
	document.getElementById("stop").innerHTML = "Thank you for taking the quiz!";

}


// verify if the answer was correct
// display message
// if correct, disable submission
function checkAnswer() {
	// get new text input value
	if ( answerCorrect == false ) { // if they haven't answered this question yet

		if ( numTries >= 1 ) { // if they still have tries left
			// grab answer
			var userAnswer = document.getElementById("answer-input").value;

			// trim down the answer
			if (userAnswer) {
				userAnswer = userAnswer.trim().toLowerCase();
			}

			// check the correct answer
			if ( userAnswer == answers[currentQuestion].toLowerCase() ) {
				numCorrect++;
				document.getElementById("message").innerHTML = "You gave the correct answer.";
				document.getElementById("answer-input").disabled = true; // disable submit button so that can't re-submit
				answerCorrect = true;
			}
			else {
				numTries--;
				document.getElementById("message").innerHTML = "Incorrect Answer.  You have " + numTries + " tries remaining";
			}

			// output new message
			updateRecord();
		}	
		else { // no tries remaining
			document.getElementById("message").innerHTML = "You don't have any tries remaining!  Click next.";
		}
	}
	else { // if they already answered it
		document.getElementById("message").innerHTML = "You already answered this question.  Proceed to the next question";
	}
	
}


// update the record portion of the page
// which keeps track of the number of correct answers
function updateRecord() {
	var newRecord = numCorrect + " / " + numQuestions + " correct.  Percentage Correct: " + (numCorrect / numQuestions) + "%";
	document.getElementById("record").innerHTML = newRecord;
}


// main loop for quiz app - simply calls functions above
function main() {
	// start the quiz
	document.getElementById("start").addEventListener("click", startQuiz);
	
	// check the answer and output a message
	document.getElementById("submit-button").addEventListener("click", checkAnswer);

	// proceed to next question
	document.getElementById("next").addEventListener("click", nextQuestion);
}

// run main program
main();


