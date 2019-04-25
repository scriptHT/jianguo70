
var OPimg=document.getElementById("perspective");
var oImg = document.getElementsByTagName("img");
var DS=document.getElementById("prebg");
var wrap=document.getElementById("wrap");
var txt=document.getElementById("txt");
var pp=document.getElementsByTagName("p");
var length = oImg.length;//获取图片个数
var deg = 360/length;
//然后设置一个角度；为每张图片的偏转角度

window.onload = function  () {
	Array.prototype.forEach.call(oImg,function  (ele,index,self) {
		ele.style.transform = "rotateY("+deg*index+"deg) translateZ(400px)";
		ele.style.transition = " 2s " + (length-index)*0.2 + "s";//设置过度动画
	});
	
 }//当页面加载完毕再执行

/*
	拖拽
	鼠标按住拖动，改变相册的transform rotateX & Y值
	按下鼠标不松开，拖动过程中，计算
	松开鼠标->停止计算
	鼠标移动终点减去起点的位置==>差值-->就是相册的移动距离
*/

var oWrap = document.getElementById('wrap');
var newX,newY,lastX,lastY,minusX,minusY,rotX = -20 ,rotY = 0;
document.onmousedown = function  (e) {
	//鼠标点击事件
	//最开始的旧值等于第一次点击时产生的XY
	lastX = e.clientX;
	lastY = e.clientY
	this.onmousemove = function  (e) {
	// 鼠标移动事件
	//最新的XY值
	newX = e.clientX;
	newY = e.clientY;
	//计算差值
	minusX = newX - lastX;
	minusY = newY - lastY;
	//差值累加成旋转距离
	rotX -= minusY*0.15;
	rotY += minusX*0.15;
	oWrap.style.transform = "rotateX("+rotX+"deg)  rotateY("+rotY+"deg)";
	//计算之后，新值就变成旧值
	lastX = newX;
	lastY = newY;

	}
	this.onmouseup = function  (e) {
		// 鼠标松开事件
		this.onmousemove = null;//清除鼠标移动事件
	}
}
/*
	我想让它自己转
	然后当鼠标放在某一张照片上时，将这张照片放正中，并放大一点，停止转动
	怎么办？
	实际上是改变rotateY
	在图片首次渲染位置完成后，开始旋转
	setTimeout()
	设置定时器，让rotateY随时间增大
	setInterval()
	给照片设置mouseover事件，
	鼠标放上去，清除定时器。
*/
function stop (argument) {
	var X = setInterval(function  () {
		rotY+=0.15;
		oWrap.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
	},10)
	Array.prototype.forEach.call(oImg,function (ele,index,self) {
		ele.onmouseover = function  () {
			clearInterval(X);
			ele.style.transform = "rotateY("+deg*index+"deg) scale(2)  translateZ(420px)";
			ele.style.transition = " 0.5s ";//设置过度动画
			pp[index].style.display="block";
		};
		ele.onmouseout = function  () {
			ele.style.transform = "rotateY("+deg*index+"deg) translateZ(350px)";
			X = setInterval(function  () {
				rotY+=0.15;
				oWrap.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
			},10)
			pp[index].style.display="none";
		}
	});
}
setTimeout(stop,3700);
	