import axios from 'axios'

//恢复朋友圈
export let publishReply=params=>{
    return axios.post('/api/commenteply/publishreply',params)
}

//恢复朋友圈评论
export let publishComment=params=>{
    return axios.post('/api/commentreply/publishcomment',params)
}                                          
