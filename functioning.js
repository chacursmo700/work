
window.onload = function(){

	var text = document.getElementById("text-on-screen");
	var store = 0;
	var state = false;
	var funnyfunny = 0; 
	var memory = 0;
	var negative = false;
	var ondecimal = false
	document.onclick = inputChange;
}


function inputChange(e) {
        var screen = document.getElementById("text-on-screen");
	if (e.target.id == "clear")	{
		screen.innerHTML = "0.0"
	}
	else if (e.target.id == "memory"){
		memory = screen.innerHTML;
	}
	else if (e.target.id == "recall"){
		screen.innerHTML = memory.replace(/\s/g,'');
	}
	else if (e.target.id == "decimal"){
		if (!ondecimal){
		ondecimal = true;
		screen.innerHTML = screen.innerHTML + ".";
		} 
		else {
			console.log(ondecimal);
			screen.innerHTML = "Error";
		}
	}


	else if (e.target.classList.contains("number")) {
		var hair = String(screen.innerHTML.replace(/\s/g,''));
		var bolean = hair.localeCompare("0.0");
		if (bolean == 0){
			screen.innerHTML = e.target.innerHTML;
		}
		else {
		screen.innerHTML += e.target.innerHTML.replace(/\s/g,'');
		}
	}

	else if (e.target.classList.contains("function")) {
		if (e.target.id == "radical"){
			screen.innerHTML = squareroot(screen.innerHTML);

		}

		else if (e.target.id == "square") {
			screen.innerHTML = squared(screen.innerHTML);

		}

		else if (e.target.id == "add"){
			store = Number(screen.innerHTML.replace(/\s/g,''));
			funnyfunny = 1;
			screen.innerHTML = "0.0";
		}
		else if (e.target.id == "subtract"){
			store = Number(screen.innerHTML.replace(/\s/g,''));
			funnyfunny = 2;
			screen.innerHTML = "0.0";
		}
		else if (e.target.id == "percent"){
			screen.innerHTML = Number(screen.innerHTML.replace(/\s/g,''))*.01; 
		}
		else if (e.target.id == "equals") {
			var temp;
			if (funnyfunny == 1){
				temp = store + Number(screen.innerHTML.replace(/\s/g,''));
				screen.innerHTML = temp;
			}

			else if (funnyfunny == 2){
				screen.innerHTML = store - Number(screen.innerHTML.replace(/\s/g,''));
			}


		}
	}
	

}

function squareroot(n) {
	n=n.replace(/\s/g, '');
	Number(n);
	var i = 0;
	var x = n/2;
	while ( i < 10 ){
		x = (x - ((x*x) - n)/(2*x));
		i++;
	}
	x = String(x);
	if (x.length > 7) {
		x = x.substring(0,7);
	}
	return x;

}

function squared(n){
	n = n.replace(/\s/g, '');
	Number(n);
	return n*n;
}
