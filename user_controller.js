const express = require('express');
const router = express.Router();
const userService = require('./user_service');

// routes
router.post('/auth', auth);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
// router.put('/position/', updatePosition);
router.put('/:id', update);
router.delete('/:id', _delete);
router.post('/add_ami', add_ami);
router.post('/del_ami', del_ami)


module.exports = router;

function auth(req, res, next) {
    console.log("Authentification" + req.body)
    userService.auth(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'login ou mot de passe incorrect(s)' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    console.log("enregistrement" + req.body)
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    console.log("getAll" + req.body)
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    console.log("get_courant" + req.body)
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    console.log("getbyid" + req.body)
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    console.log("update" + req.body)
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    console.log("delete" + req.body)
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function updatePosition(req, res, next){
    console.log("updatePosition")
    userService.setPosition(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function add_ami(req, res, next){
    console.log("ajout_ami")
    userService.add_ami(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function del_ami(req, res, next){
    console.log("del_ami")
    userService.del_ami(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}