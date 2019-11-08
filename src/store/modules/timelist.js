import {showDynamic} from '../../servier/index'

const state={
    list:[]
}

const mutations={
    updateList(state,payload){
        state.list=payload
    }
}

const actions={
    async getTimeline(context){
        let data=await showDynamic();
        context.commit('updateList',data.data.data);
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}