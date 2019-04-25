import React,{Component} from "react";
import {Menu,Icon} from "antd";
import {Link} from "react-router-dom";

class Nav extends Component{
    scrollToAnchor = (name) => {
        if (name) {
            let name1 = document.getElementsByClassName(name)[0];
            let name2 = document.getElementById(name);
            // console.log(name1+"!!"+name2)
            if(name1) { name1.scrollIntoView({block: 'start', behavior: 'smooth'}); }
            if(name2) { name2.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
      }
    render(){
        let {mode,id} = this.props;
        return(<div>
            <Menu  mode={mode} id={id} >
                <Menu.Item onClick={this.scrollToAnchor.bind(this,"artical1")} key ="index"><Link to="/index"><Icon type="home" />首页</Link></Menu.Item>
                <Menu.Item onClick={this.scrollToAnchor.bind(this,"zhengrong")} key ="zhengrong"><Icon type="rise" />峥嵘岁月</Menu.Item>
                <Menu.Item onClick={this.scrollToAnchor.bind(this,"jincheng")} key ="jincheng"><Icon type="menu-unfold" />建国进程</Menu.Item>
                <Menu.Item onClick={this.scrollToAnchor.bind(this,"artical4")} key ="pwoer"><Icon type="poweroff" />中国力量</Menu.Item>
                <Menu.Item onClick={this.scrollToAnchor.bind(this,"artical5")} key ="remember"><Icon type="star" />周年纪念</Menu.Item>
            </Menu>
        </div>)
    }
}
export default Nav;