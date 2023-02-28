import './content.css'
import './pagination.css'

import React from 'react';
import axios from 'axios'

import { Pagination, Empty } from 'antd';

import { useState, useEffect } from 'react'

import DescripPanel from './DescripPanel'
import DisplayList from './DisplayList'
import Navibar from './Navibar'

import magzineItems from '../magzineInfo'
import Sponsr from './Sponsor';


const MainContent = () => {
  const defaultSize = 3

  const [data, setData] = useState([]);
  const [length, setLength] = useState(1)
  const [idx, setIdx] = useState(0)
  const [current, setCurrent] = useState(1)
  const [displayData, setDisplayData] = useState(data.slice((current - 1) * defaultSize, current * defaultSize))

  // console.log(pages, currentPage, displayData)

  useEffect(() => {
    async function fetchData() {
      const type = magzineItems[idx].code
      const url = `https://magzinesapi.azurewebsites.net/api/getMagzinesByType?type=${type}`
      const res = await axios(url)
      console.log(res);
      const data = res.data || []

      setData(data)
      setLength(data.length)
      setCurrent(1)
      setDisplayData(data.slice((1 - 1) * defaultSize, 1 * defaultSize))
    }
    fetchData()
  }, [idx])

  const onChange = (page) => {
    setCurrent(page)
    setDisplayData(data.slice((page - 1) * defaultSize, page * defaultSize))
  }



  return (
    <div className="main-content">
      <Sponsr />
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
        total={length} current={current} defaultPageSize={defaultSize}
        showSizeChanger={false} hideOnSinglePage={true}
        style={{ marginBottom: '20px', borderColor: 'red' }} />
    </div>

  )
}

export default MainContent
