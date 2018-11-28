let params = (new URL(document.location)).searchParams;
let idkub = params.get("id");
document.getElementById("picture").src = "product"+idkub+".png";
console.log('idkub = '+ idkub +" and type = "+ typeof idkub);
axios.get('http://localhost:3000/product?id='+idkub).then(res => {
	console.log(res.data[0]);
	document.getElementById('productName').innerHTML = res.data[0].ItemName;
	document.getElementById('productDescription').innerHTML = res.data[0].ItemDescription;
	document.getElementById('sellerName').innerHTML	= res.data[0].DisplayName;
	document.getElementById('rating').innerHTML = res.data[0].ItemRating;
	var pricekub = res.data[0].Price;
	document.getElementById('fullPrice').innerHTML = pricekub;
	var discountkub = res.data[0].Discount
	if (!discountkub) {
		document.getElementById('discountedPrice').innerHTML = pricekub;
		document.getElementById('discount').innerHTML = 0;	
	} else {
		document.getElementById('discountedPrice').innerHTML = pricekub * (100-discountkub) /100
		document.getElementById('discount').innerHTML = discountkub;	
		}
});
