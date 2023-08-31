const axios = require("axios")

exports.homeRoutes=(req,res)=>{
    axios.get('http://127.0.0.1:3000/api/users')
    .then(function(response){
        res.render('index',{users:response.data})
    }).catch(err=>{
        res.send(err)
    }) 
    
    
}
exports.add_user=(req,res)=>{
    res.render('add_user')
}
exports.update_user=(req,res)=>{
    axios.get('http://127.0.0.1:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        // res.render('index',{users:response.data})
        res.render("update_user",{user:userdata.data})

    }).catch(err=>{
        res.send(err)
    })
    
}

