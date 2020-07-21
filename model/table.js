var knex=require("./connection")
knex.schema.createTable('siginsignup',(table)=> {
    table.increments('id'),
    table.string('email_id'),
    table.string("password")
    })
    .then(()=>{ 
        console.log("table created");
    }).catch((err)=>{
        console.log("neha");
    }) 
