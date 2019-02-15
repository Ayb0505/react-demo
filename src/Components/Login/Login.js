import React from 'react';
import {Link,Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import asyncUser from "../../store/actions/asynUser";

class Login extends React.Component{
    render(){
        return (
            <div>
              <header className="top-header">
								<Link className="text texta" to="/home">取消</Link>
								<h3>登录</h3>
								<Link className="text" to="/sign">注册</Link>
							</header>

						<div className="login">
							<form>
								<ul>
									<li>
										<img src="/assets/images/login.png"/>
										<label>账号</label>
										<input type="text" name="username" placeholder="请输入账号" value={this.state.username} onChange={this.changeIpt.bind(this)}/>
									</li>
									<li>
										<img src="/assets/images/password.png"/>
										<label>密码</label>
										<input type="password" name="password" placeholder="请输入密码" value={this.state.password} onChange={(ev)=>this.changeIpt(ev)}/>
									</li>
								</ul> 
								<input type="button" value="登录" onClick={this.props.login.bind(null,this.state.username,this.state.password,this.props.history)}/>
							</form>
						</div>
            </div>
        )
	}
		state={
			username:'',
			password:'',
	  }
	  changeIpt(ev){
		this.setState({
		  [ev.target.name]:ev.target.value
		})
	  }
	  // login(){
	
		// console.log('login',this.state.username,this.state.password);
	
		// fetch(
		//   // `/data/user.json?username=${this.state.username}&password=${this.state.password}`
		//   `/data/user.json`
		// ).then(
		//   res=>res.json()
		// ).then(
		//   data=>{
		// 	if (data.auth){
		// 	  this.props.history.push({pathname:'/self'})
		// 	} else {
		// 	  this.props.history.push({pathname:'/error'})
		// 	}
		//   }
		// )
	
	  // }
}

const initMapStateToProps=state=>({
	// username:state.user.data.username
});
const initMapDispatchToProps=dispatch=>({
	login:(username,password,history)=>dispatch(asyncUser({
		url:'/data/user.json',
		username,password,
	})).then(
		(auth)=>auth ?
		  history.push({pathname:'/self'}) :
		  history.push({pathname:'/login'})
		)
}) 
  
export default connect(
	initMapStateToProps,
	initMapDispatchToProps
)(Login);

// export default Login;