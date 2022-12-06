// JavaScript Document
function run()
{
	var s= new String(document.title);
	s=s.substr(1) + s.charAt(0);
	document.title=s;
	window.status=s;
	setTimeout('run()',500);
}