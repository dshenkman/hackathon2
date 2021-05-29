const exp = require('express');
const bp = require('body-parser');
const cors = require('cors')
const fetch = require("node-fetch");
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

// db.select('*').from('items').then(data => {
//   console.log(data);
// });
//
// db.select('store_name').from('store').then(data => {
//   console.log(data);
// });



const app = exp()
app.set("db", db)

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use('/', exp.static(__dirname+'/public'));

app.get('/getData', (req,res) => {



})

app.get('/data', (req,res) => {
  db.select('store_name', 'item_name', 'price')
  .from('store')
  .join('price', 'price.store_id', '=', 'store.store_id')
  .join('items', 'items.item_id', '=', 'price.item_id')
  .join ('zipcode', 'zipcode.zip_id', '=', 'price.zip_id')
  // .where({item_name: 'brown sugar'})
  .then(results =>
    res.send(results)
  )
  // console.log(store);
})

app.set('port', 3000);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);


})
