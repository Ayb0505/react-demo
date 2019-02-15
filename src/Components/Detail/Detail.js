import React from 'react';
import {Link} from 'react-router-dom';

import querystring from 'query-string';

class Detail extends React.Component{
    state={
        detail:{}
      };
    componentDidMount(){
        let id=this.props.match.params.id-0;
        let dataName=querystring.parse(this.props.location.search).dataName;
        fetch(
            `/data/article_${dataName}.data`
            /*`http://localhost:3000/detail?start=0&count=0`,
            {
            body:'?start=0&count=0'|URLSerachParams|querystring.parase(obj)
            }*/
        ).then(
            res => res.json()
        ).then(
            data => this.setState({
            detail:data[id-1]
            })
        )
    }
    render(){
        return (
            <div>
                    <header className="detail-header fixed-header">
                <a href="javascript:history.go(-1)"><img src="/assets/images/detail-left.png"/></a>
                
                <Link to="/shopcar" className="right"><img src="/assets/images/shopbar.png"/></Link>
            </header>
            
            
            <div className="contaniner fixed-contb">
                <section className="detail">
                    <figure className="swiper-container">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide">
                                <a href="#">
                                    <img src="/assets/images/detail-ban02.png"/>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="#">
                                    <img src="/assets/images/detail-ban01.png"/>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="#">
                                    <img src="/assets/images/detail-ban03.png"/>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="#">
                                    <img src="/assets/images/detail-ban04.png"/>
                                </a>
                            </li>
                        </ul>
                        <div className="swiper-pagination">
                        </div>
                    </figure>
                    <dl className="jiage">
                        <dt>
                            <h3>2015冬季新款韩版加厚中长款小鹿毛呢大衣女系带加厚羊毛呢外套</h3>
                            <div className="collect">
                                <img src="/assets/images/detail-heart-hei.png"/>
                                <p>收藏</p>
                            </div>
                        </dt>
                        <dd>
                            <b>￥28.99</b>
                            <del>￥139</del>
                            <input type="button" value="￥10.00" readOnly />
                            <small>+356积分</small>
                        </dd>
                    </dl>
                    
                    <div className="chose">
                        <ul>
                            <h3>颜色</h3>
                            <li>
                                黑色
                            </li>
                            <li className="chose-active">
                                粉色
                            </li>
                            <li>
                                灰色
                            </li>
                            <li>
                                红色
                            </li>
                        </ul>
                        <ul>
                            <h3>尺寸</h3>
                            <li>
                                L
                            </li>
                            <li className="chose-active">
                                XL
                            </li>
                            <li>
                                XXL
                            </li>
                        </ul>
                    </div>
                    
                    <a href="#" className="seven">
                        <b>7</b>天无理由退换货
                    </a>
                    
                    <ul className="same">
                        <a href="#">
                            <span>
                                同类推荐
                            </span>
                            <li className="one">
                                <img src="/assets/images/detail-pp01.png"/>
                                <p>￥188.00</p>
                            </li>
                            <li>
                                <img src="/assets/images/detail-pp02.png"/>
                                <p>￥188.00</p>
                            </li>
                            <li>
                                <img src="/assets/images/detail-pp03.png"/>
                                <p>￥188.00</p>
                            </li>
                            <li>
                                <img src="/assets/images/detail-pp04.png"/>
                                <p>￥188.00</p>
                            </li>
                        </a>
                    </ul>
                    
                    <article className="detail-article">
                        <nav>
                            <ul>
                                <li>商品详情</li>
                                <li className="article-active">评价</li>
                            </ul>
                        </nav>
                        <section className="talkbox">
                            <ul className="talk">
                                <li>
                                    <figure><img src="/assets/images/detail-tou.png"/></figure>
                                    <dl>
                                        <dt>
                                            <p>弱小喵</p>
                                            <time>2015.11.17</time>
                                            <div className="star">
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                            </div>
                                        </dt>
                                        <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                        <small>颜色：豹纹凯特</small>
                                    </dl>
                                </li>
                                <li>
                                    <figure><img src="/assets/images/detail-tou.png"/></figure>
                                    <dl>
                                        <dt>
                                            <p>弱小喵</p>
                                            <time>2015.11.17</time>
                                            <div className="star">
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                            </div>
                                        </dt>
                                        <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                        <small>颜色：豹纹凯特</small>
                                        <div className="picbox">
                                            <img src="/assets/images/detail-pp01.png"/>
                                            <img src="/assets/images/detail-pp02.png"/>
                                            <img src="/assets/images/detail-pp03.png"/>
                                            <img src="/assets/images/detail-pp04.png"/>
                                        </div>
                                    </dl>
                                </li>
                                <li>
                                    <figure><img src="/assets/images/detail-tou.png"/></figure>
                                    <dl>
                                        <dt>
                                            <p>弱小喵</p>
                                            <time>2015.11.17</time>
                                            <div className="star">
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                            </div>
                                        </dt>
                                        <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                        <small>颜色：豹纹凯特</small>
                                    </dl>
                                </li>
                                <li>
                                    <figure><img src="/assets/images/detail-tou.png"/></figure>
                                    <dl>
                                        <dt>
                                            <p>弱小喵</p>
                                            <time>2015.11.17</time>
                                            <div className="star">
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn01.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                                <span><img src="/assets/images/detail-iocn001.png"/></span>
                                            </div>
                                        </dt>
                                        <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                        <small>颜色：豹纹凯特</small>
                                        <div className="picbox">
                                            <img src="/assets/images/detail-pp01.png"/>
                                            <img src="/assets/images/detail-pp02.png"/>
                                            <img src="/assets/images/detail-pp03.png"/>
                                            <img src="/assets/images/detail-pp04.png"/>
                                        </div>
                                    </dl>
                                </li>
                            </ul>
                        </section>
                        
                    </article>
                </section>
            </div>
            
            
                <footer className="detail-footer fixed-footer">
                    <a href="#" className="go-car">
                        <input type="button" value="加入购物车"/>
                    </a>
                    <Link to="/buy" className="buy">
                        立即购买
                    </Link>
                </footer>

               

            </div>
        )
    }
}

export default Detail;