function dynamic_color(event) {
	
	var x = event.pageX;
  	var y = event.pageY;

  	var box = document.getElementById("navbar");
	var width = box.offsetWidth;
	var height = box.offsetHeight;

	document.getElementById("navbar").style.background = "radial-gradient(circle at "+Math.round((x/document.body.offsetWidth)*100)+"% "+Math.round((y/document.body.offsetHeight)*100)+"% ,  rgba(39, 71, 186,0.8) 5%, rgba(39, 71, 186,0.1))";
	//document.getElementById("navbar").style.transition = "background 1s";
}