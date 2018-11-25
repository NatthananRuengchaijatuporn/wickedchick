var button = document.querySelector(".proceed");

button.addEventListener("click", function(){
	payment = $('input[name=payment]:checked').val();
	var items = [{
	"ItemID" : 1,
	"ItemName" : "Ipad",
	"ItemDescription" : "This is Ipad 9.7 inches",
	"SUsername" : "Mark Hamberg",
	"Price" : 11500,
	"Quantity" : 1
},
{
	"ItemID" : 2,
	"ItemName" : "Iphone XS",
	"ItemDescription" : "This is Iphone XS 512GB",
	"SUsername" : "Mark Hamberg",
	"Price" : 57900,
	"Quantity" : 1
},
{
	"ItemID" : 3,
	"ItemName" : "Apple Watch Series4",
	"ItemDescription" : "This is Apple Watch Series4",
	"SUsername" : "Mark Hamberg",
	"Price" : 14400,
	"Quantity" : 1
}]
	//coupon ID uses NULL pai na kub
	//total price pai buak auo eng na ja
	console
	
	axios.post('http://localhost:3000/cart',{listOfProduct:items,totalPrice:83800,PaymentMethod:payment})
});
