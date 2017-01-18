var app = angular.module("spt", []);
app.controller('sptCtrl', function($scope,$http) {
  $scope.form = {
    'About':'default',
    'info':'default',
    'name':'default',
    'surname':'default',
    'email':'default',
    'iin':'default',
    'info_SPT':'default',
    'city':'default',
    'shool':'default',
    'subject':'default',
    'test_language':'default'
  }
  $scope.form_rus={

  }
  // console.log($scope.f)
  $scope.save = function(name,surname,email,iin,city,school,selectedSub,selectedLan){
    console.log(name,surname,email,iin,city,school,selectedSub,selectedLan)
}

});
