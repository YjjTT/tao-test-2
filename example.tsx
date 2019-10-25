import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {Layout, Header, Content, Footer, Aside} from './lib/layout/layout';
import './example.scss';
import Icon from "./lib/icon/icon";
import IconDemo from "./lib/icon/icon.demo";
import FormExample from "./lib/form/form.example";
import ScrollExample from "./lib/scroll/scroll.example";
import ButtonDemo from "./lib/button/button.demo";

ReactDom.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <Icon name="logo" className="site-logo"></Icon>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <ul>
            <li><NavLink to="/">tui-react</NavLink></li>
            <li><NavLink to="/ss">tui-react</NavLink></li>
            <li><NavLink to="/dd">tui-react</NavLink></li>
            <li>
              <ul>
                <li>
                  <div className="site-aside-title">通用</div>
                    <li><NavLink to="/icon">Icon&nbsp;图标</NavLink></li>
                    <li><NavLink to="/button">Button&nbsp;按钮</NavLink></li>
                </li>
                <li>
                  <div className="site-aside-title">布局</div>
                  <li><NavLink to="/layout">Layout&nbsp;布局</NavLink></li>
                </li>
                <li>
                  <div className="site-aside-title">数据相关</div>
                  <li><NavLink to="/form">Form&nbsp;表单</NavLink></li>
                </li>
                <li>
                  <div className="site-aside-title">信息反馈</div>
                  <li><NavLink to="/dialog">Dialog&nbsp;弹框</NavLink></li>
                </li>
                <li>
                  <div className="site-aside-title">其他</div>
                  <li><NavLink to="/scroll">Scroll&nbsp;滚动</NavLink></li>
                </li>
              </ul>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
          <Route path="/scroll" component={ScrollExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; TAO
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));