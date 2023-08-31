const express = require("express")
const services = require("../services/render")
const controller = require("../contraller/controller")


const route = express.Router()


route.get('/',services.homeRoutes)

route.get('/add-user',services.add_user)
route.get('/update-user',services.update_user)
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

module.exports=route