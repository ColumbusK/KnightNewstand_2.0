import { Modal } from 'antd'
import { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'

import './sponsor.css'

const Sponsor = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="sponsor-pig" onClick={showModal}>
        <div className='sponsor-title'>捐赠</div>
      </div>

      <Modal title="感谢赞赏❤" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={true} closeIco={<CloseOutlined />} okText="已经支持"
        cancelText="下次一定">
        <p>小伙伴的支持是让项目持续更新的最大动力，感谢大家❀ 祝大家兔年快乐，新的一年万事顺利，恭喜发财❤</p>
        <img src='./images/QRCode1.jpg' alt='赞赏码' className='qrcode' />
        <p>打开微信扫一扫进行赞赏</p>
      </Modal>
    </>
  )
}


export default Sponsor
