import React,{Component} from "react";
import {Layout,Row,Col,Button,Dropdown,Icon,Menu} from "antd";
import {Link} from "react-router-dom";
import Nav from "./nav";
import imgLogo from './index/img/logo.png';
import "antd/lib/date-picker/style/css";

class MainHeader extends Component {
    render(){
        return(<div className="mainHeader">
            <Layout.Header id="header">
                <Row >
                    <Col md={6} xs={24} >
                        {/* <h1 id='logo'> */}
                        <img id="logoImg" src={imgLogo}/>
                        {/* Mad Lion</h1> */}
                    </Col>
                    <Col md={18} xs={0}>
                        <Nav mode="horizontal" id="nav"/>
                    </Col>
                    <Col md={0} xs={24} className="xsMenu">
                        <Dropdown overlay={
                            // <Nav mode="vertical" id="nav"/> 
                            <Menu mode="vertical" id='nav'>
                                <Menu.Item key ="index"><Link to="/index"><Icon type="home" />欢庆70</Link></Menu.Item>
                                <Menu.Item key ="jincheng"><Link to="/jincheng"><Icon type="file-protect" />建国进程</Link></Menu.Item>
                                <Menu.Item key ="gongji"><Link to="/gongji"><Icon type="dollar" />建国功绩</Link></Menu.Item>
                            </Menu>
                        }   
                            trigger = {["click","touched"]}
                            placement = "bottomRight"
                        >
                            <Button> <Icon type="bars"></Icon></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header >
        </div>)
    }
}
export default MainHeader;