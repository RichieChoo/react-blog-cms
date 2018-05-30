/**
 * Created by Richie on 2018/4/9
 */
import React from 'react';
import {Layout} from 'antd';

const {Content}=Layout;

 export default  (Component,fixed)=>{
     if(!fixed){
         return (
             <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
                 {Component}
             </Content>
         )
     }else {
         return (
             <Content ref="aaa" style={{ background: '#fff',padding:24,height:8000,position:"fixed",top:112}}>
                 {Component}
             </Content>
         )
     }
 }