import './content.css'
import Navibar from './Navibar'
import { useState } from 'react'

const items = [
  '经济学人',
  '国家地理',
  '科学'
]



const MainContent = () => {
  const [type, setType] = useState('TE')


  return (
    <div>
      <Navibar items={items} clickHandler={setType} />
      <div className="content">
        {type}
      </div>
    </div>

  )
}

export default MainContent
