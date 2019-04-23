import React, { Component } from 'react';
import "../index.css";
import { Card,Avatar} from 'antd';
import data from './data';
class PowerCard extends Component{
    avatarAnim = (index)=>{
        let avatars = document.getElementsByClassName('avatar');
        let txts = document.getElementsByClassName('txt');
        let sec2Cards = document.getElementsByClassName('sec2Card');
        avatars[index].style.top="0px";
        avatars[index].style.width="130px";
        avatars[index].style.height="130px"
        txts[index].style.top="0px";
        txts[index].style.opacity='1';
        sec2Cards[index].style.backgroundColor="rgba(175,141,139,0.8)";
    }
    render(){
        return(
            data.power.map((item,index)=>(
                <Card className="sec2Card"  
                    key={index}
                    onMouseOver={this.avatarAnim.bind(this,index)} 
                    bordered={false} hoverable='true'
                    style={{textAlign:"center", }}
                >
                    <Avatar className="avatar"   size='large' src={item.path}/>
                    <p className="txt">{item.txt}</p>
                </Card>
            ))

        )
    }
}
export default PowerCard