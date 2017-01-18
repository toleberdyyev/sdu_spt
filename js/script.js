var app = angular.module("spt", []);
app.controller('sptCtrl', function($scope,$http) {
  $scope.form = {
    'type':'rus',
    'About':'default',
    'info':'default',
    'name':'default',
    'surname':'default',
    'oldname':'default',
    'email':'default',
    'iin':'default',
    'info_SPT':'default',
    'city':'default',
    'shool':'default',
    'subject':'default',
    'test_language':'default'
  }
  $scope.form_rus={
    'type':'rus',
    'About':'Регистрация на SPT',
    'info':'Информация участника',
    'name':'Имя',
    'surname':'Фамилия',
    'oldname':'Отчество',
    'email':'Почта',
    'iin':'ИИН',
    'info_SPT':'Требуемая информация для участи SPT',
    'city':'Город',
    'shool':'Школа',
    'subject':'Пятый предмет',
    'test_language':'Язык по выбору'
  }
  $scope.form_kaz={
    'type':'kaz',
    'About':'Регистрация на SPT',
    'info':'Информация участника',
    'name':'Аты',
    'surname':'Фамилия',
    'oldname':'Отчество',
    'email':'Почта',
    'iin':'ИИН',
    'info_SPT':'Требуемая информация для участи SPT',
    'city':'Город',
    'shool':'Школа',
    'subject':'Пятый предмет',
    'test_language':'Язык по выбору'
  }

  $scope.languageChoose = function(language){
    if(language=='rus'){
      $scope.form  = $scope.form_rus;
    }
    if(language=='kaz'){
      $scope.form = $scope.form_kaz;
    }
  }
  // console.log($scope.f)
  $scope.save = function(name,surname,email,iin,city,school,selectedSub,selectedLan){
    console.log(name,surname,email,iin,city,school,selectedSub,selectedLan)
}

});
