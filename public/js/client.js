/*global angular*/
var app = angular.module("digitalfei", []); 
app.controller("indexCtrl", function($scope) {
    $scope.basicpages = 0;
    $scope.formpages = 0;
    $scope.custompages = 0;
    $scope.plan = 0;
    $scope.basicshow = false;
    $scope.submissionshow = false;
    $scope.specialshow = false;
    $scope.switchplan = function(number){
        $scope.plan = number;
        console.log($scope.plan + " " + number)
    }
});
