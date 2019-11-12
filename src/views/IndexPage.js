import React from 'react';
import { connect } from 'dva';
//import styles from './IndexPage.css';
//import { Layout, Menu, Breadcrumb, Icon } from 'antd'

//const { Header, Content, Sider }=Layout

class IndexPage extends React.Component{
  render(){
    let {changeNum}=this.props
    return(
      // <Layout>
      //   <Header className='header'>
      //     头部
      //   </Header>
      //   <Layout>
      //     <Sider width={200} style={{background:'#eee'}}>
      //       侧边栏
      //     </Sider>
      //     <Layout style={{padding:'0 24px 24px'}}>
      //       <Breadcrumb style={{margin:'16px 0'}}>
      //         <Breadcrumb.Item>Home</Breadcrumb.Item>
      //         <Breadcrumb.Item>List</Breadcrumb.Item>
      //         <Breadcrumb.Item>App</Breadcrumb.Item>
      //       </Breadcrumb>
             
      //        <Content 
      //           style={{
      //             background:'#fff',
      //             padding:24,
      //             margin:0,
      //             minHeight:280
      //           }}
      //        >
      //          Content
      //        </Content>
      //     </Layout>

      //   </Layout>
      // </Layout>

      <div>
        <div>
          <button onClick={()=>changeNum('+')}>+</button>
          <span>{this.props.num}</span>
          <button onClick={()=>changeNum('-')}>-</button>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes={
  num:Number
}
IndexPage.defaultProps={
  num:1000
}
const mapStateToProps=state=>{
  console.log(state.num.num);
  
  return{
    num:state.num.num
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    changeNum:type=>dispatch({
      type:'num/changeNum',
      payload:{type}
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
