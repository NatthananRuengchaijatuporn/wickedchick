
axios.get('http://localhost:3000/product').then(res => {
	document.getElementById('productName').innerHTML = res.data.productName
	document.getElementById('discountPrice').innerHTML = res.data.discountPrice
	document.getElementById('fullPrice').innerHTML = res.data.fullPrice
	document.getElementById('rating').innerHTML = res.data.rating
	document.getElementById('productDescription').innerHTML = res.data.productDescription
	document.getElementById('productReview').innerHTML	= res.data.productReview
	console.log(res)
});