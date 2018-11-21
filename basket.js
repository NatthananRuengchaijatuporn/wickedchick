var button = document.querySelector(".proceed");
button.addEventListener("click", function(){
	console.log("Hello")
	axios.get('http://localhost:3000/pick').then(res => {
	console.log(res.data)
	console.log(res.data.length)
	for(var i=0;i != res.data.length;i++){
		console.log(res.data[i])
		axios.post('http://localhost:3000/basket',res.data[i]).then(
			function(response){
				console.log(response)
			}).catch(function(error){
				console.log(error)
			})
	}
	});
	//axios.post('http://localhost:3000/basket',{test:'Yeah'})
});
