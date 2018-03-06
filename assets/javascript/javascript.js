$("#start").on("click", function () {
    game.start();
})

$(document).on("click","#end",function(){
    game.done();
})

var questions =[{
    question:"Who was the youngest NBA player to score 30,000 points?",
    answers:["Lebron James","Michael Jordan","Kobe Bryant"],
    correctAnswer:"Kobe Bryant"
}, {
    question:"Which European was the 2002 Rookie of the Year?",
    answers:["Paul Gasol","Steve Rancis", "Emeka Okafor"],
    correctAnswer:"Paul Gasol"
 }, {
    question: "What College did 2012 #1 pick Anython Davis go to?",
    answers: ["Duke","Kentcuky","Virgina"],
    correctAnswer: "Kentucky"
}, {
    question: "How many games are in a NBA regular seaso?",
    answers: ["72","82","90"],
    correctAnswer: "82"
},
{
    question: "Everyone knows about Dr. J, but do you know his real name?",
    answers: ["James Russel","Julius Erving", "Jordan Docman"],
    correctAnswer: "Julius Erving"
}, 
{
    question: "How many times was Julius Erving an all Star MVP?",
    answers: ["2","6","0"],
    correctAnswer: "2"
},
{
    question: "What is Wilt Chamberlain's record for most points in a game?",
    answers: ["80","95","100"],
    correctAnswer: "100"
},
{
    question: "What was the orginal name of the NBA?",
    answers: ["Always been NBA","WBA(World of Basketball Asscoiatio)", "BAA(Basektball Association of America)"],
    correctAnswer: "BAA"
},
{
    question: "This player is widely considered the greatest defender of all-time, but his rebounding numbers was what catches an eye. He set a record for most rebounds in a half, averaged 22.5 boards in 936 games, and set a career playoff record for most rebounds.",
    answers: ["Wilt Chamberlain", "John Stockton", "Bill Russell"],
    correctAnswer: "Bill Russell"
},
{
    question: "Dennis Rodman concluded his career in 2000 with how many championship rings?",
    answers: ["6","5","3"],
    correctAnswer: "5"
}];

var game ={
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("time is up!");
            game.done();
        }
        
    },
    start: function () {
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="Counter">120</span> Seconds</h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $("#subwrapper").append("<br><button id='end'>DONE</button>");
    },
    done: function () {
        $.each($('input[name="question-0"]:checked'),function(){
            if ($(this).val()==questions[0].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9"]:checked'), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++;
            }
        });

    this.result();
    },
    result: function(){
        clearInterval(timer);
        $("#subwarpper h2").remove();

        $("#subwrapper").html("<h2>Thats the Game!</h2>");
        $("#subwarpper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subwarpper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}