import React,{Component} from "react";
import img1 from './img/slider1.jpg';
import img2 from "./img/slider2.jpg";
import img3 from "./img/slider6.jpg";
import img6 from "./img/slider5.png";
import imgBigBG from "./img/bigBG.png";
import imgBT from "./img/bottom.png";
import ZGM from "./img/ZGM.png";
import GQRT from "./img/GQRT.png";
import {Card } from "antd";
import { Carousel } from 'antd';

export default class  Index extends Component{
    
    render(){
        return(<div className="mainWrap">
            {/* <Card >
                <video
                    className="bgvid"
                    width="100%"
                    height="100%"
                    preload="true"
                    autoPlay
                    loop                    
                >
                <source 
                    src="https://ygiyliul35425.oss-cn-hangzhou.aliyuncs.com/jianguo70/bgvid.mp4?OSSAccessKeyId=LTAIoNvWrHQquMM5&Expires=36201555298956&Signature=38FGaw%2BCMTwBVA2G2ecg6uwSLu8%3D"
                    type="video/mp4"
                />
                </video>
            </Card> */}
            
            <img  style={{
                width:"100%",
                opacity:"0.6",
                float:"left",
                filter: "blur(3px)",
                zIndex:"-9999"
            }}src={imgBigBG}></img>
            <img style={{
                float:"right",
                position:'absolute',
                right:"20px",
                top:'100px',
                width:"13%"
            }}src={ZGM}></img>
            <Carousel autoplay effect="fade" >
                   <div><img src={img1}></img></div>
                   <div><img src={img2}></img></div>
                   <div><img src={img3}></img></div>
                   <div><img src={img6}></img></div>
               </Carousel>
        </div>)
    }
}