
export default {

  namespace: 'num',

  state: {
    num:23
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    changeNum(state,{payload:{type}}){
      return{...state,num:type==='+'?++state.num:--state.num}
    }
  },

};
