var button = document.querySelector(".delete");

button.addEventListener("click", function(){
	
	//coupon ID uses NULL pai na kub
	//total price pai buak auo eng na ja
	console.log("hello")
	
	axios.post('http://localhost:3000/productManage',{productName:"test"})
});