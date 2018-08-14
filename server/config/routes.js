module.exports = function(app) {

    const cake = require('../controllers/cakes.js')

    app.get('/cakes', function(req,res) {
        cake.index(req,res);
        //display all created cakes; ok
    });
    app.get('/cakes/:id', function(req,res) {
        cake.find_by_id(req,res);
        //gets cake with id from db; ok
    });
    app.post('/cakes', function(req,res) {
        cake.add_cake(req,res);
        //create a new cake; ok
    });
    app.put('/cakes/:id', function(req,res) {
        cake.update_cake(req,res);
        //updates cake with id from db
    });
    app.delete('/cakes/:id', function(req,res) {
        cake.delete_cake(req,res);
        //Deletes cake with id from db
    });

    app.post('/cakes/:id', function(req,res) {
        cake.add_comment(req,res);
        //id from url is the messageID
    })

}