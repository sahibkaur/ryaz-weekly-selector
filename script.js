

// window.onclick = getData;

function getData(){
	var names = ["Sahib", "Shaina", "Vigas", "Panda", "Mandeep", "Varmillion", "Manpreet", "Hemant"];
	var dynNames=names;
	var length = names.length;
	var dynLength = length;
	var cell = document.getElementsByClassName("cell");
	var fixCell = document.getElementsByClassName("fix-cell");
	for (var i=0; i< dynNames.length;i++){
		console.log(dynNames[i]);
	}
	for( var i = 0; i < length; i++){
		random = Math.floor(Math.random() * dynLength);
		cell[i].innerHTML = dynNames[random];
		// for( var j = random; j < dynLength; j++){
		// 	dynNames[j] = dynNames[j+1];
		// }
		dynNames.splice(random,1);
		dynLength--;
		console.log(dynLength);
	}
	fixCell[0].innerHTML = "Uncle Leo";
	fixCell[1].innerHTML = "Trainees";
}
