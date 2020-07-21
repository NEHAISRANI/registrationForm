var knex = require('./connection')

let post_query = (up)=>{
    return knex('siginsignup').insert(up)

} 

let get_query=(email)=>{
    
    return knex.select("*").from('siginsignup').where('email_id',email)
}

let password_query=(pass)=>{
    return knex.select("*").from('siginsignup').where('password',pass)
}
module.exports={post_query,get_query,password_query}    

