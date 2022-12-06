// JavaScript Document
var arr=new Array();
	arr[0]="images/digital-clock/c0.gif";
	arr[1]="images/digital-clock/c1.gif";
	arr[2]="images/digital-clock/c2.gif";
	arr[3]="images/digital-clock/c3.gif";
	arr[4]="images/digital-clock/c4.gif";
	arr[5]="images/digital-clock/c5.gif";
	arr[6]="images/digital-clock/c6.gif";
	arr[7]="images/digital-clock/c7.gif";
	arr[8]="images/digital-clock/c8.gif";
	arr[9]="images/digital-clock/c9.gif";
	arr[10]="images/digital-clock/cam.gif";
	arr[11]="images/digital-clock/cpm.gif";
	arr[12]="images/digital-clock/cb.gif";
	
	function showDate()
	{
		var s="";
		var d=new Date();
		s="Ngày " + d.getDate() + " tháng " + (d.getMonth()+1) + " năm " + d.getFullYear();
		return s;
	}
	function showClock(type)//type = 12 hay type=24
	{
		if(!document.images)
			return;
		var d=new Date();
		var h=d.getHours();
		var m=d.getMinutes();
		var s=d.getSeconds();
		var day;
		var month=d.getMonth();
		var year=d.getYear();
		if(type==12)
		{
			
			//Code viet tai day, su hinh co name=ap thanh am hay pm cho phu hop
			
			if(h<=9)
			{
				document.images.h1.src=arr[0];
				document.images.h2.src=arr[h];
			}else
			{
				document.images.h1.src=arr[Math.floor(m/10)];
				document.images.h2.src=arr[h%10];
			}
			if(m<=9)
			{
				document.images.m1.src=arr[0];
				document.images.m2.src=arr[h];
			}else
			{
				document.images.m1.src=arr[Math.floor(m/10)];
				document.images.m2.src=arr[m%10];
			}
			if(s<=9)
			{
				document.images.s1.src=arr[0];
				document.images.s2.src=arr[s];
			}else
			{
				document.images.s1.src=arr[Math.floor(s/10)];
				document.images.s2.src=arr[s%10];
			}
		}else if(type==24)
		{
			document.images.ap.src=arr[12];
			
			if(h<=9)
			{
				document.images.h1.src=arr[0];
				document.images.h2.src=arr[h];
			}else
			{
				document.images.h1.src=arr[Math.floor(h/10)];
				document.images.h2.src=arr[h%10];
			}
			if(m<=9)
			{
				document.images.m1.src=arr[0];
				document.images.m2.src=arr[m];
			}else
			{
				document.images.m1.src=arr[Math.floor(m/10)];
				document.images.m2.src=arr[m%10];
			}
			if(s<=9)
			{
				document.images.s1.src=arr[0];
				document.images.s2.src=arr[s];
			}else
			{
				document.images.s1.src=arr[Math.floor(s/10)];
				document.images.s2.src=arr[s%10];
			}
		}
		if(day!=d.getDate())
		{
			day=d.getDate();
			document.getElementById('date').innerHTML="<font color='#FFFFFF'>" + showDate() + "</font>";
			
		}
		setTimeout("showClock(" + type + ")",1000);
	}