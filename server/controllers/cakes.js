const mongoose = require('mongoose'),
    Rating = mongoose.model('Rating'),
    Cake = mongoose.model('Cake')

module.exports = {
    index: function(req,res) {
        Cake.find({}, function(err,cakes) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'cakes':cakes});
            }
        })
    },
    add_cake: function(req,res) {
        var cake = new Cake({
            name:req.body.name,
            baker:req.body.baker,
            image:req.body.image
        })
        cake.save(function(err,cake) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'cakes':cake});
            }
        })
    },
    find_by_id: function(req,res) {
        Cake.findById(req.params.id,function(err,cake) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'cakes':cake});
            }
        })
    },
    update_cake: function(req,res) {
        Cake.update({_id:req.params.id},{$set: 
            {
                name:req.body.name,
                baker:req.body.baker,
                image:req.body.image
            }
        },function(err){
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'cakes':'Cake was updated'});
            }
        })
    },
    delete_cake: function(req,res) {
        Cake.deleteOne({_id:req.params.id},function(err) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'cakes':'Cake was deleted'});
            }
        })
    },
    add_comment: function(req,res) {
        Cake.findById(req.params.id,function(err,cake) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                var new_rating = new Rating({
                    comment:req.body.comment,
                    rating:req.body.rating
                })
                new_rating.save(function(err) {
                    if (err) {
                        res.json({'status':500,'errors':err})
                    }
                    else {
                        cake.ratings.push(new_rating)
                        cake.save(function(err) {
                            if (err) {
                                res.json({'status':500,'errors':err}) 
                            }
                            else {
                                res.json({'status':200,'cakes':'Added comment to cake'})
                            }
                        })
                    }
                })

            }
        })
    }
}