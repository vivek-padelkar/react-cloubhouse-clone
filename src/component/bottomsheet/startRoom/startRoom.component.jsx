import { useState } from 'react'
import style from '../bottomSheet.module.css'
import { FcGlobe } from 'react-icons/fc'

const StartRoom = ({ setSheetCreateRoom, setSheetVisible }) => {
  const [room, setRoom] = useState('open')
  console.log('inside StartRoom')
  return (
    <div>
      <div className={style.switchLine}> </div>
      <div style={{ textAlign: 'right' }}>
        <button className={style.addTopicBtn}>+Add a topic</button>
      </div>

      <div className={style.selectRoom}>
        <button
          className={room === 'open' ? style.active : ''}
          onClick={() => setRoom('open')}
        >
          <div>
            <FcGlobe />
          </div>
          Open
        </button>

        <button
          className={room === 'social' ? style.active : ''}
          onClick={() => setRoom('social')}
        >
          <div>
            <FcGlobe />
          </div>
          Social
        </button>

        <button
          className={room === 'closed' ? style.active : ''}
          onClick={() => setRoom('closed')}
        >
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </div>
      <p>
        Start a room{' '}
        <span>
          {room === 'closed'
            ? 'for people I choose'
            : room === 'social'
            ? 'with prople I follow'
            : 'open to everyeone'}
        </span>
      </p>

      <div className="text-center">
        <button
          style={{
            fontSize: '1.3em',
            fontWeight: 500,
            border: 'none',
            borderRadius: '2em',
            backgroundColor: '#28ae61',
            color: '#ffff',
            padding: '0.3em 2em',
            textAlign: 'center',
          }}
          onClick={() => {
            setSheetVisible(true)
            setSheetCreateRoom(true)
          }}
        >
          🎉 Let's go
        </button>
      </div>
    </div>
  )
}

export default StartRoom
