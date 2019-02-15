import React from 'react';
import {Link} from 'react-router-dom';
import Slider from '../../common/Slider/Slider';
import Data from "../../common/Data/Data";
// import pubsub from 'pubsub-js';

import {connect} from 'react-redux';

import * as types from "../../store/types";
import asyncList from "../../store/actions/asynList";

class Home extends React.Component{
    constructor(props){
        super();
        props.get();
    }
    // state={
    //     list:[]
    // }
    // componentDidMount(){

    //     // pubsub.publish('view_loading',true);
    
    //     fetch(
    //       `/data/index.data`
    //     ).then(
    //       res=>res.json()
    //     ).then(
    //       data=>{
    //         setTimeout(()=>{
    
    //         //   pubsub.publish('view_loading',false);
    
    //           this.setState({list:data});
    //         },1000)
    //       }
    //     )
    // }
    render(){
        let {home} = this.props;
        return (
            <>
            <header className="page-header">
                <h3>商城</h3>
            </header>

            <div className="contaniner fixed-contb">
                
                <Slider></Slider>
                
                <section className="shop">
                    <h3>
                        <a href="#">
                            服装
                            <span><img src="/assets/images/right.png"/></span>
                        </a>
                    </h3>
                    <dl>
                        <dd>
                            <Link to="/list">
                                <img src="/assets/images/index-ph01.png"/>
                                <b>男装</b>
                            </Link>
                        </dd>
                        <dd>
                            <Link to="/list">
                                <img src="/assets/images/index-ph02.png"/>
                                <b>女装</b>
                            </Link>
                        </dd>
                    </dl>
                </section>
                
                <section className="shop">
                    <h3>
                        <Link to="/list">
                            食品
                            <span><img src="/assets/images/right.png"/></span>
                        </Link>
                    </h3>
                    <dl>
                        <dd>
                            <Link to="/list">
                                <img src="/assets/images/index-03.png"/>
                                <b>切糕</b>
                            </Link>
                        </dd>
                        <dd>
                            <Link to="/list">
                                <img src="/assets/images/index-ph04.png"/>
                                <b>酥饼</b>
                            </Link>
                        </dd>
                    </dl>
                </section>
            </div>

            {/* <Data list={this.state.list} dataName="home"/> */}
            <Data list={home} dataName="home"/>

            </>
        )
    }
}

const initMapStateToProps=state=>({
    home:state.home,
});
const initMapDispatchToProps=dispatch=>({
    get:()=>dispatch(asyncList({
        url:'/data/index.data',
        type:types.UPDATE_HOME
    }))
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home);

// export default Home;