let canvas = document.getElementById("reshetka");
let context = canvas.getContext("2d");
let but = document.getElementById("get");
let inputc = document.getElementById("input");

let sqx = 50;
let sqy = 50;	//TUK IMA CELI CHISLA
let cx = 0;
let cy = 0;
function coords(){
	let coords = inputc.value;	//TUK IMA MASIV
	cx = Number(coords[0]);		//coords[0] i coords[2] SA STRINGOVE
	cy = Number(coords[2]);
	canvas.style.visibility = 'visible';
	drawGrid();
}
but.onclick=coords;

function drawGrid() {
    for(let i = 0; i < canvas.height / sqy; i++) {
        for(let j = 0; j < canvas.width / sqx; j++) {
			if (i===cy && j===cx){
				context.fillStyle = "black";
				context.fillRect(sqx * j, sqy * i, sqx, sqy);
			}else{
				context.fillStyle = "white";
				context.fillRect(sqx * j, sqy * i, sqx, sqy);
			}
            context.strokeRect(sqx * j, sqy * i, sqx, sqy);
        }
    }
}
canvas.onclick = function(e) {
    let x = e.clientX;		//TUK IMA DROBNI CHISLA
    let y = e.clientY;
    cx = Math.floor(x / sqx);
    cy = Math.floor(y / sqy)-4;
    drawGrid();
}
document.onkeydown = function(e) {
	switch (e.key) {
		case "w": cy -= 1; break;
		case "a": cx -= 1; break;
		case "d": cx += 1; break;
		case "s": cy += 1; break;
	}
	drawGrid();
}