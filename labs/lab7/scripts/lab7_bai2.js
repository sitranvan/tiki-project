function cong()
	{
		var a=document.getElementById('txt1').value;
		var b=document.getElementById('txt2').value;
		if(a.length==0)
		{
			alert("Số 1 không được để trống");
			txt1.focus();
			
		}else if(b.length==0)
			{
				alert("Số 2 không được để trống");
				txt2.focus();
			}else if(kiemtra1()&&kiemtra2())
				{
					document.getElementById('txtKQ').value=parseFloat(a)+parseFloat(b);
				}
	}
	function kiemtra1()//kt txt1 co phai la so khong
	{
		
		if(isNaN(document.getElementById('txt1').value))
		{
			alert("Số 1 phải là số");
			txt1.style.backgroundColor="red";
			txt1.focus();
			return false;
		}else
		{
			txt1.style.backgroundColor="white";
			return true;
		}
	}
	function kiemtra2()//kt txt2 co phai la so khong
	{
		if(isNaN(document.getElementById('txt2').value))
		{
			alert("Số 2 phải là số");
			txt2.style.backgroundColor="red";
			txt2.focus();
			return false;
		}else
		{
			txt2.style.backgroundColor="white";
			return true;
		}
			
	}