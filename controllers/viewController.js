
const RESOURCE_PATH = '/pokes'

const viewController = {
    index(req, res, next){
        res.render('pokes/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('pokes/New')
    },
    edit(req, res, next){
        res.render('pokes/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('pokes/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        const pokeId = req.params.id || res.locals.data.poke._id
        res.redirect(`${RESOURCE_PATH}/${pokeId}`)
    }

}

module.exports = viewController