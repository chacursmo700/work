

window.onload = function(){

	var foo = document.getElementById("entities");
	var result;	
	let request = new XMLHttpRequest();
	var url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=OR9576HQ6MIOWKYA"
	request.open('GET', url);
	request.responseType = 'text';
	request.onload = function() {
		result = request.response;
		/*
		foo.innerHTML = result;
//		console.log(result);
		var myStr = JSON.stringify(result);
		myStr = myStr.split("2020-08-11")[1].substring(41,55);
		myStr = "Bitcoin: " + myStr;	
		
		foo.innerHTML = myStr;
		*/
		var myObj = JSON.parse(result);
		var d = new Date();
		var year = d.getFullYear() ;
		var month = d.getMonth() + 1;
		var day = d.getDate() - 1;
		if (month < 10) {
			month = "0"+month;
		}
		var dDay = String(year)+"-"+String(month)+"-"+String(day);
		//console.log(d);
		//console.log(dDay);
		var twoObj =myObj['Time Series (Digital Currency Daily)'][dDay];
		var open = twoObj["1a. open (USD)"];
		var close = twoObj["4a. close (USD)"];
		
		
		open = Number(open);
		close = Number(close);
		if (open > close) {
			foo.style.color = "red";
		} else {
			foo.style.color = "green";
		}
		var myStr= "Bitcoin: " + String(close);
		foo.innerHTML = myStr;

	}
	request.send();
//	var temp = result["Meta Data"]["3. Digital Currency Name"];
}
