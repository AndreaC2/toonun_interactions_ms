
const express = require('express');
const router = express.Router();
const Comment = require('../Models/comic.model')
const User = require('../Models/user.model')

router.use(express.json());

router.post('/comics/crear', (req, res, next) => {
    console.log(req.body);
    console.log(req.url, req.method);
    const comic = new Comment(
        {
            idComic : req.body.idComic
        }
    );
    comic.save().then(result => {
        console.log(result);
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err)
    })
});

router.post('/comment', (req, res, next) => {
    console.log(req.body);
    console.log(req.url, req.method); 
    Comment.findOneAndUpdate({_id: req.body._id},
        {$push: {
            comments : {
                idUser : req.body.comments.idUser, 
                comment : req.body.comments.comment
            }
        }
    },{new : true} ,function(error, comm) {
        console.log(comm);
        res.send(comm);
    });
});

router.get('/comics', (req, res, next) => {
    Comment.find(function(error, comics) {
        console.log(comics);
        res.send(comics);
    });
    console.log(req.url, req.method);
});

router.get('/user', (req, res, next) => {
    User.find(function(error, users) {
        console.log(users);
        res.send(users);
    });
    console.log(req.url, req.method)
});

router.post('/user/crear', (req, res, next) => {
    console.log(req.body);
    console.log(req.url, req.method);
    const user = new User(
        {
            idUser : req.body.idUser
        }
    );
    user.save().then(result => {
        console.log(result);
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err)
    })
});

router.post('/subcomic' , (req, res, next) => {
    console.log(req.body);
    console.log(req.url, req.method); 
    User.findOneAndUpdate({_id: req.body._id},
        {$push: {
            comics: {
                idComic: req.body.subscriptions.comics.idComic
            }
        }
    },{new : true} ,function(error, comm) {
        console.log(comm);
        res.send(comm);
    })
});

router.post('/subautor' , (req, res, next) => {
    console.log(req.body);
    console.log(req.url, req.method); 
    User.findOneAndUpdate({_id: req.body._id},
        {$push: {
            autors:{
                idUser: req.body.subscriptions.autors.idUser
            }
        }
    },{new : true} ,function(error, comm) {
        console.log(comm);
        res.send(comm);
    });
});

router.delete('/subcomic/delete' , (req, res, next) => {
    console.log(req.body);
    console.log(req.url, req.method); 
    User.findOneAndUpdate({_id: req.body._id},
        {$pull: {
            comics: {
                idComic: req.body.subscriptions.comics.idComic
            }
        }
    },{new : true} ,function(error, comm) {
        console.log(comm);
        res.send(comm);
    });
});

router.delete('/subautor/delete' , (req, res, next) => {
    console.log(req.body);
    console.log(req.url, req.method); 
    User.findOneAndUpdate({_id: req.body._id},
        {$pull: {
            autors:{
                idUser: req.body.subscriptions.autors.idUser
            }
        }
    },{new : true} ,function(error, comm) {
        console.log(comm);
        res.send(comm);
    });
});


module.exports = router;