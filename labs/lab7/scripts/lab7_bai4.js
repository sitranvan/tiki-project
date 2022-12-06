// JavaScript Document
var index = 1;
function hinh(i) {
	index = i;
	document.getElementById("hinh_banner").src = "images/layout/banner" + i + ".png";
}

function hinhtruoc() {
	index--;
	if (index < 1)
		index = 3;
	document.getElementById("hinh_banner").src = "images/layout/banner" + index + ".png";
}
function hinhsau() {
	index++;
	if (index > 3)
		index = 1;
	document.getElementById("hinh_banner").src = "images/layout/banner" + index + ".png";
}