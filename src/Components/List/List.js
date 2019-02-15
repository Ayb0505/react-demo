import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component{
    render(){
        return (
            <div>
              <header className="top-header fixed-header">
		<a className="icona" href="javascript:history.go(-1)">
				<img src="/assets/images/left.png"/>
			</a>
		<h3>男装专区</h3>
			
			<Link className="iconb" to="/shopcar">
				<img src="/assets/images/shopbar.png"/>
			</Link>
	</header>
	
	<div className="contaniner fixed-conta">
		<section className="list">
			<figure><img src="/assets/images/list-ban01.png"/></figure>
			<div className="search">
				<input type="search" placeholder="韩版卫衣" />
				<label><img src="/assets/images/list-search.png"/></label>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">
							<span>全部</span>
						</a>
					</li>
					<li className="list-active">
						<a href="#">
							<span>销量</span>
							<img src="/assets/images/up-red.png"/>
						</a>
					</li>
					<li>
						<a href="#">
							<span>价格</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>评价</span>
						</a>
					</li>
				</ul>
			</nav>
			<ul className="wall">
				<li className="pic">
					<Link to={{pathname:'/detail/1',search:'?data=bmw'}}>
						<img src="/assets/images/list-ph01.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
				<li className="pic">
				<Link to={{pathname:'/detail/2',search:'?data=qq'}}>
						<img src="/assets/images/list-ph02.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
				<li className="pic">
				<Link to={{pathname:'/detail/3',search:'?data=audio'}}>
						<img src="/assets/images/list-ph01.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
				<li className="pic">
				<Link to={{pathname:'/detail/4',search:'?data=fengtian'}}>
						<img src="/assets/images/list-ph02.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
				<li className="pic">
					<Link to={{pathname:'/detail/5',search:'?data=changan'}}>
						<img src="/assets/images/list-ph01.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
				<li className="pic">
					<Link to={{pathname:'/detail/6',search:'?data=luhu'}}>
						<img src="/assets/images/list-ph02.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
				<li className="pic">
					<Link to={{pathname:'/detail/7',search:'?data=benci'}}>
						<img src="/assets/images/list-ph01.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
				<li className="pic">
					<Link to={{pathname:'/detail/8',search:'?data=leinuo'}}>
						<img src="/assets/images/list-ph02.png"/>
						<p>韩版青少年休闲修身长袖紧身衬衫</p>
						<b>￥58</b><del>￥538</del>
					</Link>
				</li>
			</ul>
		</section>
	</div>
            </div>
        )
    }
}

export default List;