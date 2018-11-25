
var button = document.querySelector("#button-addon2");



button.addEventListener("click", function(){
	var changeName = document.getElementById('newName').value;
	console.log("Hello")
	axios.post('http://localhost:3000/user',changeName).then(function(response){
		
	}).catch(function(error){
		console.log(error);
	})
	console.log(changeName);
	console.log(document.getElementById("shownName").value)
	document.getElementById("shownName").innerHTML = changeName;
	//axios.post('http://localhost:3000/basket',{test:'Yeah'})
});


