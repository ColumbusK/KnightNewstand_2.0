import './navibar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
            onClick={() => { clickHandler(idx); selectHandler(idx); console.log(idx) }}>
            <Link to={item.name} className='Link'>{item.name}</Link>
          </li>)}
      </ul>
    </div>
  )
}

export default Navibar
