$(document).ready(function(){
	$("#cd1").mouseover(function(){
		$("#xl1").fadeIn(1000);});
	
	$("#cd1").mouseout(function(){
		$("#xl1").fadeOut(1000);});	
				    
	
});

$(document).ready(function(){
	$("#cd2").mouseover(function(){
		$("#xl2").slideDown(1000);});
	
	$("#cd2").mouseout(function(){
		$("#xl2").slideUp(1000);});	
				    
	
});

$(document).ready(function(){
	$("#cd3").mouseover(function(){
		$("#xl3").fadeIn(1000);});
	
	$("#cd3").mouseout(function(){
		$("#xl3").fadeOut(1000);});	
				    
	
});

$(document).ready(function(){
	$("#cd4").mouseover(function(){
		$("#xl4").slideDown(1000);});
	
	$("#cd4").mouseout(function(){
		$("#xl4").slideUp(1000);});	
				    
	
});

$(document).ready(function(){
	$("#cd5").mouseover(function(){
		$("#xl5").fadeIn(1000);});
	
	$("#cd5").mouseout(function(){
		$("#xl5").fadeOut(1000);});	
				    
	
});

var interval;
var pianyi;
var kd1=document.getElementById('picScroll1');
var kd2=document.getElementById('picScroll2');
function gundong() {
	interval= window.setInterval(yidong,10);
}
function yidong(){
	

	if(picScroll.scrollLeft>=picScroll1.offsetWidth)
		{picScroll.scrollLeft=picScroll.scrollLeft-picScroll1.offsetWidth;}
	else
		{picScroll.scrollLeft=picScroll.scrollLeft+1;}
}
function shuru2(){
    			var zj=document.getElementById('wb').value;
    			console.log("您的评价是："+zj+"     "+"评价成功!!!!");
    			alert("您的评价是："+zj+"     "+"评价成功!!!!");
    		}

    		$(document).ready(function(){
	
	
	

	var $error3=$('<span>密码不相同</span>');
	$('#ipt1').focus();
	$("#ipt1").blur(function(){
	var $username = $('input[name="username"]');
	var $oldspan1=$('#errortip1');
		var ipv=$('#ipt1').get(0).value;

		if(ipv=='')
		{
		if($oldspan1.length>0){$('#errortip1').remove();}
		var $error1=$('<span id="errortip1">用户名不能为空</span>');
		$("#ipt1").after($error1);
		}
		else
		{
		if($oldspan1.length>0){$('#errortip1').remove();}
		}
	});
	$("#ipt2").blur(function(){
	
	var $pswd1=$('input[name="password1"]');
	var $oldspan2=$('#errortip2');
		var ipv=$('#ipt2').get(0).value;

		if(ipv=='')
		{
		if($oldspan2.length>0){$('#errortip2').remove();}
		var $error2=$('<span id="errortip2">密码不能为空</span>');
		$("#ipt2").after($error2);
		}
		else
		{
		if($oldspan2.length>0){$('#errortip2').remove();}
		}
	});
	$("#ipt3").blur(function(){
	
	var $pswd2=$('input[name="password2"]');
	var $oldspan3=$('#errortip3');
		var ipv=$('#ipt2').get(0).value;
		var ipv2=$('#ipt3').get(0).value;

		if(ipv2!=ipv)
		{
		if($oldspan3.length>0){$('#errortip3').remove();}
		var $error3=$('<span id="errortip3">密码不相同</span>');
		$("#ipt3").after($error3);
		}
		else
		{
		if($oldspan3.length>0){$('#errortip3').remove();}
		}
	});
});
