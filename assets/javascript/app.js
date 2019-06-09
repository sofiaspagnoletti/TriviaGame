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
var secondsInTimer = 20;
var intervalId;

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    secondsInTimer = 20;
    wins = 0;
    losses = 0;
    $("#wins").empty();
    $("#losses").empty();
    $("#done").show();
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
        countPoints();
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#questions").empty();
        clearInterval(intervalId);
        $("#time-left").empty();
        $("#done").hide();
    }
}

function countPoints() {
    // For each question
    // Check if the selected answer matches the correct answer in my array
    //        If it does, count a win
    //        If it doesn't count a lose.
    for (let i = 0; i < myQuestions.length; i++) {
        const element = myQuestions[i];
        if ($('input[name="answer' + i + '"]:checked').val() === element.correctanswer) {
            wins++;
        } else {
            losses++;
        }
    }
}

function doneButton() {
    $("#done").on("click", function () {
        countPoints();
        $("#wins").text("Correct answers: " + wins);
        $("#losses").text("Incorrect answers: " + losses);
        $("#questions").empty();
        clearInterval(intervalId);
        $("#time-left").empty();
        $("#done").hide();
    });
}


$(document).ready(function () {
    $("#done").hide();
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

    doneButton();
    stopGame();

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://pragmaticcomputing.files.wordpress.com/2017/04/friends_theme_song.mp3');
    
    $("#stop-song").hide();

    audioElement.addEventListener('ended', function () {
        this.play();
    }, false);

    $('#play-song').click(function () {
        audioElement.play();
        $("#play-song").hide();
        $("#stop-song").show();
        $("#status").text("Status: Playing");
    });

    $('#stop-song').click(function () {
        audioElement.pause();
        $("#stop-song").hide();
        $("#play-song").show();
        $("#status").text("Status: Paused");
    });

});

//TODO: Add to portfolio. 
