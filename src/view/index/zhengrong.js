import React, { Component } from 'react';
import "../index.css";
import { Card,Carousel ,Row,Col,Popover, Button} from 'antd';
import data from './data'
import img1 from "./img/cz.jpg"
import img2 from "./img/song.jpg"
import img3 from "./img/nj.jpg"
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

class Zhengrong extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1,
        }
    }
 txtShow=(e)=>{
     this.setState({
        id:e
    }) 

     
 };
  render(){
    return (
        <div id="artical2" className="artical zhengrong" style={{height:"800px" ,width:"100%"}}>
            <h1 id="zrTitle">峥 嵘 岁 月</h1>
            <Row>
                <Col md={12} xs={24}>
                    <Carousel className="carousel"  autoplay  style={{opacity:"0"}} >
                        <div><img alt="" src={data.zhengrong[0].path}></img></div>
                        <div><img alt="" src={img1}></img></div>
                        <div><img alt="" src={img2}></img></div>
                        <div><img alt="" src={img3}></img></div>
                    </Carousel>
                </Col>
                <Col md={12} xs={0} >
                    <Card className="card1" title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                        style={{position:"relative",textAlign:"center"}}>
<div className="demo">
  <div onClick={()=>this.txtShow(0)}  className="butcommon" > <Button>图1</Button> </div>
  <div onClick={()=>this.txtShow(1)} className="butcommon1" > <Button>图2</Button></div>
  <div className="cardtxt"><p>{data.zhengrong[this.state.id].txt}</p></div>
  <div onClick={()=>this.txtShow(2)}  className="butcommon2" > <Button>图3</Button></div>
  <div onClick={()=>this.txtShow(3)} className="butcommon3" > <Button>图4</Button></div>
  </div>
                    </Card>
                </Col>
                <Col md={0} xs={24} >
                    <Card className="card1" title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                        style={{ position:"relative",textAlign:"center", }}>
                        <p>{data.zhengrong[1].txt}{data.zhengrong[2].txt}</p>
                    </Card>
                </Col>
            </Row>
                
   </div>
    );
  }
}

export default Zhengrong;
