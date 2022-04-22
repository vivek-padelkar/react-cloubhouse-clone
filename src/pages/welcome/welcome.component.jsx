import style from './welcome.module.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Here’s the thing about humans: When we get together, it’s beautiful,
          but it can also get messy. Sometimes it’s beautiful because it’s
          messy. Since Vivek Padelkar Clubhouse clone is a place where people
          gather in all kinds of ways, and talk about everything from potatoes
          to politics.
        </p>
        <p>
          Anywone can join with an invite from an existing user or reserve your
          usename and we we'll text you if you a friend on app who can let you
          in.We are so grateful you're here and can't wait o have you join!
        </p>
        <p>Vivek and The cloubhouse clone team lorem</p>
      </div>

      <div className={style.Actionbutton}>
        <Link
          to="/invite"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <a className="link-primary" href='%'>Get your username</a>
        </Link>
        <Link to="/">Have an invite text ? Sign in</Link>
      </div>
    </div>
  )
}

export default Welcome
