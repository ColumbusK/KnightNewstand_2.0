import React, { useState } from 'react'
import { Layout, theme, Col, Row, Input, Divider, Button } from 'antd';
import { SettingTwoTone } from '@ant-design/icons'
const { Header, Content, Footer } = Layout


const { TextArea } = Input


const Translator = () => {
  const [spin, setSpin] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const rowStyle = {
    marginTop: '20px',
    height: '500px',
    width: '100px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    margin: '0 20px',
    textAlign: 'center'
  }

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '10px',
    textAlign: 'center'
  }

  const dividerStyle = {
    border: '2px'
  }

  const handleTransClick = () => {
    setSpin(true)
    setTimeout(() => {
      setSpin(false)
    }, 5000)
  }

  return (
    <Layout className="layout">
      <Header style={{ height: 40 }}>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Row justify="center" gutter={20} align="top">
            <Col span={10} style={rowStyle}>
              <Divider orientation="left" style={dividerStyle}>英文段落</Divider>
              <TextArea rows={14} placeholder="maxLength is 6" maxLength={18} />
              <Button type="primary" onClick={handleTransClick}>
                开始解析
              </Button>
            </Col>
            <Col>
              <SettingTwoTone spin={spin} style={{ marginTop: '200px', fontSize: '22px' }} />
            </Col>
            <Col span={10} style={rowStyle}>
              <Divider orientation="left" style={dividerStyle}>中文解析</Divider>
              <TextArea rows={14} placeholder="maxLength is 6" maxLength={18} />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={footerStyle}>©2023 Created by 哥伦布骑士</Footer>
    </Layout>
  )
}

export default Translator