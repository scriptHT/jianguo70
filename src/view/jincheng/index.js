import React,{Component} from "react";
import AnimatedWrapper from "../AnimatedWrapper";
import "./jincheng.css"
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";

class  JinchengComponent extends Component{
    constructor(props){
        super(props);
    }
    rotate3D = () => {
        let wrap = document.getElementById("wrap")
        var oImg = wrap.getElementsByTagName("img");
        let imgArr = Array.from(oImg)
        var length = imgArr.length;//获取图片个数
        var deg = 360/length;
        imgArr.map((item,index)=>{
            item.style.transform = "rotateY("+deg*index+"deg) translateZ(350px)";
            item.style.transition = " 2s " + (length-1-index)*0.2 + "s";//设置过度动画
            
        })
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
            wrap.style.transform = "rotateX("+rotX+"deg)  rotateY("+rotY+"deg)";
            //计算之后，新值就变成旧值
            lastX = newX;
            lastY = newY;

            }
            this.onmouseup = function  (e) {
                // 鼠标松开事件
                this.onmousemove = null;//清除鼠标移动事件
            }
        }
        setInterval(()=> {
            rotY+=0.15;
            wrap.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
        },10)
      
    }
    
    componentDidMount(){
        this.rotate3D();
    }
    render(){
        return(
            <div id="mainWrap">
                <div id="perspective">
                    <div id="wrap">
                        <img alt="" src={img1}></img>
                        <img alt="" src={img2}></img>
                        <img alt="" src={img3}></img>
                        <img alt="" src={img4}></img>
                        <img alt="" src={img5}></img>
                        <img alt="" src={img6}></img>
                        <img alt="" src={img7}></img>
                        <img alt="" src={img8}></img>
                        <img alt="" src={img9}></img>
                    </div>
                </div>
            </div>
        )
    }
}
const Jincheng = AnimatedWrapper(JinchengComponent);
export default  Jincheng;