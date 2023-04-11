import React, { useState } from 'react'
import { Layout, theme, Col, Row, Input, Divider, Button, Form } from 'antd';
import { SettingTwoTone } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

import { QuestionCircleOutlined, HomeOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { FloatButton, notification } from 'antd';

import translate from '../services/translator';

const { Header, Content, Footer } = Layout
const { TextArea } = Input


const Translator = () => {
  const [spin, setSpin] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate()

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: '请求超时',
      description:
        '请使用IPV6网络（比如使用手机热点)，请检查网络连接或减短文本长度再试。'
    });
  };

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

  const handleBackClick = () => {
    // console.log('back')
    navigate('/')
  }

  const handleTransClick = (e) => {
    setSpin(true)
    setBtnDisabled(true)
    // console.log(inputText);
    translate(inputText).then(res => {
      // console.log(res)
      setSpin(false)
      setBtnDisabled(false)
      setOutputText(res)
    }).catch(err => {
      // console.log(err)
      setSpin(false)
      setBtnDisabled(false)
      openNotificationWithIcon('info')
    })
  }

  const changeInput = (e) => {
    setInputText(e.target.value)
    // console.log(inputText)
  }

  return (
    <Layout className="layout">
      {contextHolder}
      <Header style={{ height: 40 }}>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Row justify="center" gutter={20} align="top">
            <Col span={10} style={rowStyle}>
              <Divider orientation="left" style={dividerStyle}>英文难句</Divider>
              <Form>
                <Form.Item>
                  <TextArea
                    autoSize={{ minRows: 12, maxRows: 14 }}
                    maxLength={350}
                    placeholder="在此输入英文段落"
                    allowClear
                    showCount
                    onChange={changeInput}
                  />
                  <Button type="primary" onClick={handleTransClick} disabled={btnDisabled}>
                    开始解析
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col>
              <SettingTwoTone spin={spin} style={{ marginTop: '200px', fontSize: '22px' }} />
            </Col>
            <Col span={10} style={rowStyle}>
              <Divider orientation="left" style={dividerStyle}>中文解析</Divider>
              <TextArea
                autoSize={{ minRows: 17, maxRows: 18 }}
                placeholder="在此显示中文解析"
                value={outputText}
                allowClear
                showCount
              />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={footerStyle}>©2023 Created by 哥伦布骑士</Footer>

      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
        }}
      >
        <FloatButton onClick={handleBackClick} type='primary' icon={<HomeOutlined />} tooltip={<div>返回首页</div>} />
        <FloatButton type='primary' icon={<CloudUploadOutlined />} tooltip={<div>杂志上传(to do)</div>} />
        <FloatButton icon={<QuestionCircleOutlined />} />
      </FloatButton.Group>
    </Layout>
  )
}

export default Translator