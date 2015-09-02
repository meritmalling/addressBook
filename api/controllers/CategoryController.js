/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

        connect: function(req, res){
        Person.findOne(req.params.id).then(function(person){
                Category.findOrCreate({where: {category: req.body.category}})
                .then(function(category){
                        person.category.add(category);
                        person.save(function(error, save){
                                console.log('save',save);
                                res.send(save);
                        });
                });
        });
}

};

