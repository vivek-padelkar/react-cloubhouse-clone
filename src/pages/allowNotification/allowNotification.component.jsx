import './allowNotification.style.css'
import style from '../phoneconfirmation/phoneConfirmation.module.css'
import { Link } from 'react-router-dom'

import React from 'react'

const AllowNotification = () => {
  return (
    <div className={style.PhoneConfrimContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last important Setep!</h1>
        <h1 className="mb-3">
          Enable notofocations to know when people are talking
        </h1>
        <div className={style.NotificationContainer}>
          <div className="p-3">
            <h3>"Cloubhouse clone" would like to send you Notifications</h3>
            <p> Notification may include alerts, sounds and icon badges</p>
          </div>
          <div className={style.ActionButton}>
            <Link to="/home" className="link notificationbtn borderRight">
              Don't allow
            </Link>
            <Link to="/home" className="link notificationbtn">
              Allow
            </Link>
            <img
              src="/images/hand.png"
              className={style.hand_icon}
              alt="hand icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllowNotification
