const { update } = require('../models/poke')
const Poke = require('../models/poke')

const dataController = {
    //Index,
    index(req, res, next){
        Poke.find({}, (err, foundPokes) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.pokes = foundPokes
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Poke.findByIdAndDelete(req.params.id, (err, deletedPoke) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.poke = deletedPoke
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false;
        Poke.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPoke)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.poke = updatedPoke
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false;
        Poke.create(req.body, (err, createdPoke)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.poke = createdPoke
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        Poke.findById(req.params.id,(err, foundPoke) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a poke with that ID'
                })
            } else {
                res.locals.data.fruit = foundPoke
                next()
            }
        })
    }
}

module.exports = dataController