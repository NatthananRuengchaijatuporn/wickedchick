let params = (new URL(document.location)).searchParams;
let idkub = params.get("id");
console.log('idkub = '+ idkub +" and type = "+ typeof idkub);
axios.get('http://localhost:3000/product?id='+idkub).then(res => {
	document.getElementById('productName').innerHTML = res.data[0].ItemName
	var pricekub = res.data[0].Price
	document.getElementById('fullPrice').innerHTML = pricekub
	var discountkub = res.data[0].discount
	document.getElementById('discountedPrice').innerHTML = Price * (100-discountkub) /100

	document.getElementById('rating').innerHTML = res.data[0].ItemRating
	document.getElementById('productDescription').innerHTML = res.data[0].ItemDescription
	document.getElementById('sellerName').innerHTML	= res.data.DisplayName
	console.log(res)
});