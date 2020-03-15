if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"A|",
					"A |",
					"A I|",
					"A I |",
					"A I M|",
					"A I M |",
					"A I M S|",
					"A I M S |",
					"A I M S T|",
					"A I M S T |",
					"A I M S T A|",
					"A I M S T A |",
					"A I M S T A R|",
					"A I M S T A R |",
					"A I M S T A R K|",
					"A I M S T A R K |",
					"A I M S T A R K .|",
					"A I M S T A R K . |",
					"A I M S T A R K . X|",
					"A I M S T A R K . X |",
					"A I M S T A R K . X Y|",
					"A I M S T A R K . X Y |",
					"A I M S T A R K . X Y Z|"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}