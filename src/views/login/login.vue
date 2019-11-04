<!--  -->
<template>
    <div id="login">
        <div class="top">
            圈子登录
        </div>
        <div class="center">
            <p><input type="text" placeholder="用户名" v-model="username"></p>
            <p><input type="password" placeholder="登录密码" v-model="pawd"></p>
            <p><button @click="login">登录</button></p>
            <p class="link">
                <router-link to="/register" tog='span'>没有账号, 快速注册</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import {login} from '../../servier/index'
export default {
    name:'#login',
  data () {
    return {
        username:'',
        pawd:''
    };
  },
  methods:{
      async login(){
          let {username,pawd} = this;
          let result = await login({username,pawd});
          console.log(result);
          
      }
  }
}

</script>
<style lang='scss' scoped>
#login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
        width: 100%;
        height: 1rem;
        background: #eee;
        font-size: .4rem;
        text-align: center;
        line-height:1rem;
    }
    .center{
        flex: 1;
        p{
            text-align: center;
            line-height: 1rem;
            input{
                height: .7rem;
                width: 7rem;
                // margin: 0 auto;
                background: #eee;
                border: none;
            }
            button{
                width: 7rem;
                height: 1rem;
                background: red;
                color: #fff;
                text-align: center;
                line-height: 1rem;
                border:none;
            }
        }
        .link{
            text-align: left;
            font-size: .25rem;
            margin-left: .25rem;
            a{
                color: black;
            }
        }
        
    }
}


</style>