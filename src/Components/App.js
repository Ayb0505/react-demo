import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
// import pubsub from 'pubsub-js';

import Address from './Address/Address';
import Home from './Home/Home';
import Assess from './Assess/Assess';
import Assort from './Assort/Assort';
import Buy from './Buy/Buy';
import Detail from './Detail/Detail';
import Integral from './Integral/Integral';
import List from './List/List';
import Login from './Login/Login';
import Mycollect from './Mycollect/Mycollect';
import Order from './Order/Order';
import Self from './Self/Self';
import Shopcar from './Shopcar/Shopcar';
import Sign from './Sign/Sign';
import Error from '../common/Error/Error';

import Foot from '../common/Foot/Foot';
import Loading from '../common/Loading/Loading';
import Auth from '../guard/Auth';

import {connect} from 'react-redux'
import * as types from '../store/types'

class App extends React.Component {

    // constructor(){
    //     super();
    
    //     this.state={
    //       bFoot:true,
    //       bLoading:false
    //     };

    //   //订阅loading请求
    //   pubsub.subscribe('view_loading',(mess,bl)=>{
    //     // console.log('app_loading',bl);
    //     this.setState({bLoading:bl})
    //   })

    // }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps.location.pathname);
    
        //监听路由
        let path = nextProps.location.pathname;
        this.watchRouter(path)
    }

    watchRouter(path){
        
        let {
            // viewLoading,
            viewFoot}=this.props;
    
        if (/home|assort|shopcar|self/.test(path)){
        //   this.setState({bLoading:true,bFoot:true})
        
            // viewLoading(true);
            viewFoot(true)
        }
        if (/login|list|detail|address|assess|buy|integral|mycollect|order|sign/.test(path)){
        //   this.setState({bLoading:false,bFoot:false})
            // viewLoading(false);
            viewFoot(false)
        }

    }

    componentDidMount(){
        let path = this.props.location.pathname;
        this.watchRouter(path)
    }

    render() {
        let {bFoot,bLoading} = this.props;
        return (
                <>
                
                {/* {this.state.bLoading && <Loading/>} */}
                {bLoading && <Loading/>}

                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/address' component={Address}></Route>
                    <Route path='/assess' component={Assess}></Route>
                    <Route path='/assort' component={Assort}></Route>
                    <Route path='/buy' component={Buy}></Route>
                    <Route path='/integral' component={Integral}></Route>
                    <Route path='/list' component={List}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/mycollect' component={Mycollect}></Route>
                    <Route path='/order' component={Order}></Route>
                    {/* <Route path='/self' component={Self}></Route> */}
                    <Auth path='/self' component={Self}></Auth>
                    <Route path='/shopcar' component={Shopcar}></Route>
                    <Route path='/sign' component={Sign}></Route>

                    <Redirect exact from="/" to="/home"></Redirect>
                    <Route component={Error} />
                </Switch>
                    {/* {this.state.bFoot && <Foot/>} */}
                    {bFoot && <Foot/>}
                </>
        )
    }
}

const initMapStateToProps=state=>({
    bFoot:state.bFoot,
    bLoading:state.bLoading,
  });
  const initMapDispatchToProps=dispatch=>({
    // viewLoading:(bl)=>dispatch({type:types.VIEW_LOADING,payload:bl}),
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(App);