let params = (new URL(document.location)).searchParams;
let idkub = params.get("id");
console.log('idkub = '+ idkub +" and type = "+ typeof idkub);
axios.get('http://localhost:3000/product?id='+idkub).then(res => {
	document.getElementById('productName').innerHTML = res.data.productName
	document.getElementById('discountPrice').innerHTML = res.data.discountPrice
	document.getElementById('fullPrice').innerHTML = res.data.fullPrice
	document.getElementById('rating').innerHTML = res.data.rating
	document.getElementById('productDescription').innerHTML = res.data.productDescription
	document.getElementById('productReview').innerHTML	= res.data.productReview
	console.log(res)
});