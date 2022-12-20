import './content.css'
import { useState } from 'react';
import { Menu } from 'antd';




const items = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
  }
]

const MainContent = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <div className="content">

      </div>
    </div>

  )
}

export default MainContent
