var changeName = document.getElementById('newName').value
var button = document.querySelector("#button-addon2");



button.addEventListener("click", function(){
	console.log("Hello")
	axios.post('http://localhost:3000/user',changeName);
	//axios.post('http://localhost:3000/basket',{test:'Yeah'})
});
