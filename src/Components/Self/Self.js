import React from 'react';
import {Link} from 'react-router-dom';
// import pubsub from 'pubsub-js';

class Self extends React.Component{
	// componentDidMount(){
    //     pubsub.publish('view_loading',true);
	// 	setTimeout(()=>{

	// 		pubsub.publish('view_loading',false);

	// 	},1000)
    // }
    render(){
        return (
            <div>
                <header className="self-header">
		<figure><img src="/assets/images/self-tou.png"/></figure>
		<dl>
			{/* <dt>{this.props.data.username}</dt> */}
			<dt>{this.props.username}</dt>
			<dd>
				<img src="/assets/images/self-header.png"/>
				<span>5684</span>
				<span>炒饭大湿</span>
			</dd>
		</dl>
		<button>签到</button>
	</header>

	<div className="contaniner fixed-contb">
		<section className="self">
			<dl>
				<dt>
					<Link to="/order">
						<img src="/assets/images/self-icon.png"/>
						<b>全部订单</b>
						<span><img src="/assets/images/right.png"/></span>
					</Link>
				</dt>
				<dd>
						<ul>
							<li>
								<a href="go-order.html">
									<img src="/assets/images/order-icon01.png"/>
									<p>待发货</p>
								</a>
							</li>
							<li>
								<a href="go-order.html">
									<img src="/assets/images/order-icon03.png"/>
									<p>待付款</p>
								</a>
							</li>
							<li>
								<a href="go-order.html">
									<img src="/assets/images/order-icon02.png"/>
									<p>待收货</p>
								</a>
							</li>
							<li>
								<a href="go-assess.html">
									<img src="/assets/images/order-icon04.png"/>
									<p>待评价</p>
								</a>
							</li>
						</ul>
				</dd>
			</dl>
			
			<ul className="self-icon">
				<li>
					<a href="datum.html">
						<img src="/assets/images/self-icon01.png"/>
						<p>个人信息</p>
						<span><img src="/assets/images/right.png"/></span>
					</a>
				</li>
				<li>
					<Link to="/mycollect">
						<img src="/assets/images/self-icon02.png"/>
						<p>我的收藏</p>
						<span><img src="/assets/images/right.png"/></span>
					</Link>
				</li>
				<li>
					<Link to="/integral">
						<img src="/assets/images/self-icon03.png"/>
						<p>我的积分</p>
						<span><img src="/assets/images/right.png"/></span>
					</Link>
				</li>
				<li>
					<Link to="/address">
						<img src="/assets/images/self-icon04.png"/>
						<p>地址管理</p>
						<span><img src="/assets/images/right.png"/></span>
					</Link>
				</li>
			</ul>
			<ul className="self-icon">
				<li>
					<a href="none.html">
						<img src="/assets/images/self-icon05.png"/>
						<p>我的分销</p>
						<span><img src="/assets/images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="/assets/images/self-icon06.png"/>
						<p>邀请好友</p>
						<span><img src="/assets/images/right.png"/></span>
					</a>
				</li>
				
			</ul>
			<Link to="/login"><input type="button" value="退出"/></Link>
			
		</section>
		
		
	</div>

            </div>
        )
    }
}

export default Self;