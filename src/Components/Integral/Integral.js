import React from 'react';
import {Link} from 'react-router-dom';
import Data from "../../common/Data/Data";

import {connect} from 'react-redux';

import * as types from "../../store/types";
import asyncList from "../../store/actions/asynList";

class Integral extends React.Component{
    // state={
    //     list:[]
    // }
    componentDidMount(){
        // fetch(
        //     `/data/follow.data`
        // ).then(
        //     res=>res.json()
        // ).then(
        //     data=>this.setState({list:data})
        // )
        this.props.get();
    }
    render(){
        return (
            <div>
                    <header className="top-header fixed-header">
                <a className="icona" href="javascript:history.go(-1)">
                        <img src="/assets/images/left.png"/>
                    </a>
                <h3>我的积分</h3>
                    
                    <Link className="iconb" to="/shopcar">
                    </Link>
            </header>
            
            <div className="contaniner fixed-conta">
                <section className="integral">
                    <h3>3600</h3>
                    <dl>
                        <dd>
                            <p>购物返积分</p>
                            <time>2015-12-04 14:53</time>
                        </dd>
                        <dt>+50积分</dt>
                    </dl>
                    <dl>
                        <dd>
                            <p>购物返积分</p>
                            <time>2015-12-04 14:53</time>
                        </dd>
                        <dt>+50积分</dt>
                    </dl>
                    <dl>
                        <dd>
                            <p>购物返积分</p>
                            <time>2015-12-04 14:53</time>
                        </dd>
                        <dt>+50积分</dt>
                    </dl>
                    <dl>
                        <dd>
                            <p>购物返积分</p>
                            <time>2015-12-04 14:53</time>
                        </dd>
                        <dt>+50积分</dt>
                    </dl>
                    <dl>
                        <dd>
                            <p>购物返积分</p>
                            <time>2015-12-04 14:53</time>
                        </dd>
                        <dt>+50积分</dt>
                    </dl>
                </section>
            </div>
            
             <Data list={this.props.integral} dataName="follow"/>

            </div>

        )
    }
}

const initMapStateToProps=state=>({
    integral:state.integral,
});
const initMapDispatchToProps=dispatch=>({
    get:()=>dispatch(asyncList({
        url:'/data/follow.data',
        type:types.UPDATE_INTEGRAL
    }))
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Integral);


// export default Integral;