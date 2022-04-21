import { useState } from 'react'
import style from './newRoom.module.css'
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai'
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs'

const NewRoom = ({ cardDetail, setSheetVisible }) => {
  const [micMuteVisible, setMicMuteVisible] = useState(true)
  const [itemsVisible, setItemVisibles] = useState(true)
  const card = cardDetail

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <a
              href="#"
              onClick={() => {
                setSheetVisible(false)
              }}
            >
              <img
                className={style.arrowicon}
                src="/images/rightArrow.png"
                alt="go back"
              />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              className={style.profileImage}
              src="https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4"
              alt="github avatar"
            />
          </div>
        </div>

        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            style={{ padding: '0.5em 1w=em' }}
          >
            {card.members.map((item) => (
              <div className={style.memberContainer}>
                {micMuteVisible ? (
                  <div className={style.audioIcon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ''
                )}

                <img
                  className={style.profileImage}
                  src="https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4"
                  alt="github avatar"
                />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*footer*/}
        <div className={style.footer}>
          <button onClick={() => setSheetVisible(false)}>
            <img src="/images/hand_peace.png" alt="eace" />
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/images/stop_hand.png" alt="stop" />
            </button>
            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewRoom
