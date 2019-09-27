import React from 'react'
import Layout from "./layout";
import Footer from "./footer";
import Content from "./content";
import Header from "./header";
import Aside from "./aside";
const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: 500}}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: 500}}>
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: 500}}>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{height: 500}}>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}
export default LayoutExample;