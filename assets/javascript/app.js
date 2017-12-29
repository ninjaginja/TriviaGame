window.onload = function() {

  // Create object of questions, answers, and wrong answer options

  var questions = [
    {
      question: "What is the only sea without any coasts?",
      guesses: ["Sargasso Sea", "Adriatic Sea", "Celebes Sea", "Mediterranean Sea"],
      correctAnswer: "Sargasso Sea",
      explanation: "The <strong>Sargasso Sea</strong> is a region in the middle of the North Atlantic Ocean. Surrounded by ocean currents, it is the only sea on Earth which has no coastline. It is bounded on the west by the Gulf Stream; on the north, by the North Atlantic Current; on the east, by the Canary Current; and on the south, by the North Atlantic Equatorial Current.",
    },

    {
      question: "What is the driest place on earth?",
      guesses: ["Kufra, Libya", "McMurdo, Antarctica", "Atacama Desert", "Sahara Desert"],
      correctAnswer: "McMurdo, Antarctica",
      explanation: "The driest place on Earth: the <strong>McMurdo Dry Valleys in Antactica</strong>. It hasn't rained there for more than 2 million years!",
    },

    {
      question: "What country has the most coastline?",
      guesses: ["United States", "Canada", "Russia", "China"],
      correctAnswer: "Canada",
      explanation: "If long walks on the beach are your thing, <strong>Canada's</strong> the place to be. The country's 243,000 km of coastline are the longest in the world. At a pace of about 20 km each day, the stroll would take 33 years. The shores of 52,455 islands are a big part of what makes the coastline so long.",
    },

    {
      question: "What is the highest waterfall in Europe?",
      guesses: ["Krimml", "Kjelfossen", "Rhine", "Triberg"],
      correctAnswer: "Krimml",
      explanation: "With their impressive waterfall drop of 380 meters, the <strong>Krimml Waterfalls</strong> are the fifth highest in the world and Europe's tallest waterfalls. They are one of the most visited tourist features in Austria.",
    },

    {
      question: "What mountain is closest to the moon?",
      guesses: ["Mt. Everest", "Mt. Chimborazo", "Nanga Parbat", "Mt. Pandim"],
      correctAnswer: "Mt. Chimborazo",
      explanation: "Although Mt. Everest has the highest altitude in terms of sea level on the planet, because of the equatorial bulge <strong>Mount Chimborazo (Ecuador)</strong> is the closest to the moon.",
    },

    {
      question: "What is America's largest city by surface area?",
      guesses: ["Yukatat", "Buford", "New York", "Los Angeles"],
      correctAnswer: "Yukatat",
      explanation: "America's largest city (by landmass) is <strong>Yakutat</strong>, on a glacier-surrounded bay in southern Alaska. It may only have 660 residents, but it's six times as big as Rhode Island!",
    },

    {
      question: "What is the fastest flowing river in the world?",
      guesses: ["Mississippi", "Yangtze", "Amazon", "Congo"],
      correctAnswer: "Amazon",
      explanation: "The fastest flowing river in the world is the <strong>Amazon River</strong>. At the height of the wet season, the current can reach a speed of 7 km/hr.",
    },

    {
      question: "How many countries are there in Africa?",
      guesses: ["42", "63", "39", "54"],
      correctAnswer: "54",
      explanation: "Africa, the planet's second largest continent and the second most-populous continent (after Asia), consists of <strong>54</strong> individual countries, and Western Sahara, a member state of the African Union whose statehood is disputed by Morocco.",
    },
  ];

  // Keeps track of correct number of answers guessed by player
  var playerScore = 0;

  // Variable to cycle through questions
  var currentQuestion = 0;

  // Stopwatch object with reset, start, stop functions
  var timer = 7;
  var timeRemaining;

  $("#timer-box").html(timer + " seconds");

  //  The run function sets an interval
  //  that runs the countDown function once a second.
  function run() {
    timeRemaining = setInterval(countDown, 1000);
  }

  //  The decrement function.
  function countDown() {
    timer--;

    // Display on page
    $("#timer-box").html(timer + " seconds");

    //  Once timer hits zero...
    if (timer === 0) {

      //  ...run the stop function.
      stop();

      reset();

      //  Alert the user that time is up.
      // alert("Time's Up!");
      $("#results").html("<h3 class = 'wrong-answer'>TIME'S UP!</h3><br><p><strong>CORRECT ANSWER</strong></p><p>" + questions[currentQuestion].explanation + "</p>")
      currentQuestion++;
      nextQuestion();
    }
  }

    function stop() {

      //  Clear timeRemaining
      clearInterval(timeRemaining);
      timer = 7;
    }

    // Function to display question and guesses
    function displayQuestion() {
      // Display question
      $("#question").html(questions[currentQuestion].question);

      // Display guesses
      for (var i = 0; i < questions[currentQuestion].guesses.length; i++) {
        var guessButton = $("<button>");
        guessButton.attr("class", "guess-box");
        guessButton.attr("id", questions[currentQuestion].guesses[i]);
        guessButton.text(questions[currentQuestion].guesses[i]);
        $("#guesses").append(guessButton);
      }
    }

    // Function to reset timer and clear guesses from the div when moving onto next question
    function reset() {
      stop();
      $("#timer-box").html(timer + " seconds");
      $("#question").empty();
      $("#guesses").empty();
      $("#results").empty();
    }

    // Set timeout to advance to next question
    var delay;
    function nextQuestion() {
      if (currentQuestion < questions.length) {
        delay = setTimeout(function(){
          reset();
          run();
          displayQuestion();
          answerCheck();
        }, 7000);
      } else {
        delay = setTimeout(function(){
          answerCheck();
          currentQuestion = 0;
          $("#question").empty();
          $("#guesses").empty();
          $("#results").html("<h3>GAME OVER</h3><br><p>You got <strong>" + playerScore + "/" + questions.length + "</strong> correct.</p>" );
          $("#play-button").show();
          playerScore = 0;
        }, 7000);
        }
      console.log(currentQuestion);
    }

    // Function to check if guess matches correct answer
    function answerCheck() {

      $(".guess-box").on("click", function() {
        stop();

        var userGuess = $(this).attr("id");

        // If statement to detect if player clicks on correct answer, display congrats message in results div
        if (userGuess === questions[currentQuestion].correctAnswer) {
          $("#results").html("<h3 class = 'correct-answer'>RIGHT ON!</h3><br><p>" + questions[currentQuestion].explanation + "</p>");
          playerScore++;
          currentQuestion++;
          nextQuestion();
        }
        // Else if player guesses incorrectly, display congrats message in results div
        else if (userGuess != questions[currentQuestion].correctAnswer) {
          $("#results").html("<h3 class = 'wrong-answer'>NOPE, YOU'RE WRONG!</h3><br><p>" + questions[currentQuestion].explanation + "</p>");
          currentQuestion++;
          nextQuestion();
        }
      });
    }


  // Game function - start when player clicks play button
  $("#play-button").on("click", function() {

    // Disable play button
    $(this).hide();

    // Clear contents
    reset();

    // Start timer
    run();

    // Display question and guesses
    displayQuestion();

    // Check for correct answer
    answerCheck();

});


};
