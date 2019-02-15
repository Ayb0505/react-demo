import React from 'react';
import {Link} from 'react-router-dom';

class Mycollect extends React.Component{
    render(){
        return (
            <div>
              <header className="top-header fixed-header">
                        <a className="icona" href="javascript:history.go(-1)">
                            <img src="/assets/images/left.png"/>
                        </a>
                    <h3>我的收藏</h3>
                        
                        <a className="text-top">
                            编辑
                        </a>
                </header>
                
                <div className="contaniner fixed-conta">
                    <div style={{marginTop: "3%"}}></div>
                    <section className="list">
                        <ul className="wall">
                            <li className="pic">
                                <Link to="/detail">
                                    <img src="/assets/images/list-ph01.png"/>
                                    <p>韩版青少年休闲修身长袖紧身衬衫</p>
                                        <b>￥58</b><del>￥538</del>
                                    <div className="collectbar">
                                        <label htmlFor="collect1" className="label1"></label>
                                        <input type="checkbox" id="collect1"/>
                                    </div>
                                </Link>
                            </li>
                            <li className="pic">
                                <Link to="/detail">
                                    <img src="/assets/images/list-ph02.png"/>
                                    <p>韩版青少年休闲修身长袖紧身衬衫</p>
                                    <b>￥58</b><del>￥538</del>
                                    <div className="collectbar">
                                        <label htmlFor="collect2" className="label2"></label>
                                        <input type="checkbox" id="collect2"/>
                                    </div>
                                </Link>
                            </li>
                            <li className="pic">
                                <Link to="/detail">
                                    <img src="/assets/images/list-ph01.png"/>
                                    <p>韩版青少年休闲修身长袖紧身衬衫</p>
                                    <b>￥58</b><del>￥538</del>
                                    <div className="collectbar">
                                        <label className="label3" htmlFor="collect3"></label>
                                        <input type="checkbox" id="collect3"/>
                                    </div>
                                </Link>
                            </li>
                            <li className="pic">
                                <Link to="/detail">
                                    <img src="/assets/images/list-ph02.png"/>
                                    <p>韩版青少年休闲修身长袖紧身衬衫</p>
                                    <b>￥58</b><del>￥538</del>
                                    <div className="collectbar">
                                        <label className="label4" htmlFor="collect4"></label>
                                        <input type="checkbox" id="collect4"/>
                                    </div>
                                </Link>
                            </li>
                            
                        </ul>
                    </section>
                    <div className="kong" style={{marginBottom: "16%"}}></div>
                </div>
                
            <footer className="collectbox fixed-footer">
                
                <input type="button" value="确认删除" />
            </footer>
            </div>
        )
    }
}

export default Mycollect;