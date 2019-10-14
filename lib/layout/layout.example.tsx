import React from 'react';
import Layout from "./layout";
import Footer from "./footer";
import Content from "./content";
import Header from "./header";
import Aside from "./aside";
import './layout.example.scss';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: 500, width: 500}}>
          <Header className='x'>header</Header>
          <Content className='y'>content</Content>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: 500, width: 500}}>
          <Header className='x'>header</Header>
          <Layout>
            <Aside className='z'>aside</Aside>
            <Content className='y'>content</Content>
          </Layout>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: 500, width: 500}}>
          <Header className='x'>header</Header>
          <Layout>
            <Content className='y'>content</Content>
            <Aside className='z'>aside</Aside>
          </Layout>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{height: 500, width: 500}}>
          <Aside className='z'>aside</Aside>
          <Layout>
            <Header className='x'>header</Header>
            <Content className='y'>content</Content>
            <Footer className='x'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
export default LayoutExample;