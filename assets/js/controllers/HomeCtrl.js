AddressApp.controller('HomeCtrl', ['$scope', '$rootScope', 'Person', '$modal', function($scope, $rootScope, Person, $modal){

        $scope.persons = [];
        // $scope.orderField = 'title';

        Person.query().then(function(person){
                console.log(person)
               $scope.persons = person
        });

        $scope.deletePerson = function(person){
                person.$delete();
        };

        $scope.editPerson = function(person){
                $modal.open({
                    templateUrl: '/views/person/editModal.html',
                    controller: 'EditPersonCtrl',
                    resolve: {
                        editPerson: function(){
                            return person;
                        }
                    }
                });
        };

}]);