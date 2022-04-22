import { Link } from 'react-router-dom'
import style from '../../pages/expolre/expolre.module.css'

const SubHeader = ({ pageTitle }) => {
  return (
    <div className={style.head}>
      <Link to="/home">
        <i className="bi bi-caret-left-fill" style={{ color: 'black' }} />
      </Link>
      <h3>{pageTitle}</h3>
    </div>
  )
}

export default SubHeader
