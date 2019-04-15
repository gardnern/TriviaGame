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
        var timerTime = 30;
var timerInterveral = setInterval(function(){
    if(timerTime === 0){
        //User did not submit in time, we should submit for them
        //we need to clear out interval and reset our timer
        clearInterval(timerInterveral);
        timerTime = 31;
    }

    timerTime--;
    updateTimer();

    
}, 1000);
function updateTimer(){
$('#seconds').text(timerTime);
}
      }
});

//We have a submit button
//We need to reference it using JQuery
var correctAnswer = ["Corgi", "ChowChow","true","Great-Dane","Beethoven","Beagle"]
$('#submitButton').click(function () {
    var q1Selected = $('input[name="q1"]:checked').val();
    var q2Selected = $('input[name="q2"]:checked').val();
    var q3Selected = $('input[name="q3"]:checked').val();
    var q4Selected = $('input[name="q4"]:checked').val();
    var q5Selected = $('input[name="q5"]:checked').val();
    var q6Selected = $('input[name="q5"]:checked').val();
    console.log(q1Selected);
    console.log(q2Selected);
    console.log(q3Selected);
    console.log(q4Selected);
    console.log(q5Selected);
    console.log(q6Selected);
});





// if(correctAnswer.toString() === )


// var game = {
// // Game counters
// correctCounter = 0,
// wrongCounter = 0,
// unansweredCounter = 0
// }