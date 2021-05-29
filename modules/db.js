const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: 'Groceries'
  }
})

// function createUser({user}){
//   return db('users').insert(
//     {
//       username:user
//     }
//   )
//   .returning('*')
// }
//
// module.exports = {
//   createUser
// }
