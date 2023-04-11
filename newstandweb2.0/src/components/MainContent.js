import './content.css'
import './pagination.css'

import React from 'react';

import { Pagination, Empty } from 'antd';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import DescripPanel from './DescripPanel'
import DisplayList from './DisplayList'
import Navibar from './Navibar'

import magzineItems from '../services/magzineInfo'

import { fetchData } from '../services/magzines';

import { QuestionCircleOutlined, AliwangwangOutlined, CloudUploadOutlined, QqOutlined, AndroidOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';


const MainContent = () => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(1)
  const [idx, setIdx] = useState(0)
  const [current, setCurrent] = useState(1)
  const [rows, setRows] = useState(3)
  const [displayData, setDisplayData] = useState(data.slice((current - 1) * rows, current * rows))
  const navigate = useNavigate()

  useEffect(() => {
    fetchMagzines(idx)
  }, [idx])

  // get magzine data
  const fetchMagzines = async (idx) => {
    const data = await fetchData(idx)
    setData(data)
    setLength(data.length)
    setCurrent(1)
    setDisplayData(data.slice((1 - 1) * rows, 1 * rows))
  }

  const onChange = (page) => {
    setCurrent(page)
    setDisplayData(data.slice((page - 1) * rows, page * rows))
  }

  const handleTranslatorClick = () => {
    console.log('translator')
    navigate('/translator')
  }

  const handleAiLawClick = () => {
    window.open('http://ai4law.wswpass.com/')
  }

  return (
    <div className="main-content">
      <Navibar items={magzineItems} clickHandler={setIdx} />
      <DescripPanel coverImg={magzineItems[idx].coverUrl} intro={magzineItems[idx].introduction} />
      {
        data.length > 0 ?
          <div className="content">
            {displayData.map((item, idx) => <DisplayList key={idx} date={Object.keys(item)[0]} data={Object.values(item)[0]} />)}
          </div> :
          <Empty style={{ height: '500px' }} imageStyle={{ margin: '150px auto' }} description={false} />
      }
      <Pagination onChange={onChange} defaultCurrent={1}
        total={length} current={current} defaultPageSize={rows}
        showSizeChanger={false} hideOnSinglePage={true}
        style={{ marginBottom: '20px', borderColor: 'red' }} />

      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
        }}
      >
        <FloatButton onClick={handleTranslatorClick} type='primary' icon={<AliwangwangOutlined />} tooltip={<div>翻译学习机（Doing）</div>} />
        <FloatButton onClick={handleAiLawClick} type='primary' icon={<AndroidOutlined />} tooltip={<div>法律咨询机器人</div>} />
        <FloatButton type='primary' icon={<CloudUploadOutlined />} tooltip={<div>杂志上传（To do）</div>} />
        <FloatButton type='primary' icon={<QqOutlined />} tooltip={<div>QQ讨论群（To do）</div>} />
        <FloatButton icon={<QuestionCircleOutlined />} tooltip={<div>反馈&建议：zkzkao@foxmail.com</div>} />
      </FloatButton.Group>
    </div>

  )
}

export default MainContent
