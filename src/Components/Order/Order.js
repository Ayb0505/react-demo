import React from 'react';
import {Link} from 'react-router-dom';

class Order extends React.Component{
    render(){
        return (
            <div>
                    <header className="top-header fixed-header">
                <a className="icona" href="javascript:history.go(-1)">
                        <img src="/assets/images/left.png"/>
                    </a>
                <h3>全部订单</h3>
                    <Link className="iconb" to="/shopcar">
                    </Link>
            </header>
            
            <div className="contaniner fixed-conta">
                <section className="order">
                    <dl>
                        <dt>
                            <time>2015-11-15 22:55:59</time>
                            <span>待发货</span>
                        </dt>
                        <ul>
                            <Link to="/detail">
                                <figure><img src="/assets/images/classify-ph03.png"/></figure>
                                <li>
                                    <p>超级大品牌服装，现在够级大品牌服装，现在够买只要998</p>
                                    <small>颜色：经典绮丽款</small>
                                    <span>尺寸：XL</span>
                                    <b>￥32.00</b>
                                    <strong>×3</strong>
                                </li>
                            </Link>
                        </ul>
                        <dd>
                            <h3>商品总额</h3>
                            <i>￥98.00</i>
                        </dd>
                        <dd>
                            <input type="button" value="确认收货" className="order-que"/>
                            <input type="button" value="查看物流" />
                            <input type="button" value="取消订单" />
                        </dd>
                    </dl>
                    
                    <dl>
                        <dt>
                            <time>2015-11-15 22:55:59</time>
                            <span>待发货</span>
                        </dt>
                        <ul>
                            <Link to="/detail">
                                <figure><img src="/assets/images/classify-ph03.png"/></figure>
                                <li>
                                    <p>超级大品牌服装，现在够级大品牌服装，现在够买只要998</p>
                                    <small>颜色：经典绮丽款</small>
                                    <span>尺寸：XL</span>
                                    <b>￥32.00</b>
                                    <strong>×3</strong>
                                </li>
                            </Link>
                        </ul>
                        <dd>
                            <h3>商品总额</h3>
                            <i>￥98.00</i>
                        </dd>
                        <dd>
                            <input type="button" value="确认收货" className="order-que"/>
                            <input type="button" value="查看物流" />
                            <input type="button" value="取消订单" />
                            
                            
                        </dd>
                    </dl>
                </section>
            </div>
            </div>
        )
    }
}

export default Order;