app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Hello AngularJS!'; 
  $scope.promo = "Let's explore";
  $scope.product = {
	  name: 'The Book of Trees',
	  price: 19,
	  pubdate: new Date('2014', '03', '08')
  };
}]);
