import React, { Component } from 'react';
import "../index.css";
import { Card,Carousel ,Row,Col} from 'antd';
import data from './data'

class Zhengrong extends Component {
  render() {
    //   console.log(data)
    return (
        <div id="artical2" className="artical zhengrong" style={{height:"800px" ,width:"100%"}}>
            <h1 id="zrTitle">峥 嵘 岁 月</h1>
            <Row>
                <Col md={12} xs={24}>
                    <Carousel className="carousel"  autoplay  style={{opacity:"0"}} >
                        <div><img alt="" src={data.zhengrong[0].path}></img></div>
                        <div><img alt="" src={data.zhengrong[1].path}></img></div>
                        <div><img alt="" src={data.zhengrong[2].path}></img></div>
                        <div><img alt="" src={data.zhengrong[3].path}></img></div>
                    </Carousel>
                </Col>
                <Col md={12} xs={0} >
                    <Card className="card1" title="盛世华诞，峥嵘岁月" bordered={false} hoverable='true'
                        style={{position:"relative",textAlign:"center", }}>
                        <p>{data.zhengrong[0].txt}</p>
                        <p>{data.zhengrong[1].txt}</p>
                        <p>{data.zhengrong[2].txt}</p>
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
