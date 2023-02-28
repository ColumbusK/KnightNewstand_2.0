import './Header.css'

const HeaderCenter = () => {


  return (
    <div className='header'>
      <div className='center-box'>
        <div className='logo' onClick={() => { window.open('https://space.bilibili.com/13849597?spm_id_from=333.1007.0.0') }}></div>
        <div className='figure'></div>
      </div>
    </div>
  )
}

export default HeaderCenter


