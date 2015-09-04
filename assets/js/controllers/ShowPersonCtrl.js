AddressApp.controller('ShowPersonCtrl', ['$scope',  'Person', '$routeParams', 'Contact', '$modal', 'Category', function($scope, Person, $routeParams, Contact, $modal, Category){

        // Define Person
        $scope.person={};

        // Inject Person Info Into Empty Person Object
        Person.get({id: $routeParams.id}).then(function(person){
                console.log(person)
               $scope.person = person;
       });

        // Define Contact
        $scope.newContact = {
                name: '',
                email: '',
                street: '',
                city: '',
                state:'',
                zip: '',
                phone: '',
                person: $routeParams.id

        };

        //Save A New Contact With Form Info
        $scope.addContact = function(){
                var newContact = new Contact($scope.newContact);
               newContact.$save().then(function(contactResult){
                        console.log('contact',contactResult)
               }).catch(function(error){
                        console.log('error',error)
               });
        }

        $scope.deleteContact = function(contact){
            console.log('deletecontact',contact)
                var deletecontact = new Contact(contact)
                deletecontact.$delete();
        };

        $scope.editContact = function(contact){
                $modal.open({
                    templateUrl: '/views/person/editContactModal.html',
                    controller: 'EditContactCtrl',
                    resolve: {
                        editContact: function(){
                            return contact;
                        }
                    }
                });
        }

        $scope.addCategoryPerson = function(){
            console.log('helloaddcategoryperson')
                $modal.open({
                    templateUrl: '/views/person/addCategoryModal.html',
                    controller: 'CategoryCtrl',
                });
        };

        $scope.deleteCategory = function(category){
            Category.get({id: category.id}).then(function(category){
                category.$delete().then(function(deleted){
                    console.log("deleted", deleted);
                }).catch(function(error){
                    cosole.log('error', error);
                });
            });
        }


}])

