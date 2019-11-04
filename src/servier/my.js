import Axios from 'axios'

export let login =params=>{
    return Axios.port('/api/user/login',params)
}

export let register =params=>{
    return Axios.post('/api/user/register',params)
}
