import React ,{Component} from  "react";
import {Switch,Route} from "react-router-dom";
import Index from "../view/index/index";
import Jincheng from "../view/jincheng/index";
import TransitionGroup from "react-transition-group/TransitionGroup";


const firstChild = props=>{
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }
class RouterIndex extends Component{
    render(){
        return(
            <Switch>
                <Route path = "/" exact children={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                        {match && <Index {...rest} />}
                    </TransitionGroup>
                )}  />
                <Route path="/index" children={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                        {match && <Index {...rest} />}
                    </TransitionGroup>
                )} />
                <Route path="/jincheng" children={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                        {match && <Jincheng {...rest} />}
                    </TransitionGroup>
                )} />
                {/* <Route path="/gongji" children={({ match, ...rest }) => (
                    <TransitionGroup component={firstChild}>
                        {match && <Gongji {...rest} />}
                    </TransitionGroup>
                )} /> */}
            </Switch>
        )
    }
} 
export default RouterIndex;