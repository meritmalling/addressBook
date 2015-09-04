AddressApp.controller('NewPersonCtrl', ['$scope', 'Person', function($scope, Person){

        $scope.newPerson = {
                firstName: '',
                lastName: '',
                notes: ''
        };

        $scope.createPerson = function(){
               var newPerson = new Person($scope.newPerson);
               newPerson.$save().then(function(personResult){
                        console.log('person',personResult)
               }).catch(function(error){
                        console.log('error',error)
               });
        }
}]);