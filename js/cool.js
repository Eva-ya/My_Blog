
// 顶部锤子官网效果 start

var papa=document.querySelector('.myIntro');
var ppx=papa.offsetLeft+papa.offsetWidth/2;
var ppy=papa.offsetTop+papa.offsetHeight/2;
papa.onmousemove=function(ev){
	var ev=ev||event;
	var x=ev.clientX;
	var y=ev.clientY;
	var xx=(x-ppx)/200;
	var yy=-(y-ppy)/50;

	papa.style.transform='perspective(2000px) rotateX('+yy+'deg)'+' '+'rotateY('+xx+'deg)';
	var sdx=xx*5;
	var sdy=-yy*2.5;
	papa.style.boxShadow=sdx+"px "+sdy+"px "+"30px teal";
}
papa.onmouseout=function(){
	papa.style.transform='';
	papa.style.boxShadow='';
}
// 顶部锤子官网效果 end
