function dynamic_color(event) {
	
	let x = event.pageX;
  	let y = event.pageY;

  	let box = document.getElementById("navbar");
	let width = box.offsetWidth;
	let height = box.offsetHeight;

	document.getElementById("navbar").style.background = "radial-gradient(circle at "+Math.round((x/document.body.offsetWidth)*100)+"% "+Math.round((y/document.body.offsetHeight)*100)+"% ,  rgba(39, 71, 186,0.8) 5%, rgba(39, 71, 186,0.1))";
	//document.getElementById("navbar").style.transition = "background 1s";
}

function team_collapse() {
    let coll = document.getElementsByClassName("item-div");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("div-active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}