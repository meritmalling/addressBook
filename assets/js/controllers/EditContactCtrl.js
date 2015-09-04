AddressApp .controller('EditContactCtrl', ['$scope', '$modalInstance', 'editContact', 'Contact', function($scope, $modalInstance, editContact, Contact){

      // console.log('working',editPost)
      $scope.newContact={
          name: editContact.name,
          email: editContact.email,
          street: editContact.street,
          city: editContact.city,
          state: editContact.state,
          zip: editContact.zip,
          phone: editContact.phone

      };

      $scope.updateContact = function(){
        editContact.name = $scope.newContact.name;
        editContact.email = $scope.newContact.email;
        editContact.street = $scope.newContact.street;
        editContact.city = $scope.newContact.city;
        editContact.state = $scope.newContact.state;
        editContact.zip = $scope.newContact.zip;
        editContact.phone = $scope.newContact.phone;
        editContact.$save().then(function(){
                $modalInstance.close();
        });
      }
      $scope.cancelModal = function(){
        $modalInstance.dismiss();
      }

}]);