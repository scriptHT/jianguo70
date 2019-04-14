import React,{Component} from "react";
import {Layout,Row,Col,Button,Dropdown,Icon,Menu} from "antd";
import {Link} from "react-router-dom";
import "antd/lib/date-picker/style/css";

class MainHeader extends Component {
    render(){
        return(<div className="mainHeader">
            <Layout.Header className="header">
                <Row className="wrap">

                    <Col md={6} xs={24}><h1>Mad Lion</h1></Col>
                    <Menu>
                        {/* <Menu.Item></Menu.Item> */}
                    </Menu>
                    
                </Row>
            </Layout.Header >
        </div>)
    }
}
export default MainHeader;