
var startButton = document.getElementById('startButton');
var timeRemainigEl = document.getElementById('timeRemaining');
var descriptionContainer = document.getElementById("quizDescriptionContainer")
var questionContainer = document.getElementById("questionContainer");
var possibleAnswersContainer = document.getElementById("possibleAnswersContainer");
var validationContainer = document.getElementById("validationContainer");
var highScoreContainer  = document.getElementById("highScoreContainer");
var timeLeft = 60;
var timeInterval = 1000;
var currentQuestionIndex = 0;


var questionArray = [
    {
      id: 0,
      question: "Commonly used data types DO NOT include:",
      possibleAnswers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
      correctAnswer: "3. Alerts",
    },
    {
      id: 1,
      question: "Which data type holds a single piece of text information?",
      possibleAnswers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
      correctAnswer: "1. Strings",
    },
    {
      id: 2,
      question: "Which loop repeats a block of code until a certain condition is met?",
      possibleAnswers: ["1. For Loop", "2. While Loop", "3. Do-While Loop", "4. All of the above"],
      correctAnswer: "4. All of the above",
    },
    {
    id: 3,
    question: "What is the correct way to access the second element of an array named 'numbers'?",
    possibleAnswers: ["1. numbers[1]", "2. numbers.get(1)", "3. numbers[2]", "4. numbers.second"],
    correctAnswer: "1. numbers[1]",
    },
    {
    id: 4,
    question: "What is an event listener used for?",
    possibleAnswers: ["1. To run code in response to user interactions", "2. To store data in a variable", "3. To define a function", "4. To loop through an array"],
    correctAnswer: "1. To run code in response to user interactions",
    }
  ];

  function startTimer() {
    var timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        timeRemainigEl.textContent = 'Time: ' + timeLeft + ' seconds remaining';
         timeLeft--;
      } else {
        timeRemainigEl.textContent = 'Time is up!';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  function displayQuestion() {
    // remove class hide from questionContainer
    questionContainer.removeAttribute('class');
    //  get current question object from array
    var currentQuestion = questionArray[currentQuestionIndex];
    // update the questionContainer with the current question
    questionContainer.textContent = currentQuestion.question;

    possibleAnswersContainer.removeAttribute('class');
    possibleAnswersContainer.innerHTML = '';

    for (var i = 0; i < currentQuestion.possibleAnswers.length; i++) {
        var button = document.createElement('button');
        button.textContent = currentQuestion.possibleAnswers[i]
        button.setAttribute('data-value', currentQuestion.correctAnswer)
        button.addEventListener('click', function() {
        // Get the value from the data attribute
            var correctAnswer = button.getAttribute('data-value');
            var userAnswer = this.textContent;
            validateAnswer(userAnswer,correctAnswer);
        });

      possibleAnswersContainer.appendChild(button);
      questionContainer.appendChild(possibleAnswersContainer);

    }
}

function checkTimer() {
    if (timeLeft <= 0) {
      timeRemainigEl.textContent = '';
      clearInterval(timeInterval);
      console.log('Time is up!');
      timeLeft = 0;
      recordResults(timeLeft);
    }
  }

function validateAnswer(userAnswer, correctAnswer) {

    if (userAnswer === correctAnswer) {
      var outcome = 'Correct!';
    } else {
      var outcome = 'Incorrect';
      timeLeft -= 15;
    }

    validationContainer.textContent = outcome;
    questionContainer.appendChild(validationContainer);
    
    // increment the currentQuestionIndex
    currentQuestionIndex++;

    // determine if there is time remaining and if there are more questions
    if (timeLeft > 0 && currentQuestionIndex < questionArray.length) {
      displayQuestion();
    } else {
      timeleft = 0;
      recordResults(timeLeft);
    }
}
    
function recordResults(timeLeft) {
  // prompt user for name or intials
  var userInitials = prompt("Please enter your name or initials:");

  // retrieve high scores from local storage or set to empty array
  var highScores = JSON.parse(localStorage.getItem('highScoreJSON')) || [];
  
  // create a new object to hold the user's name and score
  var newScore = {
          name: userInitials,
          score: timeLeft
    }
  
  // add the new score to the high scores array
  highScores.push(newScore);

  // store the high scores array in local storage
    localStorage.setItem('highScoreJSON', JSON.stringify(highScores));
  
  // display the high scores
  displayScores();
  }

function displayScores() {
  // set the class of the descriptionContainer and questionContainer to hide
  descriptionContainer.setAttribute('class', 'hide');
  questionContainer.setAttribute('class', 'hide');

  // remove class hide from highScoreContainer
  highScoreContainer.removeAttribute('class');

  // get the high scores from local storage
  var highScores = JSON.parse(localStorage.getItem('highScoreJSON')) || [];

  // loop through the high scores and display them
  for (var i = 0; i < highScores.length; i++) {
    var li = document.createElement('li');
    li.textContent = highScores[i].name + ' - ' + highScores[i].score;
    highScoreContainer.appendChild(li);
  }

};

function startQuiz() {
    descriptionContainer.setAttribute('class', 'hide');
    // questionContainer.removeAttribute('class');
    startTimer();
    displayQuestion();
  }

  document.getElementById("startButton").addEventListener("click", startQuiz);