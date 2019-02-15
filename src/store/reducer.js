//纯函数： 不改输入，输出可控，必输出
//reducer : 业务逻辑，拷贝并更新后的state+返回，负责获取state
import * as types from './types'
const reducer = (state,{type,payload}) => {
  switch (type) {
    case types.VIEW_FOOT:
      return {
        ...state,
        bFoot:payload
      };

    case types.VIEW_LOADING:
      return {
        ...state,
        bLoading:payload
      };

    case types.UPDATE_HOME:
      return {
        ...state,
        home:payload
      };

    case types.UPDATE_INTEGRAL:
      return {
        ...state,
        integral:payload
      };

    case types.UPDATE_DETAIL:
      // console.log('reducer',payload);
      return {
        ...state,
        detail:payload.data[payload.id-1]
      };

    case types.CHECK_USER:
      var obj = {}
    if(payload.username==payload.data.data.username){
      obj = payload.data;
    }else{
      obj = {auth:false}
    }
      return {
        ...state,
        user:obj
      };


    default:
      return state
  }
};

export default  reducer;