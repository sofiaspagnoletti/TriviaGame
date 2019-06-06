var myQuestions = [
    {
        question: "Who was Rachel going to marry but left at the altar?",
        options: { a: "Ross", b: "Joey", c: "Barry" },
        correctanswer: "c",
    },
    {
        question: "What is the name of Ross's son?",
        options: { a: "Oliver", b: "Noah", c: "Ben" },
        correctanswer: options.c,
    },
    {
        question: "Which male friend has been married more than twice?",
        options: { a: "Ross", b: "Joey", c: "Chandler" },
        correctanswer: "a",
    },
    {
        question: "What was the name of the character Joey played on Days of Our Lives?",
        options: ["Dr. Peter Tucker", "Dr. Drake Ramoray", "Dr. Samuel Heller"],
        correctanswer: 1,
    },
    {
        question: "What was the name of the department store that Rachel worked for?",
        options: ["Macy's", "Bloomingdale's", "Target"],
        correctanswer: 1,
    },
    {
        question: "What is Monica's occupation?",
        options: ["Waiter", "Chef", "Singer"],
        correctanswer: 1,
    },
]

var wins = 0;
var losses = 0;
var number = 40;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#time-left").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
    }
}

run();


function win() {
    wins++;
    resetGame();
}

function lose() {
    losses++;
    resetGame();
}


$(document).ready(function () {

    $("#start").on("click", function () {
        resetGame();
        $("#goal").text("Goal: " + goal);
    });

    $("options").on("click", function (userChoice) {
        for (let myQuestions = 0; myQuestions < array.length; myQuestions++) {
            if (userChoice === correctanswer) { win(); }
            else { lose() };
        };

    });
});
