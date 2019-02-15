import React from 'react';

class Address extends React.Component{
    render(){
        return (
            <>
            <header className="top-header fixed-header">
                <a className="icona" href="javascript:;" onClick={()=>{this.props.history.go(-1)}}>
                        <img src="/assets/images/left.png"/>
                    </a>
                <h3>男装专区</h3>
                    
                    <a className="text-top" href="go-address.html">
                        添加
                    </a>
            </header>
            
            <div className="contaniner fixed-conta">
                <dl className="address">
                    <a href="go-address.html">
                        <dt>
                            <p>弱小喵</p>
                            <span>17756084251</span>
                            <small>默认</small>
                        </dt>
                        <dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806</dd>
                    </a>
                </dl>
            </div>
            </>
        )
    }
}

export default Address;