import React ,{Component} from  "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "../view/index/index";
import Jincheng from "../view/jincheng/index";
import Xianfeng from "../view/xianfeng/index";
import Gongji from "../view/gongji/index";

class RouterIndex extends Component{
    render(){
        return(
            <Switch>
                <Route path = "/" exact render={()=>(
                    <Redirect to="/index" />
                )}  />
                <Route path="/index" component={Index} />
                <Route path="/jincheng" component={Jincheng} />
                <Route path="/xianfeng" component={Xianfeng} />
                <Route path="/gongji" component={Gongji} />
            </Switch>
        )
    }
} 
export default RouterIndex;