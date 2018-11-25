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
	password:"xxxxx",
	database:"banking",
	port:3306
});
//conn.connect();
app.get('/product',(req,res)=>{
	//var isDefined = 'NOTdefinelagun';
	var idkub = req.query.id;
	console.log(" idkub = "+idkub+" AND type of idkub is = " +typeof idkub);

	conn.query('SELECT i.ItemID,i.ItemName,i.ItemDescription,user.DisplayName FROM item as i INNER JOIN user ON i.SUsername=user.Usernamewhere i.ItemID = '+idkub+';', function(error,results,fields){
	
	
	});
	tmp = {
		productName : 'PRODUCTNAME'+idkub,
		discountPrice : 50,
		fullPrice : 100,
		rating : 5,
		productDescription : 'Hello JavaScript '+isDefined,
		sellerName : "I hate JavaScript"
	}
	res.send(tmp);
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
app.post('/basket',(req,res)=>{

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
	console.log(req.body);
	console.log(req.body.newUserName);
	//conn.query('UPDATE
	//conn.query('INSERT INTO SEND_TO VALUES (ItemID) VALUES ('+req.ItemID+')',function(err,response){
	//	if(err)throw err;
	//})
})

app.listen(3000,()=>{
	console.log('app is running on port 3000 kub')
});

