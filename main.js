let dice = document.getElementsByClassName("dice");

function roll(){
	for(let i=0; i<dice.length; i++){
		dice[i].style.display = "none";
	}
	let random = Math.floor(Math.random()*6+1);
	dice[random-1].style.display = "flex";
}