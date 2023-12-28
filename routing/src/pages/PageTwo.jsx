import { Outlet, useNavigate } from 'react-router-dom'

const PageTwo = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>PageTwo</div>
      <button
        className='show-btn'
        onClick={() => navigate('/page-two/details')}
      >
        Show details
      </button>
      <button
        className='show-btn'
        onClick={() => navigate('/page-two/image')}
      >
        Show image
      </button>

      <Outlet />
    </>
  )
}
export default PageTwo
