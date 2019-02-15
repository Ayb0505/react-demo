import React from 'react';
import {Link} from 'react-router-dom';

class Assess extends React.Component{
    render(){
        return (
            <div>
              <header className="top-header fixed-header">
                <a className="icona" href="javascript:history.go(-1)">
                    <img src="/assets/images/left.png"/>
                </a>
                <h3>去评价</h3>
                    <Link className="iconb" to="/shopcar"></Link>
            </header>
                
            <div className="contaniner fixed-cont">
                <section className="assess">
                        <p>
                            <img src="/assets/images/detail-pp01.png"/>
                            <textarea rows="5" placeholder="请写下对宝贝的感受吧，对他人帮助很大哦" ></textarea>
                            
                        </p>	
                        <ul>
                            <li>
                                商品评价
                            </li>
                            <li className="assess-right">
                                <img onclick="level(1)" src="/assets/images/detail-iocn01.png"/>
                                <img onclick="level(2)" src="/assets/images/detail-iocn01.png"/>
                                <img onclick="level(3)" src="/assets/images/detail-iocn01.png"/>
                                <img onclick="level(4)" src="/assets/images/detail-iocn01.png"/>
                                <img onclick="level(5)" src="/assets/images/detail-iocn01.png"/>
                            </li>
                        </ul>
                </section>
            </div>

            <footer class="assess-footer fixed-footer ">
                <ul>
                    <li>
                        <input type="checkbox" id="ass"/>
                        <label htmlFor="ass" onselectstart="return false">匿名评价</label>
                    </li>
                    <input type="button" value="发表评论" />
                </ul>
            </footer>

        </div>
        )
    }
}

export default Assess;