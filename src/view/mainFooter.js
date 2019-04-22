import React,{Component} from "react";
import "./index.css";
import "antd/lib/date-picker/style/css";
class MainFooter extends Component{
    render(){
        return(
        <div id="mainFooter" style={{
            height:"64px",
            textAlign: "center",
            backgroundColor: "rgb(241,227,218)",}}>
            <h1 style={{color:"rgb(177,139,137)",fontSize:"40px",margin:"0px auto"}}>热烈庆祝祖国70诞辰！</h1>
        </div>)
    }
}
export default MainFooter;