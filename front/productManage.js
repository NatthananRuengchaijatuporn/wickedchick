
function deletekub(x){
	console.log('Hiii '+x);
	var deleted = document.getElementById(x);
	document.getElementById("items").removeChild(deleted);
	//axios.post('http://localhost:3000/productManage',{ItemID: x});
}


function addItems(IDkub,ItemName,Price){
	var stringkub = '<div class="col-md-4" id="'+IDkub+'">\
		<div class="card mb-4 shadow-sm">\
			<img class="card-img-top" style="height: 225px;width: 225px; display: block;" src="product'+IDkub+'.png">\
			<div class="card-body">\
				<p class="card-text"><h5>'+ItemName+'</h5></p>\
				<div class="d-flex justify-content-between align-items-center">\
					<div class="btn-group">\
					  <button type="button" onclick="deletekub('+IDkub+')" class="btn btn-md btn-danger">Remove</button>\
					</div>\
				<small class="text-muted">'+Price+' Baht</small>\
				</div>\
			</div>\
		</div>\
	</div>'
	console.log(stringkub)
	var temp = document.createElement('div');
		temp.innerHTML = stringkub;
		var htmlObjectkub = temp.firstChild;
		document.getElementById("items").appendChild(htmlObjectkub);
}
addItems(1,'iPhoneXS',7500);
addItems(2,'So Good',500000);
addItems(3,'Yung me KFX Tenyo sorn yu kang nai jai nun',500000);

/*
axios.get('http://localhost:3000/productManage')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (err) {
    // handle error
    console.log(err);
  })
  .then(function () {
    // always executed
  });
*/

