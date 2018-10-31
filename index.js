
  var app = angular.module('chatApp', []);

  app.controller('MessageCtrl', function($scope) {
    $scope.messages = [{
      Name: 'Jon Snow',
      Message: "Why do you always read books?",
	  UserType:"Sender",
	  img:"Jon"
    },
	{
      Name: 'Tyrion Lannister',
      Message: "A mind needs books like a sword needs a whetstone.",
	  UserType:"Receiver",
	  img:"Tyrion"
    },
	{
      Name: 'Jon Snow',
      Message: "Brains over Brawns?",
      UserType:"Sender",
	  img:"Jon"
	  }];

  });
