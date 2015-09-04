AddressApp .controller('CategoryCtrl', ['$scope', '$modalInstance','Category', '$http', '$routeParams', function($scope, $modalInstance, Category, $http, $routeParams){

    $scope.newCategory

    $scope.addCategory = function(){
            return $http({
                url: '/api/person/' + $routeParams.id + '/category',
                method: 'post',
                data: {
                    category: $scope.newCategory
                }
            }).then(function(data){
                console.log(data);
                $scope.newCategory = "";
            });
        }

      $scope.cancelModal = function(){
        $modalInstance.dismiss();
      }

}]);