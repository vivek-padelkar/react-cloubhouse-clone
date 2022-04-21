import { useState } from 'react'
import style from './phoneConfirmation.module.css'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'

const PhoneConfirmation = () => {
  const [value, setValue] = useState()
  return (
    <div className={style.PhoneConfrimContainer}>
      <Link to="/" className={style.BackButton}>
        {'<'}
      </Link>

      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're aggreeing to our
        <span>Terms of Service and Privacy Policy </span>
        Thanks!
      </p>
      <Link to="/codeconfirm" className={style.btnNext}>
        Next
        <i class="bi bi-caret-right-fill" />
      </Link>
    </div>
  )
}

export default PhoneConfirmation
