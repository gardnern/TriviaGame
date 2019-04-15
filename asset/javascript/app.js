$(window).on('load',function(){
  // Get the modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("start");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
btn.onclick = function() {
    modal.style.display = "none";
    span.onclick = function() {
        modal.style.display = "none";
      }
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
});



(function() {
    function buildTrivia() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      triviaContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = triviaContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const triviaContainer = document.getElementById("dogTrivia");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "Which dog breed is the favourite of The Queen of England?",
            answers: {
              a: "ChowChow",
              b: "Corgi",
              c: "Poodle"
            },
            correctAnswer: "b"
          },
          {
            question: "Which breed of dog has a black tongue?",
            answers: {
              a: "Beagle",
              b: "ChowChow",
              c: "chihuahua"
            },
            correctAnswer: "b"
          },
          {
            question: "Dogs have 3 eyelids, True or False?",
            answers: {
              a: "True",
              b: "False",
              c: "IDK",
            },
            correctAnswer: "a"
          },
          {
            question: "What breed is Scooby Doo?",
            answers: {
              a: "Border Collie",
              b: "Mastiff",
              c: "Great Dane",
            },
            correctAnswer: "c"
          },
          {
            question: "I am a Saint Bernard named after a composer. What is my name?",
            answers: {
              a: "Beethoven",
              b: "Elvis",
              c: "Beatles",
            },
            correctAnswer: "a"
          },
          {
            question: "What breed of dog is Snoopy?",
            answers: {
              a: "Beagle",
              b: "Mutt",
              c: "Pug",
            },
            correctAnswer: "a"
          },
          {
            question: "Dogs cannot see in colour, True or False?",
            answers: {
              a: "True",
              b: "False",
              c: "somewhat true",
            },
            correctAnswer: "b"
          },
          {
            question: "Which of the dog’s senses is most highly developed?",
            answers: {
              a: "common sense",
              b: "sight",
              c: "smell",
            },
            correctAnswer: "c"
          },
          {
            question: "What breed is Pluto?",
            answers: {
              a: "German Shepherd",
              b: "Blood Hound",
              c: "Pug",
            },
            correctAnswer: "b"
          },
          {
            question: "Who were the cartoon owners of Dino?",
            answers: {
              a: "The Simpsons",
              b: "Eric Cartman",
              c: "The Flintstones",
            },
            correctAnswer: "c"
          }
        ];
  
    // display quiz right away
    buildTrivia();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();

  var timerTime = 120;
  var timerInterveral = setInterval(function(){
      if(timerTime === 0){
          //User did not submit in time, we should submit for them
          setTimeout(function(){
            alert("Time is up! Click submit to see score");
          }, 1000);
          //we need to clear out interval and reset our timer
          clearInterval(timerInterveral);
          timerTime = 121;  
      }
      timerTime--;
      updateTimer();
  }, 1000);
  function updateTimer(){
  $('#seconds').text(timerTime);
  }