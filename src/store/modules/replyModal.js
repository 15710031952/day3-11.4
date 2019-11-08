import {publishReply,publishComment} from '@/service/index'

const state={
    info:{},
    show:false
}

const mutations={
    //显示弹框
    showModal(state,payload){
        state.info=payload.info
        state.show=true
    },
    //隐藏弹框
    hideModel(state,payload){
        state.info={};
        state.show=false
    }
}

const actions={
    //提交评论
    async reply({commit,state,dispatch},payload){
        let data={};
        
        //判断是回复朋友圈还是回复朋友圈评论
        if(state.info.type==='comment'){
            data=await publishComment({
                dynamicid:state.info.dynamicid,
                commentContent:payload
            })
        }else{
            data=await publishReply({
                toCommentReplyid:state.info.toCommentReplyid,
                replyContent:payload
            })
        }

        //刷新朋友圈
        await dispatch('timeline/getTimeline',null,{root:true})
        //隐藏弹框
        commit('hideModal')

    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}