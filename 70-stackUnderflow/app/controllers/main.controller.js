(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);


  function MainController($scope, MainService) {
    $scope.name = ""

    $scope.greetings = []

    $scope.greet = function () {
      var msg = MainService.greet($scope.name)
      $scope.greetings.push(msg)
    }

    var question = {
      text: "What is an IFFE in JavaScript?",
      author: "Matt Overall",
      date: new Date(),
      tags: ["javascript", "functions", "encapsulation", "crazy javascript"],
      answers: [
        {
          text: "An IIFE is someting you create when you don't know much about JavaScript",
          author: "Jim Bob",
          date: new Date(),
          score: -5,
          accepted: false,
          comments: [
            {
              text: "That's not right sir...",
              author: "Jimmy Joe",
              flagged: false
            }
          ]
        },

        {
          text: "There are so many online resources, learn how to use Google",
          author: "Smart@ss",
          date: new Date(),
          score: 1,
          accepted: false,
          comments: [
            {
              text: "Dude, harsh!",
              author: "Jim Bob",
              flagged: false
            }
          ]
        },

        {
          text: "An Immediately Invoked Function Expression!",
          author: "Chim Chim",
          date: new Date(),
          score: -10,
          accepted: false,
          comments: [
            {
              text: "Great Answer!",
              author: "Jim Bob",
              flagged: false
            },
            {
              text: "Your amazing!",
              author: "Sammy",
              flagged: false
            },
            {
              text: "Uh, YOU'RE not your",
              author: "GrammerNazi",
              flagged: true
            }
          ]
        },

        {
          text: "See my blog post [here](http://www.google.com)!",
          author: "Mx Nice",
          date: new Date(),
          score: 1024,
          accepted: true,
          comments: [
            {
              text: "Good article, can you paste the gist here?",
              author: "Jimmy Joe",
              flagged: false
            },
            {
              text: "Sure thing, once I get an internet connection",
              author: "Mx Nice",
              flagged: false
            }
          ]
        }

      ]// end answers
    }
    
    var questionText = question.text;
    var questionAnswerCount = question.answers.length;
    var question2ndAnswerScore = question.answers[1].score;
    var question2ndAnswer1stCommentFlagged = question.answers[1].comments[0].flagged;
    
    //questions.answers.find(function (x) { return x.accepted}) != null
    //questions.answers.find(x => x.accepted) != null
    var hasAnAcceptedAnswer = false;
    for(var i = 0; i < question.answers.length; i++) {
      if (question.answers[i].accepted) {
        hasAnAcceptedAnswer = true;
        break;
      }
    }
  }
})();