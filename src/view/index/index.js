import React,{Component} from "react";
import "../index.css";
import "antd/lib/date-picker/style/css";
import title1 from './img/title1.png'
import {BackTop,} from 'antd';
import AnimatedWrapper from "../AnimatedWrapper";
import Pwoer from './pwoer'
import Zhengrong from './zhengrong'
import Remember from './Remember'
import Jincheng from '../jincheng/index';
import scrollHandler from './scrollHandler'
// import { element } from "prop-types";

 class  IndexComponent extends Component{
     componentDidMount(){
        window.addEventListener('scroll',scrollHandler);
        this.reAnimate()
     }
     reAnimate =() =>{
        let mainTitle = document.getElementById('mainTitle');
        mainTitle.style.left="25%";
     }
    render(){
        return(
        <div className="mainWrap">
                <div id="artical1" className="artical index" style={{width:"100%"}}>
                    <img src={title1} alt="" id="mainTitle"></img>
                </div>
                <Zhengrong/>
                <div className="artical jincheng" style={{width:"100%"}}>
                    <h1 id="jcTitle">建 国 进 程</h1>
                    <Jincheng></Jincheng>
                </div>
                <Pwoer/>
                <Remember/>
                <BackTop />
        </div>)
    }
}

const Index = AnimatedWrapper(IndexComponent);
export default Index;