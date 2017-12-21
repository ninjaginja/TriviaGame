window.onload = function() {

  // Create object of questions, answers, and wrong answer options

  var questions = [
    {
      question: "What is the only sea without any coasts?",
      guesses: ["Sargasso Sea", "Adriatic Sea", "Celebes Sea", "Mediterranean Sea"],
      correctAnswer: "Sargasso Sea",
      explanation: "The Sargasso Sea is a region in the middle of the North Atlantic Ocean. Surrounded by ocean currents, it is the only sea on Earth which has no coastline. It is bounded on the west by the Gulf Stream; on the north, by the North Atlantic Current; on the east, by the Canary Current; and on the south, by the North Atlantic Equatorial Current.",
    },

    {
      question: "What is the driest place on earth?",
      guesses: ["Kufra, Libya", "McMurdo, Antarctica", "Atacama Desert", "Sahara Desert"],
      correctAnswer: "McMurdo, Antarctica",
      explanation: "The driest place on Earth: the McMurdo Dry Valleys in Antactica. It hasn't rained there for more than 2 million years!",
    },

    {
      question: "What country has the most coastline?",
      guesses: ["United States", "Canada", "Russia", "China"],
      correctAnswer: "Canada",
      explanation: "If long walks on the beach are your thing, Canada's the place to be. The country's 243,000 km of coastline are the longest in the world. At a pace of about 20 km each day, the stroll would take 33 years. The shores of 52,455 islands are a big part of what makes the coastline so long.",
    },

    {
      question: "What is the highest waterfall in Europe?",
      guesses: ["Krimml", "Kjelfossen", "Rhine", "Triberg"],
      correctAnswer: "Krimml",
      explanation: "With their impressive waterfall drop of 380 meters, the Krimml Waterfalls are the fifth highest in the world and Europe's tallest waterfalls. They are one of the most visited tourist features in Austria.",
    },

    {
      question: "What mountain is closest to the moon?",
      guesses: ["Mt. Everest", "Mt. Chimborazo", "Nanga Parbat", "Mt. Pandim"],
      correctAnswer: "Mt. Chimborazo",
      explanation: "Although Mt. Everest has the highest altitude in terms of sea level on the planet, because of the equatorial bulge Mount Chimborazo (Ecuador) is the closest to the moon.",
    },
  ];

  // Create timer function, set to 7 seconds

  // When player clicks start button, begin game
  $("#play-button").on("click", function() {

    // For loop to display questions and answer options
    for (var i = 0; i < questions.length; i++) {

      // Start timer

      // Display question
      $("#question").html(questions[i].question);

      // Display guesses with for loop
      for (var j = 0; j < questions[i].guesses.length; j++) {
        var guessButton = $("<button>");
        guessButton.attr("class", "guess-box");
        guessButton.text(questions[i].guesses[j]);
        $("#guesses").append(guessButton);
      }



      return;

      // If statement to detect if player clicks on correct answer before time runs out, display alert to congratulate, wait a few seconds, go to next question

        // Else if player guesses incorrectly before time runs out, display "Sorry" alert, give correct answer, wait a fdwe seconds, and go to next question

        // Else time runs out, display alert, wait a few seconds, and go to next question


    };

  });

};
