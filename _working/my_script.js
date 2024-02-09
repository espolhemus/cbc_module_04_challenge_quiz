
var timeRemainigEl = document.getElementById('timeRemaining');
var startButton = document.getElementById('startButton');
let descriptionContainer = document.getElementById("quizDescriptionContainer")
let questionContainer = document.getElementById("questionContainer");
let displayContainer = document.getElementById("display-container");
let quizContainer = document.getElementById("container");
var timeLeft = 60;

// Array of question objects
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

// Timer that counts down from 5
function countdownTimer() {
    // var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the number of seconds remaining
        timeRemainigEl.textContent = 'Time: {' + timeLeft + '} seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timeRemainigEl.textContent = 'Time: ' + timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timeRemainigEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        // Call the 'displayResults()' function
        displayResults(timeLeft);
      }
    }, 1000);
  }

  function startQuiz() {
    countdownTimer()
    // descriptionContainer.classList.add("hide");
    // questionContainer.classList.remove("hide");

    descriptionContainer.innerHTML="This is a test"

    // Iterate through questionArray to display question

    // Check question against correct answer
      // If answer is correct, next question
      // If answer is incorrect, timeLeft -10, then next question
      // When end of array is reached, displayResults()


   
  
    const quizDisplay = (questionCount) => {
      let quizCards = document.querySelectorAll(".container-mid");
      //Hide other cards
      quizCards.forEach((card) => {
          card.classList.add("hide");
      });
      //display current question card
      quizCards[questionCount].classList.remove("hide");
  };
  //Quiz Creation
  // function quizCreator() {
      
      for (let i of questionArray) {
          //randomly sort options
          // i.options.sort(() => Math.random() - 0.5);
          //quiz card creation
          let div = document.createElement("div");
          div.classList.add("container-mid", "hide");
          //question number
          // countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
          //question
          let question_DIV = document.createElement("p");
          question_DIV.classList.add("question");
          question_DIV.innerHTML = i.question;
          div.appendChild(question_DIV);
          //options
          div.innerHTML += `
         <button class="option-div" onclick="checker(this)">${i.possibleAnswers[0]}</button>
         <button class="option-div" onclick="checker(this)">${i.possibleAnswers[1]}</button>
         <button class="option-div" onclick="checker(this)">${i.possibleAnswers[2]}</button>
         <button class="option-div" onclick="checker(this)">${i.possibleAnswers[3]}</button>
      `;
      //           div.innerHTML += `
      //        <button class="option-div">${i.possibleAnswers[0]}</button>
      //    <button class="option-div">${i.possibleAnswers[1]}</button>
      //     <button class="option-div">${i.possibleAnswers[2]}</button>
      //      <button class="option-div">${i.possibleAnswers[3]}</button>
      // `;
          quizContainer.appendChild(div);
      }
  }
  // Checker Function to check if option is correct or not
  function checker(userOption) {
    console.log(userOption)
      // let userSolution = userOption.innerText;
      // let question = i.question
      //     ;
      // let options = question.querySelectorAll(".option-div");
      // //if user clicked answer == correct option stored in object
      // if (userSolution === quizArray[questionCount].correct) {
      //     userOption.classList.add("correct");
      //     scoreCount++;
      // } else {
      //     userOption.classList.add("incorrect");
      //     //For marking the correct option
      //     options.forEach((element) => {
      //         if (element.innerText == quizArray[questionCount].correct) {
      //             element.classList.add("correct");
      //         }
      //     });
      }
  // }


function storeScore(userName, userScore){
    // Retrieve existing array from localStorage
    var userScoreArray = JSON.parse(localStorage.getItem('highScoreArray'));
  
    // Check if the retrieved value is null or undefined
    if (!highScoreArray) {
        highScoreArray = [];
    }
  
    // else check to see city name value already exists in array
    // if it does exist, delete if from the array and .push to array
    // else appent to array
  
    for (var i = 0; i < searchHistoryArray.length; i++) {
      if (searchHistoryArray[i] === cityName) {
        searchHistoryArray.splice(i, 1);
        i--}
      }

    searchHistoryArray.unshift(cityName);
    console.log(searchHistoryArray)
  
    // Save the updated array back to localStorage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArray));
  
    // Call next function
    getCoordinates(cityName)
  }

  function displayResults() {
  // Call highScoreArray
  // Ability to Reset Scores
  }
  
  // countdown()

  document.getElementById("startButton").addEventListener("click", startQuiz);

  // Begin Quiz
  // Start Timer
  // Display Question
    // Receive Response
    // Check Response