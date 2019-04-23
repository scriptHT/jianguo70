import React, { Component } from 'react';
import "../index.css";
import {Row ,Col} from 'antd';
import PowerCard from "./powerCard"
import PowerCard2 from "./powerCard2"

class Pwoer extends Component {
    render() {
    return (
        <div id = "artical4" className="artical power" style={{width:"100%"}}>
        <div className="cover" ></div>
        <div  style={{padding:"0 10%"}}>
        <h1 id="powerTitle">中国力量</h1>
        <Row>
            <Col md={24} xs={0} style={{width:"100%",marginTop:"-80px"}}>
            <PowerCard />
            </Col>
            <Col md={0} xs={24}>
            <PowerCard2 />
            </Col>
        </Row>
        </div>
    </div>
    );
  }
}

export default Pwoer;
