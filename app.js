/**
 * Created by andy on 05/01/15.
 */
angular.module('flapperNews', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        })
        .state('post', {
          url: '/post/{id}',
          templateUrl: '/post.html',
          controller: 'PostCtrl'
        });

      $urlRouterProvider.otherwise('home');
    }
  ])
  .factory('posts', [function() {
    var o = {
      posts: []
    }
    return o;
  }])
  .controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if ($scope.title === undefined || $scope.title === '') return;
      $scope.posts.push({
        title: $scope.title,
        content: $scope.content,
        upvotes: 0,
        comments: []
      });
      $scope.title = '';
      $scope.content = '';
    }

    $scope.incrementUpvote = function(post) {
      post.upvotes++;
    }
  }])
  .controller('PostCtrl', ['$scope', '$stateParams','posts', function($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];

    $scope.addComment = function() {
      if($scope.comment === undefined || $scope.comment === '') return;
      $scope.post.comments.push({
        author: $scope.author,
        content: $scope.comment,
        upvotes: 0
      });
      $scope.comment = '';
      $scope.author = '';
    }

    $scope.incrementUpvote = function(comment) {
      comment.upvotes++;
    }
  }]);