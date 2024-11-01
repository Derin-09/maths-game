var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.querySelector('.start').onclick = function() {
   if(playing==true) {
     location.reload();
     playing = true;
   } else{
      playing = true;
      score = 0;
document.querySelector('.scorevalue').innerHTML= `${score}`;
      document.querySelector('.time').style.display = "block";
      timeremaining = 60;
      document.querySelector('.timer').innerHTML = timeremaining;
      document.querySelector('.gameOver').style.display = "none";
document.querySelector('.start').innerHTML  = "Reset Game";

startCountdown();
generateQA();
   }
}
for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
   if (playing === true){
      if(this.innerHTML == correctAnswer){
           score++;
   document.querySelector('.scorevalue').innerHTML = `${score}`;
   document.querySelector('.wrong').style.display = "none";
   document.querySelector('.correct').style.display = "block";
   setTimeout(function(){
      document.querySelector('.correct').style.display = "none"
   }, 1000);
   generateQA();
      }
      else{
   document.querySelector('.correct').style.display = "none";
   document.querySelector('.wrong').style.display = "block";
   setTimeout(function(){
      document.querySelector('.wrong').style.display = "none";
   }, 1000);
      }
   }
}
}

function startCountdown() {
   action = setInterval(function(){
      timeremaining -=1;
      document.querySelector('.timer').innerHTML = timeremaining;
      if (timeremaining == 0){
        stopCountdown();
        document.querySelector('.gameOver').style.display = "block";
        document.querySelector('.gameOver').innerHTML = `<p>GAME OVER!</p><p> YOUR SCORE IS ${score}</p>`;
        document.querySelector('.time').style.display = "none";
        document.querySelector('.correct').style.display = "none";
        document.querySelector('.wrong').style.display = "none";
        playing = false;
        document.querySelector('.start').innerHTML = "Start Game"
      }
   }, 1000);
}
function stopCountdown(){
   clearInterval(action);
}
function generateQA (){
      var x = 1 + Math.round(9 * Math.random());
      var y = 1 + Math.round(9 * Math.random()); 
       correctAnswer = x * y;
   document.querySelector('.question').innerHTML = x + "x" + y;
      var correctPosition = 1 + Math.round(3 * Math.random());
      document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
      var answers = [correctAnswer];
      for (i = 1; i<5; i++){
         if(i !== correctPosition){
            var wrongAnswer;
           do{
            wrongAnswer = 1 + Math.round(9 * Math.random()) * 1 + Math.round(9 * Math.random());
           } while (answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
         }
      }
}