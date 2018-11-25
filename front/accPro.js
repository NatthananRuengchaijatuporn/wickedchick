
var button = document.querySelector("#button-addon2");



button.addEventListener("click", function(){
	var changeName = document.getElementById('newName').value;
	var sendkub = { username : changeName }
	axios.post('http://localhost:3000/user',sendkub).then(function(response){
		
	}).catch(function(error){
		console.log(error);
	})
	console.log('changename = '+changeName);
	console.log(document.getElementById("shownName").value)
	document.getElementById("shownName").innerHTML = changeName;
	//axios.post('http://localhost:3000/basket',{test:'Yeah'})
});


