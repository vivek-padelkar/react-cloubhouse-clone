import { Link } from 'react-router-dom'
import exploreStyle from '../expolre/expolre.module.css'
import style from './profile.module.css'
import { BsAt, BsUpload } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
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
      </div>
    </>
  )
}

export default Profile
