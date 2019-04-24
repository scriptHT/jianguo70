import React, { Component } from 'react';
import "../index.css";
import { Card,Avatar} from 'antd';
import data from './data';
class PowerCard2 extends Component{
    avatarAnim2 = (index) =>{
        let powerCard2 = document.getElementsByClassName('powerCard2');
        powerCard2[index].style.backgroundColor="rgba(255,255,255,0.8)";
    }
    avatarBack2 = () => {
        let powerCard2 = document.getElementsByClassName('powerCard2');
        Array.from(powerCard2).map((item,index)=>{
            return powerCard2[index].style.backgroundColor="rgba(255,255,255,0.4)";
        })
    }
    render(){
        const { Meta } = Card;
        return(
            data.power.map((item,index)=>(
                <Card className="powerCard2" 
                key={index}
                onMouseOut={this.avatarBack2} 
                onMouseOver={this.avatarAnim2.bind(this,index)} 
                style={{ backgroundColor:"rgba(255,255,255,0.4)", 
                margin:"auto",marginTop:"3%"}} 
                hoverable="true">
                <Meta
                    avatar={<Avatar src={item.path} />}
                    title={item.title}
                    description={item.txt} />
                </Card>
            ))

        )
    }
}
export default PowerCard2