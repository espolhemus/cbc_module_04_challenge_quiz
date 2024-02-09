
var startButton = document.getElementById('startButton');
var timeRemainigEl = document.getElementById('timeRemaining');
var descriptionContainer = document.getElementById("quizDescriptionContainer")
var questionContainer = document.getElementById("questionContainer");
var possibleAnswersContainer = document.getElementById("possibleAnswersContainer");
var validationContainer = document.getElementById("validationContainer");
var timeLeft = 60;
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
      if (timeLeft > 1) {
        timeRemainigEl.textContent = 'Time: ' + timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timeRemainigEl.textContent = 'Time: ' + timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timeRemainigEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  function displayQuestion() {
    // remove class hide from questionContainer
    questionContainer.removeAttribute('class');
    //  get current question object from array
    var currentQuestion = questionArray[currentQuestionIndex];

    // var question = document.getElementById('questionContainer');
    questionContainer.textContent = currentQuestion.question;

    possibleAnswersContainer.removeAttribute('class');
    possibleAnswersContainer.innerHTML = '';

    for (var i = 0; i < currentQuestion.possibleAnswers.length; i++) {
        var button = document.createElement('button');
        button.textContent = currentQuestion.possibleAnswers[i]
        button.setAttribute('data-value', currentQuestion.correctAnswer)
        // console.log(button.textContent);
        // console.log(button.getAttribute('data-value'));
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

function validateAnswer(userAnswer, correctAnswer) {

    console.log(userAnswer);
    console.log(correctAnswer);

    if (userAnswer === correctAnswer) {
      var outcome = 'Correct!';
    //   questionContainer.appendChild(validationContainer)
    } else {
      var outcome = 'Incorrect';
    //   questionContainer.appendChild(validationContainer);
      timeLeft -= 15;
    }

    // questionContainer.appendChild(validationContainer)
    validationContainer.textContent = outcome;
    questionContainer.appendChild(validationContainer);
    
    // increment the currentQuestionIndex
    currentQuestionIndex++;

    // determine if there is time remaining and if there are more questions
    if (timeLeft > 0 && currentQuestionIndex < questionArray.length) {
      displayQuestion();
    } else {
      displayResults();
    }
}
    
function displayResults() {
        console.log(timeLeft);
        console.log(currentQuestionIndex);
    }

  function startQuiz() {
    descriptionContainer.setAttribute('class', 'hide');
    // questionContainer.removeAttribute('class');
    startTimer();
    displayQuestion();
  }

  document.getElementById("startButton").addEventListener("click", startQuiz);