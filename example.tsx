import {HashRouter as Router, Route, Link} from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {Layout, Header, Content, Footer, Aside} from './lib/layout/layout';
import './example.scss';
import Icon from "./lib/icon/icon";

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
            <li><Link to="/icon">Icon</Link></li>
            <li><Link to="/button">Button</Link></li>
            <li><Link to="/dialog">Dialog</Link></li>
            <li><Link to="/layout">Layout</Link></li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; TAO
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));