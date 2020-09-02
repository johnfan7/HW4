// variables to keep track of quiz state
var currentQuestionIndex = 0;
var shuffledQuestions;

var time = questions.length * 15;
var timerId;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endscreen = document.getElementById("end-screen")

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  document.getElementById("start-screen").classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  // un-hide questions section
  document.getElementById("questions").classList.remove('hide')
  // start timer

  var downloadTimer = setInterval(function(){

    timerEl.textContent = time

    if(time <= 0){
      clearInterval(downloadTimer);
    }
    timerEl.value = 10 - time;
    time -= 1;
    }, 1000);

  // show starting time

  getQuestion();
}

function getQuestion() {

  // get current question object from array
  showQuestions(shuffledQuestions[currentQuestionIndex])

  // update title with current question
  // clear out any old question choices
  // loop over choices
  // create new button for each choice
  // attach click event listener to each choice
  // display on the page
}

function showQuestions(question){
 
  questionsEl.innerText = question.title

  question.choices.forEach(choice => {
    var button = document.createElement("button")

    button.innerText = choice
    button.classList.add('button')

    if (question.choice === question.answer) {
      button.dataset.answer = question.answer
    }
    button.addEventListener('click', selectAnswer)
    questionsEl.appendChild(button)

  })
}


function selectAnswer (e) {

  console.log("hello")

  var selectedButton = e.target

  if (selectedButton.innerText !== questions[0].answer && selectedButton.innerText !== questions[1].answer
    &&selectedButton.innerText !== questions[2].answer&&selectedButton.innerText !== questions[3].answer
    &&selectedButton.innerText !== questions[4].answer){

    time = time - 10

    sfxWrong.play()



  } else { 
    sfxRight.play()
    if (currentQuestionIndex < questions.length) {
      currentQuestionIndex++
      getQuestion()
    }
    else {
      quizEnd()
    }
  }

  
}

function questionClick() {
  // check if user guessed wrong
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  // else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion
}

function quizEnd() {
  // stop timer
  clearTimeout(downloadTimer)
  // show end
  document.getElementById("questions").classList.add('hide')
  document.getElementById("end-screen").classList.remove('hide')
  // show final score
  // hide questions section
}

function clockTick() {
  // update time
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
