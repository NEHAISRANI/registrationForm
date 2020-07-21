const knex = require('../model/query')

module.exports = (app) => {
    app.post('/post', (req, res) => {
        var data = {
            email_id:req.body.email_id,
            password:req.body.password
        }
        knex.post_query(data)
        .then(() => {
            res.send('update')
        })
        .catch((err) => {
            res.send("neha")
        })
    }) 

    app.get('/get',(req,res)=>{
        var data={
            email_id:req.body.email_id,
            password:req.body.password

        } 
        knex.get_query(data.email_id)
        .then((d)=>{
            if(d.length!=0){
                knex.password_query(data.password)
                .then((p)=>{
                    if(p.length!=0){
                        res.send(" sucessfully")
                    }
                    else{
                        res.send("password wrong")
                    }
                })
            }
            else{
                res.send('id wrong')
            }

            
    })
})

} 
