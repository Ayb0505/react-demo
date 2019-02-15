import React from 'react';
import {Link,NavLink} from 'react-router-dom';
// import pubsub from 'pubsub-js';

class Shopcar extends React.Component{
    // componentDidMount(){
    //     pubsub.publish('view_loading',true);
    //     setTimeout(()=>{

    //         pubsub.publish('view_loading',false);

    //     },1000)
    // }
    render(){
        return (
            <div>
                <header className="page-header">
                        <h3>购物车</h3>
                </header>
                
                <div className="contaniner fixed-contb">
                    <section className="shopcar">
                        <div className="shopcar-checkbox">
                            <label htmlFor="shopcar"></label>
                            <input type="checkbox" id="shopcar"/>
                        </div>
                        <figure><img src="/assets/images/shopcar-ph01.png"/></figure>
                        <dl>
                            <dt>超级大品牌服装，现在买只要998</dt>
                            <dd>颜色：经典绮丽款</dd>
                            <dd>尺寸：L</dd>
                            <div className="add">
                                <span>-</span>
                                <input type="text" defaultValue="3" />
                                <span>+</span>
                            </div>
                            <h3>￥653.00</h3>
                            <small><img src="/assets/images/shopcar-icon01.png"/></small>
                        </dl>
                    </section>
                    <div style={{marginBottom: "16%rem"}}></div>
                </div>

                <footer className="page-footer fixed-footer">
                    <div className="shop-go">
                        <b>合计：￥108.90</b>
                        <span><Link to="/buy">去结算（2）</Link></span>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/home">
                                <img src="images/footer001.png"/>
                                <p>首页</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/assort">
                                <img src="images/footer002.png"/>
                                <p>分类</p>
                            </NavLink>
                        </li>
                        <li className="active">
                            <NavLink to="/shopcar">
                                <img src="images/footer03.png"/>
                                <p>购物车</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/self">
                                <img src="images/footer004.png"/>
                                <p>个人中心</p>
                            </NavLink>
                        </li>
                    </ul>
                </footer>

            </div>
        )
    }
}

export default Shopcar;