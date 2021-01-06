var timer = null;

var cymbal = document.getElementById("cymbal");
var drink = document.getElementById("drink");
var eat = document.getElementById("eat");
var fart = document.getElementById("fart");
var pie = document.getElementById("pie");
var scratch = document.getElementById("scratch");
var knockout = document.getElementById("knockout");
var angry = document.getElementById("angry");
var stomach = document.getElementById("stomach");
var footLeft = document.getElementById("footLeft");
var footRight = document.getElementById("footRight");
var music = document.getElementById("music");
cymbal.onclick = function() {
	start("cymbal", 13);
	music.src = "mp3/pia.mp3";
	music.play();
}
drink.onclick = function() {
	start("drink", 81);
}
eat.onclick = function() {
	start("eat", 40);
}
fart.onclick = function() {
	start("fart", 28);
	music.src = "mp3/pi.wav";
	music.play();
}
pie.onclick = function() {
	start("pie", 24);
}
scratch.onclick = function() {
	start("scratch", 56);
}
knockout.onclick = function() {
	start("knockout", 81);
}
angry.onclick = function() {
	start("angry", 26);
}
stomach.onclick = function() {
	start("stomach", 34);
	music.src = "mp3/tomaiyou.mp3";
	music.play();
}
footLeft.onclick = function() {
	start("footRight", 30);
}
footRight.onclick = function() {
	start("footLeft", 30);
}

function indexImg(index) {
	if (index < 10)
		return "0" + index;
	else
		return index;
}

function imgSrc(name, index) {
	return "img/Animations/" + name + "/" + name + "_" + indexImg(index) + ".jpg"
}

function start(name, count) {
	clearInterval(timer);
	var cat = document.getElementById("cat");
	var index = 0;
	timer = setInterval(function() {
		if (++index < count) {
			cat.src = imgSrc(name, index);
		} else {
			clearInterval(timer);
		}

	}, 100)
}
