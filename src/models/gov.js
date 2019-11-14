import {govList} from '@/services'


export default {

  namespace: 'gov',

  state: {
    list:[]
  },

  

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },

    *getGovList({payload},{call,put}){
      let res=yield call(govList,1,2)

      yield put({
        type:'changeList',
        payload:res.data.list
      })
    }
  },

  reducers: {
    // save(state, action) {
    //   return { ...state, ...action.payload };
    // },
    // changeNum(state,{payload:{type}}){
    //   return{...state,num:type==='+'?++state.num:--state.num}
    // }

    changeList(state,{payload}){
      return {...state, list:payload}
    }
  },

};
