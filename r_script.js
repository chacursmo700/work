


var employmentList = 
{ 
	"Goodwill":"Sales Associate",
	"Amazon":"Warehouse Associate",
	"Taco Bell":"Shift Leader",
	"Walmart":"Cashier",
	"Verizon":"Tier Two Support",
	"University of Texas, Office of Information":"Space Auditor",
	"Alvarado ISD":"Technology Facilitator",
	"Randalls":"Deli Clerk",
	"Hill County Title":"Secretary",
	"Calico":"Associate",
	"Daily Texas":"Photographer",
	"University of Texas Engineering Library":"Associate",
	"Jack-in-the-Box":"Team Member",	
	"Universal Computer Systems":"Bench Technician",
	"Pizza Inn":"Pizza Cutter",
	"Itasca ISD":"Construction Assistant"
}


window.onload = function(){

	var foo = document.getElementById("jobs");
	var text = "";
	for (const [key,value] of Object.entries(employmentList)){
		text = text + '<br>' + key + ": " + value;
	}
	console.log(text);
	foo.innerHTML = text;

}
