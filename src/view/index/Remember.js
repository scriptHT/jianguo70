import React, { Component } from 'react';
import "../index.css";
import { Card,Row,Col,Collapse,Icon } from 'antd';
import data from './data'

class Remember extends Component {
  render() {
    const Panel = Collapse.Panel;
    return (
        <div id="artical5" className="artical remember" style={{height:"800px" ,width:"100%"}}>
            <h1 id="reTitle">周年纪念</h1>
            <Row>
                <Col md={24} xs={24}>
                <Collapse className="remCollapse" accordion defaultActiveKey={['1']}>
                    <Panel header={data.remember[0].title} key="1">
                        <Card className="card3"  bordered={false} hoverable='true'
                            style={{textAlign:"center"}}>
                            <img src={data.remember[0].path} style={{height:"200px" ,width:"200px"}} alt="纪念币"></img>
                            <p>{data.remember[0].txt}</p>
                        </Card>
                    </Panel>
                    <Panel header={data.remember[1].title} key="2">
                        <Card className="card3" bordered={false} hoverable='true'
                            style={{textAlign:"center", }}>
                            <img src={data.remember[1].path} style={{height:"200px" ,width:"300px"}} alt="纪念币"></img>
                            <p>{data.remember[1].txt}</p>
                        </Card>
                    </Panel>
                    <Panel header={data.remember[2].title} key="3">
                        <Card className="card3" bordered={false} hoverable='true'
                            style={{textAlign:"center", }}>
                            <img src={data.remember[2].path} style={{height:"200px" ,width:"300px"}} alt="纪念币"></img>
                            <p>{data.remember[2].txt}</p>
                        </Card>
                    
                    </Panel>
                </Collapse>
                </Col>
            </Row>
            {/* <video
                className="bgvid"
                width="107%"
                height="100%"
                preload="true"
                autoPlay
                loop      
                muted={true}
                >
            <source 
                src="https://ygiyliul35425.oss-cn-hangzhou.aliyuncs.com/jianguo70/bgvid.mp4?OSSAccessKeyId=LTAIoNvWrHQquMM5&Expires=36201555298956&Signature=38FGaw%2BCMTwBVA2G2ecg6uwSLu8%3D"
                type="video/mp4" />
            </video> */}
        </div>
    );
  }
}

export default Remember;
