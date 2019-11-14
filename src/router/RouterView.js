import React from 'react'
import { Route, Switch, Redirect } from 'dva/router'

export default props=>{
    // console.log(props.routes,'props.routes');
    
    return <Switch>{
        props.routes.map((item,index)=>{
            return item.path&&<Route key={index} path={item.path} render={(props)=>{
                //配置重定向
                if(item.redirect){
                    return <Redirect exact from={item.path} to={item.redirect} />
                }
                

                //判断是否有子路由
                if(item.children){
                    return <item.component {...props} routes={item.children}/>
                }else{
                    return <item.component {...props} />
                }
            }} />
        })
    }</Switch>
}