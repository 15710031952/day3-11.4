<!--  -->
<template>
    <div class="register">
        <div class="top">
            <span>
                <i class="iconfont iconzuo"></i>
            </span>
            <span>圈子注册</span>
            <span></span>
        </div>
        <div class="center">
            <p><input type="text" placeholder="用户名"></p>
            <p><input type="password" placeholder="密码"></p>
            <p><button>注册</button></p>
        </div>
    </div>
</template>

<script>
export default {
    name:'register',
  data () {
    return {

    };
  },
}

</script>
<style lang='scss' scoped>
.register{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
        width: 100%;
        height: 1rem;
        background: #eee;
        display: flex;
        justify-content: space-around;
        span{
            font-size: .4rem;
            text-align: center;
            line-height:1rem;
        }
        
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
        
    }
}
</style>