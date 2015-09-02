/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

        createByName: function(req, res){
        Category.findOne(req.params.id)
        .then(function(category){
                Person.findOrCreate({
                        where: {
                                firstName: req.body.firstName,
                                lastName: req.body.lastName
                        }})
                .then(function(person){
                        category.person.add(person);
                        category.save(function(error, save){
                                res.send(save);
                        });
                });
        });
}

};

