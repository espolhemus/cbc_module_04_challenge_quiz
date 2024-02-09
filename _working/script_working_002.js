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

  // Timer that counts down from timeLeft variable
function countdownTimer() {
    // var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the number of seconds remaining
        timeRemainigEl.textContent = 'Time: ' + timeLeft + ' seconds remaining';
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

// Function to begin the quiz
function startQuiz() {
    countdownTimer()
console.log("Inside startQuiz function")

  descriptionContainer.classList.add("hide");
  // Get the container element
  //const buttonContainer = document.getElementById('buttonContainer');
    // questionContainer

  // Define the values for the buttons
  // const buttonValues = ['Button 1', 'Button 2', 'Button 3'];
    // Don't need to define buttonValues, can use questionArray

  // Loop through the button values
  for (let i = 0; i < questionArray.length; i++) {
    // Create a button element
    console.log("Inside for loop")
    // const button = document.createElement('button');
    // var button
    let questionContainer = document.createElement("div");
    let questionDisplay = document.createElement("div");
    questionDisplay.innerHTML = questionArray[i].question;
    console.log(questionArray[i].question);
    questionContainer.appendChild(questionDisplay);
    quizContainer.appendChild(questionContainer);



    for (let j = 0; j < questionArray[i].possibleAnswers.length; j++) {
        let div = document.createElement("div");
        const button = document.createElement('button');
        // Set the button text
        button.textContent = questionArray[i].possibleAnswers[j];
    
    // // Set the button text
    // button.textContent = buttonValues[i];

    // Set the value attribute of the button
    button.setAttribute('data-value', questionArray[i].correctAnswer);

    // Add an event listener to the button
    button.addEventListener('click', function() {
      // Get the value from the data attribute
      const correctAnswer = this.getAttribute('data-value');
      const userAnswer = this.textContent;

      // Call the function and pass the value
      validateAnswer(userAnswer,correctAnswer);

    if (timeLeft > 0 && i < questionArray.length - 1 {
    
    } else {
      displayResults();
    });

    // Append the button to the container
    quizContainer.appendChild(button);
    quizContainer.appendChild(div);
    // quizContainer.appendChild(questionContainer);
  }}


}

function validateAnswer(userAnswer, correctAnswer) {
    console.log(userAnswer);
    console.log(correctAnswer)
  // Check if the user answer is correct
  if (userAnswer === correctAnswer) {
    // If the answer is correct, display a message
    console.log("Correct!");
    // displayMessage('Correct!');
  } else {
    // If the answer is wrong, display a message
    console.log("Wrong!");
    timeLeft = timeLeft - 10;
    // displayMessage('Wrong!');
    // Subtract 10 seconds from the timeLeft variable
    // if there is another question and timeLeft > 0, advance to next question
    // if there are no more questions or time is = 0, displayResults()
    
  }

  recordScore(timeLeft); 
}

// dialog that allows user to input initials and records score  

function recordScore(timeLeft){
  var userInitials = prompt("Please enter your initials:");
  // Retrieve existing array from localStorage
  var highScoreObject = JSON.parse(localStorage.getItem('highScoreJSON')) || [];
  // var highScoreArray = JSON.parse(highScoreJSON);

  // Check if the retrieved value is null or undefined
  // if (!highScoreArray) {
  //   highScoreArray = [];
  // }

  console.log(typeof highScoreObject);

  // if (Array.isArray(highScoreArray)) {
  //   console.log("Array is an array");
  // } else {
  //   console.log("Array is not an array");
  // }
  console.log(highScoreObject);
//   else {
//     highScoreArray = {
//       name: userName,
//       score: userScore
//   }
// };

let scoreObject = {
  name: userInitials,
  score: userScore
};
console.log(scoreObject);
  highScoreArray.push(scoreObject);

  // else check to see city name value already exists in array
  // if it does exist, delete if from the array and .push to array
  // else appent to array

  // for (var i = 0; i < highScoreArray.length; i++) {
  //   if (highScoreArray[i] >= userScore) {
  //     highScoreArray.splice(i, 1);
  //     i--;
  //   }
  // }



  // searchHistoryArray.unshift(cityName);
  // console.log(searchHistoryArray)

  // Save the updated array back to localStorage
  console.log(highScoreArray);
  localStorage.setItem('highScoreJSON', JSON.stringify(highScoreArray));

  // Call next function
 displayResults()
}

function displayResults() {
// Call highScoreArray
// Ability to Reset Scores
}

document.getElementById("startButton").addEventListener("click", startQuiz);


// fix issues with retrieving highScoreArray from localStorage
// fix issues with pushing new score to highScoreArray
// fix issues with displaying highScoreArray
// fix issues with resetting highScoreArray

// address issues with hiding and displaying elements
// address issues with question count

// work on formatting and styling
// display correct or incorrect message