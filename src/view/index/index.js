import React,{Component} from "react";
import img1 from './img/slider1.jpg';
import img2 from "./img/slider2.jpg";
import img5 from "./img/slider5.jpg";
import img6 from "./img/slider6.jpg";
import ZGM from "./img/ZGM.png";
import imgBigBG from "./img/bigBG.png"
import { Carousel ,Card} from 'antd';
import AnimatedWrapper from "../AnimatedWrapper";

 class  IndexComponent extends Component{
    
    render(){
        return(<div className="mainWrap">
            {/* <Card >
                <video
                    className="bgvid"
                    width="107%"
                    height="100%"
                    preload="true"
                    autoPlay
                    loop      
                    muted="true"              
                >
                <source 
                    src="https://ygiyliul35425.oss-cn-hangzhou.aliyuncs.com/jianguo70/bgvid.mp4?OSSAccessKeyId=LTAIoNvWrHQquMM5&Expires=36201555298956&Signature=38FGaw%2BCMTwBVA2G2ecg6uwSLu8%3D"
                    type="video/mp4"
                />
                </video>
            </Card> */}
            
            {/* <h1>盛世华诞</h1>
            <h1>峥嵘岁月</h1> */}
            
            <img style={{
                float:"right",
                position:'absolute',
                right:"20px",
                top:'10%',
                width:"13%",
                zIndex:"99"
            }}src={ZGM}></img>

            <Carousel className="Carousel"  autoplay  >
                   <div><img src={img1}></img></div>
                   <div><img src={img2}></img></div>
                   <div><img src={img5}></img></div>
                   <div><img src={img6}></img></div>
               </Carousel>
            <div >
                
                    {/* <img  style={{
                    width:"100%",
                    opacity:"0.7",
                    float:"left",
                    filter: "blur(3px)",
                    zIndex:"-99"
                    }}src={imgBigBG}></img> */}
                    
                    <Card title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                        cover={<img  style={{
                            width:"100%",
                            opacity:"0.7",
                            float:"left",
                            filter: "blur(3px)",
                            zIndex:"-99"
                            }}src={imgBigBG}></img>}
                        style={{opacity:"0.8", position:"relative", width: "100%",textAlign:"center", }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
            </div>
        </div>)
    }
}

const Index = AnimatedWrapper(IndexComponent);
export default Index;