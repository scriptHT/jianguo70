import React,{Component} from "react";
import imgBT from "../view/index/img/bottom.png";

class MainFooter extends Component{
    render(){
        return(<div className="mainFooter">
            <img style={{
                position:'absolute',
                right:"0",
                width:"100%",
                height:"100%",
            }}src={imgBT}></img>
        </div>)
    }
}
export default MainFooter;