import React,{Component} from "react";
import "../index.css"
import title1 from './img/title1.png'
import img2 from "./img/slider2.jpg";
import img3 from './img/slider3.jpg';
import img5 from "./img/slider5.jpg";
import img6 from "./img/slider6.jpg";
import sec2img1 from './img/section2img1.png'
import sec2img2 from './img/section2img2.png'
import sec2img3 from './img/section2img3.png'
import sec2img4 from './img/section2img4.png'
import { Carousel ,Card,Row,Col,BackTop,Avatar } from 'antd';
import AnimatedWrapper from "../AnimatedWrapper";
import Jincheng from '../jincheng/index'
// import { element } from "prop-types";

 class  IndexComponent extends Component{
     constructor(props){
        super(props)
        this.state = {
        }
     }
     componentDidMount(){
        window.addEventListener('scroll',this.scrollHandler);
        this.reAnimate()
     }
     reAnimate =() =>{
        let mainTitle = document.getElementById('mainTitle');
        mainTitle.style.left="25%";
     }
     scrollHandler =() =>{
        //  debugger
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let articleHeight = document.getElementById("artical1").clientHeight;
        let article2Height = document.getElementById("artical2").clientHeight;
        let carousel = document.getElementsByClassName("ant-carousel")[0];
        let card1 = document.getElementsByClassName("card1")[0];
        let mainTitle = document.getElementById('mainTitle');
        let card2 = document.getElementsByClassName("card2")[0];
        let card3 = document.getElementsByClassName("card3")[0]
        // console.log(scrollTop > articleHeight*3-300)
        if(scrollTop < 50){
            mainTitle.style.left="25%";
        }else if(scrollTop > 150){
            mainTitle.style.left="-400px";
        }
		if(scrollTop > articleHeight*0.25 && scrollTop < articleHeight){
            // console.log(scrollTop+"!!!!!")
            carousel.style.opacity="1";
            carousel.style.left="0%";
            card1.style.right="5%";
            card1.style.opacity="1";            
		}else if(scrollTop > articleHeight+100 && scrollTop < articleHeight+article2Height){
            // console.log("++++++++++++")
            carousel.style.opacity="0";
            carousel.style.left="25%";
            card1.style.right="50%";
            card1.style.opacity="1"; 
        }else if(scrollTop > articleHeight*2-200 ){
            card2.style.left = "2%";
            card2.style.opacity = "1";
            card3.style.left = "2%";
            card3.style.opacity = "1";
        }else if(scrollTop < articleHeight*2){
            card2.style.left = "-200%";
            card2.style.opacity = "0";
            card3.style.left = "100%";
            card3.style.opacity = "0";
        }
        if(scrollTop > articleHeight*3-300){
            // console.log(Jincheng.rotate3D)
        }
	}
    render(){
        return(
        <div className="mainWrap">
                <div id="artical1" className="artical section1" style={{width:"100%"}}>
                    <img src={title1} alt="" id="mainTitle"></img>
                </div>
                <div id="artical2" className="artical section4" style={{height:"500px" ,width:"100%"}}>
                    <Row>
                        <Col md={12} xs={24}>
                            <Carousel className="carousel"  autoplay  style={{opacity:"0"}} >
                                <div><img alt="" src={img3}></img></div>
                                <div><img alt="" src={img2}></img></div>
                                <div><img alt="" src={img5}></img></div>
                                <div><img alt="" src={img6}></img></div>
                            </Carousel>
                        </Col>
                        <Col md={12} xs={0} >
                            <Card className="card1" title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                                style={{position:"relative",textAlign:"center", }}>
                                <p>从1949年到2019年，弹指之间，新中国将迎来它的第70个年头。中国从一个贫穷落后的国家发展成了如今的第二大经济强国。70年前中国百废待兴，70年后中国百业昌盛!</p>
                                <p>回顾70年前，当时的中国内忧外患，贫困落后。直至1949年新中国成立大会召开，才标志着中国从此结束了一百多年来被侵略、被奴役的屈辱历史，真正的成为了一个独立自主的国家!</p>
                                <p>然而，在新中国成立之初，中国的经济状况以及军事实力还是处于一个相对落后的状态，那时还没有自主研发飞机、坦克的能力，使得阅兵用的那些武器装备大多数都是从别国购买或是缴获维修得来的。而当今的中国，对比70年前，可谓是发生了翻天覆地的变化。辽宁舰横行在辽阔的海洋，歼20驰骋在蔚蓝的天空，99式坦克奔驰在祖国大地。弱国无外交，拥有了强大的军事力量就等于拥有了强大的后盾，它们就是我们说话的底气!使得中国在国际上在外交上有了一定的发言权。</p>
                            </Card>
                        </Col>
                        <Col md={0} xs={24} >
                            <Card className="card1" title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                                style={{ position:"relative",textAlign:"center", }}>
                                <p>回顾70年前，当时的中国内忧外患，贫困落后。直至1949年新中国成立大会召开，才标志着中国从此结束了一百多年来被侵略、被奴役的屈辱历史，真正的成为了一个独立自主的国家!</p>
                            </Card>
                        </Col>
                    </Row>
                
                </div>
                <div className="artical section2" style={{width:"100%"}}>
                    <div className="cover" >
                    </div>
                    <div style={{padding:"0 20%"}}>
                        <Avatar size='large' src={sec2img1}/>
                        <Avatar size='large' src={sec2img2}/>
                        <Avatar size='large' src={sec2img3}/>
                        <Avatar size='large' src={sec2img4}/>
                    </div>
                </div>
                <div className="artical section5" style={{height:"500px" ,width:"100%"}}>
                    <Row>
                        <Col md={12} xs={24}>
                            <Card className="card2" title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                                style={{textAlign:"center", }}>
                                <p>从1949年到2019年，弹指之间，新中国将迎来它的第70个年头。中国从一个贫穷落后的国家发展成了如今的第二大经济强国。70年前中国百废待兴，70年后中国百业昌盛!</p>
                                <p>回顾70年前，当时的中国内忧外患，贫困落后。直至1949年新中国成立大会召开，才标志着中国从此结束了一百多年来被侵略、被奴役的屈辱历史，真正的成为了一个独立自主的国家!</p>
                                <p>回顾70年前，当时的中国内忧外患，贫困落后。直至1949年新中国成立大会召开，才标志着中国从此结束了一百多年来被侵略、被奴役的屈辱历史，真正的成为了一个独立自主的国家!</p>
                            </Card>
                        </Col>
                        <Col md={12} xs={0}>
                            <Card className="card3" title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                                style={{textAlign:"center", }}>
                                <p>从1949年到2019年，弹指之间，新中国将迎来它的第70个年头。中国从一个贫穷落后的国家发展成了如今的第二大经济强国。70年前中国百废待兴，70年后中国百业昌盛!</p>
                                <p>回顾70年前，当时的中国内忧外患，贫困落后。直至1949年新中国成立大会召开，才标志着中国从此结束了一百多年来被侵略、被奴役的屈辱历史，真正的成为了一个独立自主的国家!</p>
                                <p>回顾70年前，当时的中国内忧外患，贫困落后。直至1949年新中国成立大会召开，才标志着中国从此结束了一百多年来被侵略、被奴役的屈辱历史，真正的成为了一个独立自主的国家!</p>
                            </Card>
                        </Col>
                    </Row>
                    {/* <video
                        className="bgvid"
                        width="107%"
                        height="100%"
                        preload="true"
                        autoPlay
                        loop      
                        muted={true}
                        >
                    <source 
                        src="https://ygiyliul35425.oss-cn-hangzhou.aliyuncs.com/jianguo70/bgvid.mp4?OSSAccessKeyId=LTAIoNvWrHQquMM5&Expires=36201555298956&Signature=38FGaw%2BCMTwBVA2G2ecg6uwSLu8%3D"
                        type="video/mp4" />
                    </video> */}
                </div>
                <div className="artical section3" style={{width:"100%"}}>
                    <Jincheng></Jincheng>
                </div>
                <BackTop />
        </div>)
    }
}

const Index = AnimatedWrapper(IndexComponent);
export default Index;