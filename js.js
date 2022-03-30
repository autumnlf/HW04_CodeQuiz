//Hi, welcome to Autumn's Coffee would you like to try our Java Script?


// Setting up Variables 
var headerel = document.getElementById("header"); //header
var homepagel = document.getElementById("homepage"); //homepage
var startbuttonel = document.getElementById("start");   //start quiz button
var scorebuttonel = document.getElementById("HSpage");  //highscore page nav button
var timerel = document.getElementById("timer"); //timer
var quizel = document.getElementById("quiz");   //quiz page
var qnumberel = document.getElementById("Qnumber"); //question title/number
var questionel = document.getElementById("question");   //question
var choiceel1 = document.getElementById("choice1");   //answer choices
var choiceel2 = document.getElementById("choice2");   //answer choices
var choiceel3 = document.getElementById("choice3");   //answer choices
var choiceel4 = document.getElementById("choice4");   //answer choices
var donepageel = document.getElementById("donepage");   //done page
var donetitleel = document.getElementById("doneTitle"); //done title
var initialformel = document.getElementById("initialform"); //initials entry box
var footerel = document.getElementById("footer");   //footer
var scoretextel = document.getElementById("scoretext");
var score = 100; //score
var HSlistel = document.getElementById("HSlist"); //Highscores list
var HSentryel = document.createElement('li'); //create a new list item on higscores page
var tryAgainel = document.getElementById("tryAgain");

// Begin the Quiz
function beginQuiz(){
    homepagel.setAttribute("class", "hidden");
    quizel.setAttribute("class", "questionbox");
    timerel.setAttribute("class", "timer");
    headerel.innerHTML = "Time left: ";
    countdown;
}

startbuttonel.onclick = beginQuiz;


// Countdown Timer
var starttime = 120;
var time = setInterval(countdown, 1000);

function countdown(){
    timerel.innerHTML=starttime;
    starttime--;
    if (starttime < 1){
        clearInterval(time);
        timerel.setAttribute("class", "hidden");
        headerel.innerHTML = "Oh no, you ran out of time! Better luck next try.";
        footerel.setAttribute("class", "hidden");
        quizel.setAttribute("class", "hidden");
        donepageel.setAttribute("class", "done");
        score = 0;
        scoretextel.textContent += score;
    }
}


// Question 1
choiceel1.onclick = q2wrong;
choiceel2.onclick = q2right;
choiceel3.onclick = q2wrong;
choiceel4.onclick = q2wrong;


//Question 2
function q2wrong(){
    starttime = starttime - 10;
    score = score - 20;
    footerel.innerHTML = "Not quite.";

    qnumberel.innerHTML = "Q2";
    questionel.innerText = "In HTML how do you link Javascript?";

    choiceel1.innerHTML = "<js>";
    choiceel2.innerHTML = "<linkJS>";
    choiceel3.innerHTML = "<java>";
    choiceel4.innerHTML = "<script>";

    choiceel1.onclick = q3wrong;
    choiceel2.onclick = q3wrong;
    choiceel3.onclick = q3wrong;
    choiceel4.onclick = q3right;
}

function q2right(){
    footerel.innerHTML = "Nice one!";

    qnumberel.innerHTML = "Q2";
    questionel.innerHTML = "In HTML how do you link Javascript?";

    choiceel1.innerHTML = "<js>";
    choiceel2.innerHTML = "<linkJS>";
    choiceel3.innerHTML = "<java>";
    choiceel4.innerHTML = "<script>";

    choiceel1.onclick = q3wrong;
    choiceel2.onclick = q3wrong;
    choiceel3.onclick = q3wrong;
    choiceel4.onclick = q3right;
}

// Question 3
function q3wrong(){
    starttime = starttime - 10;
    score = score - 20;
    footerel.innerHTML = "Oof.";

    qnumberel.innerHTML = "Q3";
    questionel.innerHTML = "Java is a shortened term for Java Script";

    choiceel1.innerHTML = "True";
    choiceel2.innerHTML = "False";
    choiceel3.setAttribute("class", "hidden");
    choiceel4.setAttribute("class", "hidden");

    choiceel1.onclick = q4wrong;
    choiceel2.onclick = q4right;
    choiceel3.onclick = q4wrong;
    choiceel4.onclick = q4wrong;
}

function q3right(){
    footerel.innerHTML = "Oof.";

    qnumberel.innerHTML = "Q3";
    questionel.innerHTML = "Java is a shortened term for Java Script";

    choiceel1.innerHTML = "True";
    choiceel2.innerHTML = "False";
    choiceel3.setAttribute("class", "hidden");
    choiceel4.setAttribute("class", "hidden");

    choiceel1.onclick = q4wrong;
    choiceel2.onclick = q4right;
    choiceel3.onclick = q4wrong;
    choiceel4.onclick = q4wrong;
}

// Question 4
function q4wrong(){
    starttime = starttime - 10;
    score = score - 20;
    footerel.innerHTML = "That last one was rough.";

    qnumberel.innerHTML = "Q4";
    questionel.innerHTML = "How do you create a function?";

    choiceel3.setAttribute("class", "answerchoice");
    choiceel4.setAttribute("class", "answerchoice");
    choiceel1.innerHTML = "function.myFunc()";
    choiceel2.innerHTML = "function(myFunc)";
    choiceel3.innerHTML = "function=myFunc()";
    choiceel4.innerHTML = "function myFunc()";

    choiceel1.onclick = q5wrong;
    choiceel2.onclick = q5wrong;
    choiceel3.onclick = q5wrong;
    choiceel4.onclick = q5right;
}

function q4right(){
    footerel.innerHTML = "You're like really smart.";

    qnumberel.innerHTML = "Q4";
    questionel.innerHTML = "How do you create a function?";

    choiceel3.setAttribute("class", "answerchoice");
    choiceel4.setAttribute("class", "answerchoice");
    choiceel1.innerHTML = "function.myFunc()";
    choiceel2.innerHTML = "function(myFunc)";
    choiceel3.innerHTML = "function=myFunc()";
    choiceel4.innerHTML = "function myFunc()";

    choiceel1.onclick = q5wrong;
    choiceel2.onclick = q5wrong;
    choiceel3.onclick = q5wrong;
    choiceel4.onclick = q5right;
}


// Question 5
function q5wrong(){
    starttime = starttime - 10;
    score = score - 20;
    footerel.innerHTML = "Yeah, that was not it.";

    qnumberel.innerHTML = "Q5";
    questionel.innerHTML = "Which is the correct if statement for when x is equal to 3 or 7?";

    choiceel1.innerHTML = "if (x == 3 || x == 7)";
    choiceel2.innerHTML = "if (x == 3 or x == 7";
    choiceel3.innerHTML = "if (x = 3,7)";
    choiceel4.innerHTML = "if (x == 3) || (x == 7)";

    choiceel1.onclick = right;
    choiceel2.onclick = wrong;
    choiceel3.onclick = wrong;
    choiceel4.onclick = wrong;
}

function q5right(){
    footerel.innerHTML = "Wow, i'm impressed.";

    qnumberel.innerHTML = "Q5";
    questionel.innerHTML = "Which is the correct if statement for when x is equal to 3 or 7?";

    choiceel1.innerHTML = "if (x == 3 || x == 7)";
    choiceel2.innerHTML = "if (x == 3 or x == 7";
    choiceel3.innerHTML = "if (x = 3,7)";
    choiceel4.innerHTML = "if (x == 3) || (x == 7)";

    choiceel1.onclick = right;
    choiceel2.onclick = wrong;
    choiceel3.onclick = wrong;
    choiceel4.onclick = wrong;
}

//Display Done Page
function wrong(){
    score = score - 20;
    scoretextel.textContent += score;
    clearInterval(time);
    timerel.setAttribute("class", "hidden");
    headerel.setAttribute("class", "hidden");
    quizel.setAttribute("class", "hidden");
    donepageel.setAttribute("class", "done");
    footerel.innerHTML = "You didn't get that last question right. You can always give it another go, though.";
}

function right(){
    scoretextel.textContent += score;
    clearInterval(time);
    timerel.setAttribute("class", "hidden");
    headerel.setAttribute("class", "hidden");
    quizel.setAttribute("class", "hidden");
    donepageel.setAttribute("class", "done");
    footerel.innerHTML = "Look at you!";
}


function HSadd() {
    let initials = initialformel.value;
    console.log(initials);
    
    var highscores = JSON.parse(window.localStorage.getItem("HSlist")) || [];
    

    HSentryel.textContent = initials + " ***** " + score;

    window.localStorage.setItem("HSlist", JSON.stringify(highscores));
    console.log(HSentryel);
    // redirect to next page
    window.location.href = "highscores.html";
    
    HSlistel.appendChild(HSentryel);
}

tryAgainel.onclick(window.location.href = "./js.js");
