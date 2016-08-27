app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Hello AngularJS!'; 
  $scope.promo = "Let's explore";
  $scope.products = [ 
  { 
	name: 'The Book of Trees', 
	price: 19, 
	pubdate: new Date('2014', '03', '08'), 
	cover: 'img/the-book-of-trees.jpg' 
  }, 
  { 
	name: 'Program or be Programmed', 
	price: 8, 
	pubdate: new Date('2013', '08', '01'), 
	cover: 'img/program-or-be-programmed.jpg' 
  }, 
  { 
	name: 'As a Man Thinketh', 
	price: 5.4, 
	pubdate: new Date('2013', '08', '01'), 
	cover: 'http://awesomeaj.com/wp-content/uploads/2014/05/as-a-man-thinketh-cover.png' 
  }, 
  { 
	name: 'Fifty Shades of Grey', 
	price: 6.5, 
	pubdate: new Date('2011', '08', '01'), 
	cover: 'https://upload.wikimedia.org/wikipedia/en/5/5e/50ShadesofGreyCoverArt.jpg' 
  }  
];
}]);
