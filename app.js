var app = angular.module('libraryApp', ['ngRoute']);

////////////
// ROUTES //
////////////

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/index.html',
      controller: 'BooksIndexCtrl'
    })

    .when('/books/:id', {
      templateUrl: 'templates/books/show.html',
      controller: 'BooksShowCtrl'
    });

    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

/////////////////
// CONTROLLERS //
/////////////////


app.controller('BooksShowCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.books = allBooks;
  var bookId = $routeParams.id;
      var foundBooks = $filter('filter')(allBooks, { _id: bookId }, true);
    if (foundBooks.length > 0) {
      $scope.book = foundBooks[0];
    } else {
      $location.path('/');
    }
}]);