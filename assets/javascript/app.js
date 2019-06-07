var myQuestions = [
    {
        question: "Who was Rachel going to marry but left at the altar?",
        options: { a: "Ross", b: "Joey", c: "Barry" },
        correctanswer: "c",
    },
    {
        question: "What is the name of Ross's son?",
        options: { a: "Oliver", b: "Noah", c: "Ben" },
        correctanswer: "c",
    },
    {
        question: "Which male friend has been married more than twice?",
        options: { a: "Ross", b: "Joey", c: "Chandler" },
        correctanswer: "a",
    },
    {
        question: "What was the name of the character Joey played on Days of Our Lives?",
        options: { a: "Dr. Peter Tucker", b: "Dr. Drake Ramoray", c: "Dr. Samuel Heller" },
        correctanswer: "b",
    },
    {
        question: "What was the name of the department store that Rachel worked for?",
        options: { a: "Macy's", b: "Bloomingdale's", c: "Target" },
        correctanswer: "b",
    },
    {
        question: "What is Monica's occupation?",
        options: { a: "Waiter", b: "Chef", c: "Singer" },
        correctanswer: "b",
    },
]

var wins = 0;
var losses = 0;
var secondsInTimer = 10;
var intervalId;

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    secondsInTimer = 10;
}


function win() {
    wins++;
    resetGame();
}

function lose() {
    losses++;
    resetGame();
}

function decrement() {
    secondsInTimer--;
    $("#time-left").html("<h2>" + secondsInTimer + "</h2>");

    stopGame();
}

function stopGame() {
    if (secondsInTimer <= 0) {
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#questions").empty();
        clearInterval(intervalId);
        $("#time-left").empty();

    }
}

userClickedOption =

    $(document).ready(function () {
        $("#start").on("click", function () {
            runTimer();
           
            for (let i = 0; i < myQuestions.length; i++) {
                const element = myQuestions[i];
                var divQuestion = $("<div>");
                divQuestion.text(" " + element.question);
                $("#questions").append(divQuestion);
                
                
                var divOptions = $("<div>");
                var optionName = "answer" + i;
                divOptions.html(
                    '<input type="radio" name="' + optionName + '" value="a"> ' + element.options.a + ' <br/>' +
                    '<input type="radio" name="' + optionName + '" value="b"> ' + element.options.b + ' <br/>' +
                    '<input type="radio" name="' + optionName + '" value="c"> ' + element.options.c + ' <br/>');
               
                $("#questions").append(divOptions);

            }
           
        });

        stopGame();
    });

//TODO: end game when timer is ===0 and show results

