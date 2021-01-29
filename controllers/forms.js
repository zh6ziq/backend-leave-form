var Model = require('../models')

const forms = {

    getAllForms: async (req, res) => {
        let forms = []
        try {
            forms = await Model.Forms.findAll()
        } catch (e) {
            console.log(e)
        }
        res.json(forms)
    },

    getForm: async (req, res) => {
        let form = []
        try {
            form = await Model.Forms.findAll({
                where: {
                    email: req.params.email
                }
            })
        } catch (e) {
            console.log(e)
        }

        res.json(form)
    },

    createForm: async (req, res) => {
        let form = {}
        try {
            form = await Model.Forms.create(req.body
                // name: req.body.name,
                // email: req.body.email,
                // contact: req.body.contact
            )
        } catch (e) {
            console.log(e)
        }
        res.json(form)
    },

    updateForm: async (req, res) => {
        let form = {}
        try {
           await Model.Forms.update(req.body, {
               where: {
                   id: req.params.id
               }
           }) 
        } catch (e) {
            console.log(e)
        }

        res.json(form)
    },

    deleteForm: async (req, res) => {
        await Model.Forms.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(204).json({
            status: "Success!"
        })
    },
}

module.exports = forms;