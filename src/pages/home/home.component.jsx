import { useState } from 'react'
import DailyInfoCard from '../../component/dailyInfoCard/dailyInfoCard.component'
import Header from '../../component/header/header.component'
import RoomInfoCard from '../../component/roomInfoCard/roomInfoCard.comonent'
import style from './home.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGrid3X3Gap } from 'react-icons/bs'
import { roomCardData } from '../../data/data.js'
import { BottomSheet } from '../../component/bottomsheet/bottomSheet.component'
import { newRoomdata } from '../../data/data.js'

const Home = () => {
  const [itemVisible, setItemVisible] = useState(true)
  const [sheetVisible, setSheetVisible] = useState(false)
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
  const [loaderVisibility, setLoaderVisibility] = useState(false)
  const [cardId, setCardID] = useState(1)

  return (
    <div>
      {loaderVisibility ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="/images/loader.gif" alt="application is loading" />
        </div>
      ) : null}
      <Header />
      <div className={style.homeContainer}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>

      <div className={style.ActionBtnContainer}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mr-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>

      <BottomSheet
        sheetTittle={'start room'}
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={roomCardData.find((item) => item.id === cardId)}
        setItemVisible={(item) => setItemVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true)
          setTimeout(() => {
            setSheetCreateRoom(item)
            setLoaderVisibility(false)
          }, 1000)
        }}
      />

      <BottomSheet
        sheetTittle={'new room'}
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        setItemVisible={(item) => setItemVisible(item)}
        cardDetail={newRoomdata}
      />
    </div>
  )
}

export default Home
