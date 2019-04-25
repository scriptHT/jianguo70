import React,{Component} from "react";
import {Layout,Row,Col,Button,Dropdown,Icon,Menu} from "antd";
import {Link} from "react-router-dom";
import Nav from "./nav";
import imgLogo from './index/img/logo.png';
import "antd/lib/date-picker/style/css";

class MainHeader extends Component {
    scrollToAnchor = (name) => {
    if (name) {
        let anchorElement = document.getElementsByClassName(name)[0];
        let anchorElement2 = document.getElementById(name);
        if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        if(anchorElement2) { anchorElement2.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
  }
    render(){
        return(<div className="mainHeader">
            <Layout.Header id="header">
                <Row >
                    <Col md={6} xs={24} >
                        {/* <h1 id='logo'> */}
                        <img id="logoImg" alt="" src={imgLogo}/>
                        {/* Mad Lion</h1> */}
                    </Col>
                    <Col md={18} xs={0}>
                        <Nav mode="horizontal" id="nav"/>
                    </Col>
                    <Col md={0} xs={24} className="xsMenu">
                        <Dropdown overlay={
                            // <Nav mode="vertical" id="nav"/> 
                            <Menu mode="vertical" id='nav'>
                                <Menu.Item onClick={this.scrollToAnchor.bind(this,"artical1")} key ="index"><Link to="/index"><Icon type="home" />首页</Link></Menu.Item>
                                <Menu.Item onClick={this.scrollToAnchor.bind(this,"zhengrong")} key ="zhengrong"><Icon type="rise" />峥嵘岁月</Menu.Item>
                                <Menu.Item onClick={this.scrollToAnchor.bind(this,"jincheng")} key ="jincheng"><Icon type="menu-unfold" />建国进程</Menu.Item>
                                <Menu.Item onClick={this.scrollToAnchor.bind(this,"artical4")} key ="pwoer"><Icon type="poweroff" />中国力量</Menu.Item>
                                <Menu.Item onClick={this.scrollToAnchor.bind(this,"artical5")} key ="remember"><Icon type="star" />周年纪念</Menu.Item>
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