import './descripPanel.css'

const DescripPanel = ({ coverImg, intro }) => {

  return (
    <div className="panel">
      <div className='inner-box'>
        <div className='cover-box center'>
          <img src={coverImg} alt='cover' className='cover-img' />
        </div>
        <div className='intro-box'>
          {intro}
        </div>
      </div>
    </div>
  )
}


export default DescripPanel
