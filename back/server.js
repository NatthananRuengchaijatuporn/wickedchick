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
	database:"finalwickedchick",
	port:3306
});
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var oldName = "Wicked Chick";
app.get('/product',(req,res)=>{
	var idkub = req.query.id;
	//console.log(" idkub = "+idkub+" AND type of idkub is = " +typeof idkub);
	var txt = 'SELECT i.ItemID,i.ItemName,i.ItemDescription,user.DisplayName,item_name.ItemRating,item_name.Price,item_name.Discount FROM item as i INNER JOIN user ON i.SUsername=user.Username INNER JOIN item_name ON i.itemName = item_name.ItemName where i.ItemID = '+idkub+';';
	conn.query(txt, function(err,results){
		if (err) console.error(err);
		res.json(results);
	});
});

//----------------------------------------------------------------------
app.post('/cart',(req,res)=>{
	var items = req.body.listOfProduct;
	//console.log(items)
	var OrderID = 322;
	var totalPrice = 0;
	var insertValuesTxt = '';
	for (i = 0; i< items.length; i++ ){
		totalPrice += items[i].Price;
		insertValuesTxt += '('+items[i].ItemID+', '+OrderID+')';
		if ( i < items.length -1 ) {
		insertValuesTxt += ',';
		}
	}
	console.log(insertValuesTxt);
	console.log('total Price kub '+totalPrice);
	var datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
	var txtkub = "INSERT INTO purchase_order (OrderID, TotalPrice, Orderdate, CouponID) VALUES ("+OrderID+", "+totalPrice+", '"+datetime+"', NULL);";
	conn.query(txtkub, function(err,results){
		if(err)console.log(err);//throw err;
	})
	conn.query('INSERT INTO SENT_TO (ItemID,OrderID) Values '+insertValuesTxt+';', function(err,response){
		if(err)console.log(err);//throw err;
	})
	
});

//--------THIS ONE IS OPTIONAL , didn't used :( --------------------------------------------------------------
app.get('/home', (req,res) => {
	conn.query("select * from item natural join item_name;", function(err,results){
		if(err)throw err;
		console.log(results);
		res.json(results);
	})
});

//----------------------------------------------------------------------
app.post('/AccPro',(req,res)=>{
	//console.log(req.body); // { newUserName : ' ASDAfasd' }
	var newUserNamekub = req.body.newUserName;
	console.log(newUserNamekub);
	conn.query("UPDATE user SET Username = '"+newUserNamekub+"' WHERE (Username = '"+oldName+"');",function(err,results){
		if(err)throw err;
	});
	oldName = newUserNamekub;
})

//----------------------------------------------------------------------
app.get('/productManage', (req,res) => {
	conn.query('SELECT ItemID,ItemName,Price FROM ITEM NATURAL JOIN item_Name',function(err,results){
		if(err) throw err;
		console.log(results);
		res.json(results);
	});
	
});
app.post('/productManage',(req,res)=>{
	console.log(req.body);
	var deletedID = req.body.ItemID;
	conn.query("DELETE item, item_name FROM item INNER JOIN item_name ON item.ItemName = item_name.ItemName WHERE item.ItemID = "+deletedID+";",function(err,results){
		if(err)throw err;
	});
})

//----------------------------------------------------------------------
app.listen(3000,()=>{
	console.log('app is running on port 3000 kub')
});

