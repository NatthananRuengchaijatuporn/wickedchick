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
	password:"tunlnw",
	database:"wickedchick",
	port:3306
});
/*conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
app.get('/product',(req,res)=>{
	var idkub = req.query.id;
	console.log(" idkub = "+idkub+" AND type of idkub is = " +typeof idkub);
	var txt = 'SELECT i.ItemID,i.ItemName,i.ItemDescription,user.DisplayName FROM item as i INNER JOIN user ON i.SUsername=user.Username where i.ItemID = '+idkub+';';ผัั
	conn.query(txt, function(err,results){
		if (err) console.error(err);
		res.json(results)
	});
});

app.post('/cart',(req,res)=>{
	var items = req.body.listOfProduct;
	console.log(items)
	var totalPrice = 0;
	var insertValuesTxt = '';
	for (i = 0; i< items.length; i++ ){
		totalPrice += items[i].Price;
		insertValuesTxt += '('+items[i].ItemID+', 322)'; // 4 is OrderID
		if ( i < items.length -1 ) {
		insertValuesTxt += ',';
		}
	}
	console.log(insertValuesTxt);
	console.log('total Price kub '+totalPrice);
	var datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
	var txtkub = "INSERT INTO purchase_order (OrderID, TotalPrice, Orderdate, CouponID) VALUES (322, "+totalPrice+", '"+datetime+"', NULL);";
	/*conn.query(txtkub, function(err,response){
		if(err)throw err;
	})
	conn.query('INSERT INTO SENT_TO (ItemID,OrderID) Values '+insertValuesTxt+';', function(err,response){
		if(err)throw err;
	})*/
	
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

