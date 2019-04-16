import React,{Component} from "react";
import {Menu,Icon} from "antd";
import {Link} from "react-router-dom";

class Nav extends Component{
    render(){
        let {mode,id} = this.props;
        return(<div>
            <Menu  mode={mode} id={id} >
                <Menu.Item key ="index"><Link to="/index"><Icon type="home" />欢庆70</Link></Menu.Item>
                <Menu.Item key ="jincheng"><Link to="/jincheng"><Icon type="file-protect" />建国进程</Link></Menu.Item>
                <Menu.Item key ="gongji"><Link to="/gongji"><Icon type="dollar" />建国功绩</Link></Menu.Item>
            </Menu>
        </div>)
    }
}
export default Nav;