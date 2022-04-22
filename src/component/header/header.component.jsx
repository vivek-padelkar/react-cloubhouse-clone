import { Link } from 'react-router-dom'
import style from './header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/explore">
        <i className="bi bi-search" />
      </Link>
      <div className={style.navItems}>
        <Link to="/invite">
          <i class="bi bi-envelope-paper" />
        </Link>
        <Link to="/upcoming">
          <i class="bi bi-calendar-plus" />
        </Link>
        <Link to="/activity">
          <i class="bi bi-bell-fill" />
        </Link>
        <Link to="/profile">
          <img
            src="https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4"
            alt="github avatar"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
