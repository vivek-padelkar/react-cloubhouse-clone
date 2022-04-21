import style from '../phoneconfirmation/phoneConfirmation.module.css'
import { Link } from 'react-router-dom'

export const CodeConfirm = () => {
  return (
    <div className={style.PhoneConfrimContainer}>
      <div className="text-center">
        <Link to="/" className={style.BackButton}>
          {'<'}
        </Link>
        <h1 style={{ width: '100%', maxWidth: '200px', marginBottom: '1em' }}>
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: '100%',
            border: 'none',
            textAlign: 'center',
            outline: 'none',
          }}
        />
        <p className="mt-2">
          Didn't received it <span>Tap to reciver it</span>
        </p>
        <Link to="/allownotification" className={style.btnNext}>
          Next
          <i class="bi bi-caret-right-fill" />
        </Link>
      </div>
    </div>
  )
}
