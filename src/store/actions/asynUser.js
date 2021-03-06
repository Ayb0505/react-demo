//异步action //返回函数
import * as types from '../types';

const asyncUser=({url,username,password})=>(dispatch,getState)=>{
  console.log('asyncUser',username, password);
  dispatch({type:types.VIEW_LOADING,payload:true});
  return fetch(
    url,
    /*{
      method:'post',
      headers:{"Content-type":"application/x-www-form-urlencoded"},
      body:{
        username:username,
        password:password
      }
    }*/
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:types.VIEW_LOADING,payload:false});
      dispatch({type:types.CHECK_USER,payload:{data,username}});
      return data.auth
    }
  )
};


export default asyncUser;