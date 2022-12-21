import './navibar.css'
import { useState } from 'react'

const Navibar = ({ items, clickHandler }) => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const selectHandler = (idx) => {
    setCurrentIdx(idx)
  }

  return (
    <div className='navibar'>
      <ul className='options'>
        {items.map((item, idx) =>
          <li
            key={idx}
            className={idx === currentIdx ? 'option selected-option' : 'option'}
            onClick={() => { clickHandler(item); selectHandler(idx) }}>
            {item}
          </li>)}
      </ul>
    </div>
  )
}

export default Navibar