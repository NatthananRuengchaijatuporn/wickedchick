const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(cors());
var conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"insert password mung si",
	database:"e useless 2 tua yak don kicked pow sardddddddd",
	port:3306
});
/*conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
app.get('/product',(req,res)=>{
	var idkub = req.query.id;
	console.log(" idkub = "+idkub+" AND type of idkub is = " +typeof idkub);
	var txt = 'SELECT i.ItemID,i.ItemName,i.ItemDescription,user.DisplayName, FROM item as i INNER JOIN user ON i.SUsername=user.Username where i.ItemID = '+idkub+';';
	conn.query(txt, function(err,results){
		if (err) console.error(err);
		console.log(results);
		res.json(results)
	});
});

app.get('/pick',(req,res)=>{
/*
	conn.query('SELECT * FROM account',function(err,response){
		if(err)throw err;
		response.forEach(function(element){console.log(element.account_number)})
		BUsername,ItemID,timestamp,Quantity
		res.send(response);
	});
*/
	console.log("I got it.")
});
//add into 
app.post('/cart',(req,res)=>{

	//console.log(req.B)
	//conn.query('INSERT INTO SEND_TO VALUES (ItemID) VALUES ('+req.ItemID+')',function(err,response){
	//	if(err)throw err;
	//})
	//must get price first (sum of all price)

	//conn.query('INSERT INTO PURCHASEDORDER VALUES (OrderID)')
});
app.get('/home', (req,res) => {
	//conn.query('SELECT itemid,itemname FROM ITEM')

});
app.post('/AccPro',(req,res)=>{
	//console.log(req.body); // { newUserName : ' ASDAfasd' }
	console.log(req.body.newUserName);
	//conn.query('UPDATE
	//conn.query('INSERT INTO SEND_TO VALUES (ItemID) VALUES ('+req.ItemID+')',function(err,response){
	//	if(err)throw err;
	//})
})

app.listen(3000,()=>{
	console.log('app is running on port 3000 kub')
});

