/**
 * Created by andy on 05/01/15.
 */
angular.module('flapperNews', [])
 .controller('MainCtrl', ['$scope', function($scope) {
    $scope.posts = [
      {'title': 'post1', 'content': 'content1', 'upvotes': 3},
      {'title': 'post2', 'content': 'content2', 'upvotes': 2},
      {'title': 'post3', 'content': 'content3', 'upvotes': 1}
    ];

    $scope.addPost = function() {
      $scope.posts.push({'title': 'post', 'content': 'content', 'upvotes': 0});
    }
  }]);