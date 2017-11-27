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

function tingzhi(){
	window.clearInterval(interval);
}