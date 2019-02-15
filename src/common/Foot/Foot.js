
import React from 'react';
import {NavLink} from 'react-router-dom';
import style from'./Foot.module.css'

class Foot extends React.Component{
    render(){
        return (
            <footer className="page-footer fixed-footer">
                <ul>
                    <li>
                        <NavLink to='/home' activeClassName={style.activea}>
                            <img src="/assets/images/footer01.png"/>
                            <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={{pathname:'/assort'}} activeClassName={style.activea}>   
                            <img src="/assets/images/footer02.png"/>
                            <p>分类</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/shopcar'} activeClassName={style.activea}>
                            <img src="/assets/images/footer03.png"/>
                            <p>购物车</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/self' activeClassName={style.activea}>    
                            <img src="/assets/images/footer04.png"/>
                            <p>个人中心</p>
                        </NavLink>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Foot;