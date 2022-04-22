import { Link } from 'react-router-dom'
import exploreStyle from '../expolre/expolre.module.css'
import style from './profile.module.css'
import { BsAt, BsUpload, BsPlus } from 'react-icons/bs'
import { AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Profile = () => {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div
            className={exploreStyle.head}
            style={{
              textAlign: 'right',
              marginBottom: 0,
              display: 'block',
            }}
          >
            <Link to="/home">
              <i className="bi bi-caret-left-fill" style={{ color: 'black' }} />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src='https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4'
          alt='user profile' className={style.profileImg} />
        <h4>Vivek</h4>
        <p>@nonelbluebeast</p>

        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>51</span> following
          </p>
        </div>

        <button> Add a bio</button>

        <div className='mb-4'>
          <button className='mb-0'>
            <AiOutlineTwitter /> Add twiter
          </button>
          <button className='mb-0'>
            <AiOutlineInstagram /> Add instagram
          </button>
        </div>

        <div className={style.nominated}>
          <img src='https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4'
            alt='user profile' />
          <div>
            <p>joined 27-september-2022</p>
            <p>Nominated by <sapn style={{ color: 'black', fontWeight: 500 }}>Naruto uzumaki</sapn></p>
          </div>
        </div>

        <p>Member of</p>
        <button className={style.memberButton}>
          <BsPlus />
        </button>
      </div>
    </>
  )
}

export default Profile
