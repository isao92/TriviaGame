window.onload = function () {

    $("#start").on("click", stopwatch.start);

};

var intervalId;
var clockRunning = false;

//questions

var questionArray = ["How many fingers do I have?", "How many suns do we have?", "How many fries would she like?"];

//answers
var answers1 = ["1", "5", "10"];
var answers2 = ["2", "4", "8"];
var answers3 = ["3", "6", "9"];
var answers4 = ["All of the above", "None", "I don't know"]

//first ten seconds show first question

$("#question").text(questionArray[0]);
$("#option1").text(answers1[0]);
$("#option2").text("answers2[0]");
$("#option3").text("answers3[0]");
$("#option4").text("answers4[0]");

//show time remaining
var stopwatch = {

    time: 70,

    start: function () {

        //erase you get 10 seconds click to start message
        $("#start").text("");

        //variable to hold question number
        var qNumber = 0;
        var wrongAnswerBoolean = false;

        //create function nextQuestion
        function nextQuestion() {
            console.log(qNumber);
            //show question
            $("#question").text(questionArray[qNumber]);

            //show answers
            $("#option1").text(answers1[qNumber]);
            $("#option2").text(answers2[qNumber]);
            $("#option3").text(answers3[qNumber]);
            $("#option4").text(answers4[qNumber]);

            qNumber = qNumber + 1;
        }


        //call function nextQuestion for the first question
        nextQuestion();

        //erase wrong answer message and correct answer
        function eraseWrongAnswer() {
            $("#alert").text("");
        }

        function eraseCorrectMessage() {
            $("#correct").text("");
        }



        //show answers
        $("#option1").text(answers1[0]);
        $("#option2").text(answers2[0]);
        $("#option3").text(answers3[0]);
        $("#option4").text(answers4[0]);

        //if user clicks wrong answer go to function
        $("#option1").on("click", wrongAnswer);
        $("#option2").on("click", wrongAnswer);
        $("#option3").on("click", wrongAnswer);

        //if user clicks correct answer go to function
        $("#option4").on("click", rightAnswer);

        function rightAnswer() {

            //show message wrong answer
            $("#alert").append("Right Answer!");

            //hide wrong answers
            $("#option1").text("");
            $("#option2").text("");
            $("#option3").text("");


            //go to next question after 5 seconds and answers
            setTimeout(nextQuestion, 1000 * 5);

            //erase message this is the correct answer after 5 seconds
            setTimeout(eraseCorrectMessage, 1000 * 5);

            //erase wrong answer after 5 seconds
            setTimeout(eraseWrongAnswer, 1000 * 5);

            

            //set wrongAnswerBoolean to true and call tenSeconds to interrupt
            wrongAnswerBoolean = true;

            tenSeconds();
        }

        function wrongAnswer() {

            //show message wrong answer
            $("#alert").append("Wrong Answer!");

            //show correct answer
            $("#correct").append("This is the correct answer: ");

            //hide wrong answers
            $("#option1").text("");
            $("#option2").text("");
            $("#option3").text("");


            //go to next question after 5 seconds and answers
            setTimeout(nextQuestion, 1000 * 5);

            //erase message this is the correct answer after 5 seconds
            setTimeout(eraseCorrectMessage, 1000 * 5);

            //erase wrong answer after 5 seconds
            setTimeout(eraseWrongAnswer, 1000 * 5);


            //set wrongAnswerBoolean to true and call tenSeconds to interrupt
            wrongAnswerBoolean = true;

            tenSeconds();
        }

        //give ten seconds for the question if wrongAnswer is false


        setTimeout(tenSeconds, 1000 * 10);




        function tenSeconds() {
            //interrupt tenSeconds if wrongAnswerBoolean is true which should be if user answers both right or wrong
            if (wrongAnswerBoolean) {
                return -1;
            }

            //show message time's up
            $("#alert").append("This was 10 seconds! Time's Up!");

            //hide wrong answers
            $("#option1").text("");
            $("#option2").text("");
            $("#option3").text("");

            console.log("inside tenSeconds function");
            //show correct answer   
            $("#correct").text("This is the correct answer: ");

            //erase this was 10 seconds message after 5 sec
            setTimeout(eraseWrongAnswer, 1000 * 5);

            //show next question and answers after 5 seconds
            //go to next question after 5 seconds and answers
            setTimeout(nextQuestion, 1000 * 5);

            //erase message this is the correct answer after 5 seconds
            setTimeout(eraseCorrectMessage, 1000 * 5);

            //call ten second function after 15 seconds (5 to show new question 10 for answering)
            setTimeout(tenSeconds, 1000 * 15);
        }

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },


    count: function () {

        // DONE: increment time by 1, remember we cant use "this" here.
        stopwatch.time--;

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);
        // console.log(converted);

        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#time-remaining").text(converted);
    },
    timeConverter: function (t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
}










//   You'll create a trivia game that shows only one question until the player answers it or their time runs out.