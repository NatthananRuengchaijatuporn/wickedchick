//console.log("Hello");
/*
$(document).ready(function(){
	const URL = 'http://localhost:3000';
	$('.btn').click(function(){
		$.ajax({
			url: URL,
			type:"GET",
			success: function(result){
				console.log(result);
			},
			error:function(error){
				console.log(`Error ${error}`);
			}
		})
	})
})
*/
const URL = 'http://localhost:3000/';
var button = document.querySelector(".btn");
button.addEventListener("click", function(){
	fetch(URL)
	.then(data=>{return data.json()})
	.then(res=>{console.log(res)})
});
