var app = angular.module("spt", []);
app.controller('sptCtrl', function($scope,$http) {
  $scope.save = function(){
  $scope.subjectArray = [];
  angular.forEach($scope.subject, function(subject){
    if (!!subject.selected) $scope.subjectArray.push(subject.name);
  })
  console.log($scope.subjectArray)
}

});
