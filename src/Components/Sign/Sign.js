import React from 'react';
import {Link} from 'react-router-dom';

class Sign extends React.Component{
    render(){
        return (
            <div>
              <header className="top-header">
		<Link className="text texta" to="/home">取消</Link>
		<h3>注册</h3>
		<Link className="text" to="/login">登录</Link>
	</header>

	<div className="login">
		<form action="" method="post">
			
			<ul>
				<li>
					<img src="/assets/images/login.png"/>
					<label>账号</label>
					<input type="text" placeholder="请输入账号"/>
				</li>
				<li>
					<img src="/assets/images/password.png"/>
					<label>密码</label>
					<input type="password" placeholder="请输入密码"/>
				</li>
				<li>
					<img src="/assets/images/password.png"/>
					<label>密码</label>
					<input type="password" placeholder="请确认密码"/>
				</li>
			</ul>
			<input type="submit" value="立即注册"/>
		</form>
	</div>
            </div>
        )
    }
}

export default Sign;