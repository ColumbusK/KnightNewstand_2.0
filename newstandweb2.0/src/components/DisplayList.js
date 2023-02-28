import './displayList.css'
import { Modal } from 'antd'
import { useState } from 'react'

import './sponsor.css'


const DateTag = ({ date }) => {

  return (
    <div className="date-bar">
      <div className="color-tag"></div>
      <div className="date-tag">{date}</div>
    </div>
  )
}

const MagzineCard = ({ img, title, url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    window.open(url);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    window.open(url);
  };

  return (
    <>

      <div className='magzine-card' onClick={(e) => { e.preventDefault(); showModal() }}>
        <div className='magzine-cover'>
          <img src={img} alt='cover' />
        </div>
        <div className='magzine-title'>{title}</div>
      </div>

      <Modal title="❤感谢支持❤" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="已经支持"
        cancelText="下次一定" closable={false} maskClosable={false}>
        <p>小伙伴的支持是让项目持续更新的最大动力，感谢大家❀ 祝大家兔年快乐，新的一年万事顺利，恭喜发财❤</p>
        <p>注意: 使用VPN资源加载速度更快</p>
        <img src='./images/QRCode1.jpg' alt='赞赏码' className='qrcode' />
        <p>打开微信扫一扫进行赞赏</p>
      </Modal>
    </>
  )
}

const MagzineCards = ({ data }) => {
  // console.log(data)
  return (
    <div className='magzine-gallery'>
      {data.map((item, idx) => <MagzineCard key={idx} title={item.title} img={item.coverUrl} url={item.panUrl} />)}
    </div>
  )
}

const DisplayList = ({ date, data }) => {
  // console.log("DisplayList", data)
  // data.forEach(item => console.log(item.title))
  return (
    <div>
      <DateTag date={date} />
      <MagzineCards data={data} />
    </div>
  )
}

export default DisplayList
