import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {Layout, Header, Content, Footer, Aside} from './lib/layout/layout';
import './example.scss';
import Icon from "./lib/icon/icon";
import IconDemo from "./lib/icon/icon.demo";
import FormExample from "./lib/form/form.example";

ReactDom.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <Icon name="logo" className="site-logo"></Icon>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li><NavLink to="/icon">Icon</NavLink></li>
            <li><NavLink to="/button">Button</NavLink></li>
            <li><NavLink to="/dialog">Dialog</NavLink></li>
            <li><NavLink to="/layout">Layout</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; TAO
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));