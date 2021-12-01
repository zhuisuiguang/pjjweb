		function check(){
			var obj=document.getElementsByName("ssl")[0].value;
			if(obj==""){
				alert("账号非空！")
				return false;
			}
			var obj=document.getElementsByName("mm")[0].value;
			if(obj==""){
				alert("密码非空！")
				return false;
			}
		}
