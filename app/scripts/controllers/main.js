'use strict';

/**
 * @ngdoc function
 * @name notiRappiDo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notiRappiDo
 */
angular.module('notiRappiDo')
  .controller('MainCtrl', function ($scope, $http) {
  
    $scope.mostrar = false;
    $scope.id_news = undefined;
    $scope.title_panel = "NOTI-RAPPIDO";
    $scope.news = null;

    $scope.clickNews = function(){
    //Aqui se obtiene la data del json mediante http    
        $http.get('news_mock.json')
            .then(function(res) {
                $scope.news = res.data;
            }
        );    
    }

    $scope.mostrarCompleta = function(news){
        $scope.mostrar = !$scope.mostrar;
        $scope.id_news = news.id;
        if($scope.mostrar){
            $scope.title_panel = news.title;    
        }else{
            $scope.title_panel = "NOTI-RAPPIDO";
        }   
    }

  });
