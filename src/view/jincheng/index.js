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
    render(){
        return(
            <div>
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                <img src={img4}></img>
                <img src={img5}></img>
                <img src={img6}></img>
                <img src={img7}></img>
                <img src={img8}></img>
                <img src={img9}></img>
            </div>
        )
    }
}
const Jincheng = AnimatedWrapper(JinchengComponent);
export default  Jincheng;