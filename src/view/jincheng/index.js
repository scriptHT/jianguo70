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
import {Row,Col} from "antd"

class  JinchengComponent extends Component{
    
    rotate3D = () => {
        let wrap = document.getElementById("wrap")
        var oImg = wrap.getElementsByTagName("img");
        let imgArr = Array.from(oImg)
        var length = imgArr.length;//获取图片个数
        var deg = 360/length;
        imgArr.map((item,index)=>{
            // console.log(item.style.transform)
            item.style.transform = "rotateY("+deg*index+"deg) translateZ(350px)";
            item.style.transition = " 2s " + (length-1-index)*0.2 + "s";//设置过度动画
        })
        var rotX = -20 ,rotY = 0;
        setInterval(()=> {
            rotY+=0.15;
            wrap.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
        },10)
    }
    componentDidMount(){
        this.rotate3D();
        // this.getIndex()
    }
    // componentWillUnmount()
    getIndex = index => {
        debugger
        console.log(index);
    };
    getPic = (e)=>{
        let pics = document.querySelectorAll('#wrap img');
        Array.prototype.map.call(pics,(item,index) => {
            // this.getIndex.bind(this,index)();
            item.addEventListener('click' , this.getIndex.bind(this, index));
        });
    };
    constructor(props){
        super(props);
        this.getPic = this.getPic.bind(this);
        // this.getIndex = this.getIndex.bind(this)
    }
    render(){
        this.getPic();
        return(
            <div id="mainWrap">
            <Row>
                <Col md={12} xs={24}>
                    <div id="perspective">
                        <div id="wrap" >
                            <img id="img1"  alt="" src={img1}></img>
                            <img id="img2"  alt="" src={img2}></img>
                            <img id="img3"  alt="" src={img3}></img>
                            <img id="img4"  alt="" src={img4}></img>
                            <img id="img5"  alt="" src={img5}></img>
                            <img id="img6"  alt="" src={img6}></img>
                            <img id="img7"  alt="" src={img7}></img>
                            <img id="img8"  alt="" src={img8}></img>
                            <img id="img9"  alt="" src={img9}></img>
                        </div>
                    </div>
                </Col>
                <Col md={12} xs={0}>
                    <div id="graph1" style={{}}></div>
                </Col>
                <Col md={12} xs={0}>
                    <div id="graph2" style={{}}></div>
                </Col>
            </Row>
            </div>
        )
    }
}
const Jincheng = AnimatedWrapper(JinchengComponent);
export default  Jincheng;