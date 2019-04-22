import React,{Component} from "react";
import AnimatedWrapper from "../AnimatedWrapper";
import "./jincheng.css";
import $ from "jquery";
import "./coolShow.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import {Row,Col} from "antd";
var ppp=['asdfsa','dsajhfgiohdsagoi','s1234567'];
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
            return 0
        })
        var rotX = -20 ,rotY = 0;
        setInterval(()=> {
            rotY+=0.15;
            wrap.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
        },10)
    }
    constructor(props){
        super(props);
        this.state={
            id:"",
        }
    }
    imgShow=(e)=>{  
        this.setState({
            id:e.target.id,
            imgSrc:e.target.src,
            name:'',
            pshow:'block',
            content:ppp[this.state.id]
        }) 
        let ImgSrcs=  e.target.src;
    
            $('#coolShow b').remove();
            /*     生成图片的载体    */
            for (var i = 0;i<($("#coolShow").height()/10);i++) $('#coolShow').append('<b></b>');
            console.log($("#coolShow").height());
            /*     图片显示特效    */
            var psn = 0;
            // var imgId = $(this).children().data('img');
            $('#coolShow b').each(function(){
                $(this).css({
                    opacity:0,
                    backgroundPosition:"0 "+psn+"px",
                    backgroundImage:'url("'+ImgSrcs+'")'
                });
                psn -= 10;
            });
            var time = 0;
            $('#coolShow b').each(function(){
                $(this).delay(time).animate({opacity:"1"},500);
                time += 40;
            });  
}
    componentDidMount(){
        window.Jincheng = this
        // this.rotate3D();
    }
    // componentWillUnmount()
    getIndex = id => {
        let graph1=document.getElementById('graph1');
        graph1.style.backgroundImage="url(./img/1.jpg)";
        console.log(graph1.style.backgroundImage)
        this.setState({
            id:id
        })
        console.log(id)
    };
    render(){
        return(
            <div id="mainWrap">
            <Row>
                <Col  xl={12} md={24} xs={24}>
                    <div id="perspective"  onClick={(e)=>this.imgShow(e)}>
                        <div id="wrap" >
                        <img id="8" alt="" src={img1}></img>
                        <img id="0" alt="" src={img2}></img>
                        <img id="1" alt="" src={img3}></img>
                        <img id="2" alt="" src={img4}></img>
                        <img id="3" alt="" src={img5}></img>
                        <img id="4" alt="" src={img6}></img>
                        <img id="5" alt="" src={img7}></img>
                        <img id="6" alt="" src={img8}></img>
                        <img id="7" alt="" src={img9}></img>
                    
                        </div>
                    </div>
                </Col>

                <Col xl={12} md={0} xs={0}>
                    <div id="graph1">
                        <div className="main">
                            <div id="coolShow"></div>
                        </div>
                    </div>
                </Col>

                <Col xl={0} md={0} xs={24}>
                    <div id="graph2" style={{height:"300px",width:"90%"}}></div>
                </Col>
            </Row>
            </div>
        )
    }
}
const Jincheng = AnimatedWrapper(JinchengComponent);
export default  Jincheng;
