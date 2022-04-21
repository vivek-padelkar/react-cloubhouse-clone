import style from './bottomSheet.module.css'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import StartRoom from './startRoom/startRoom.component'
import NewRoom from './newRoom/newRoom.component'

export const BottomSheet = ({
  sheetVisible,
  setSheetVisible,
  setItemVisible,
  sheetTittle,
  setVisible,
  setSheetCreateRoom,
  setLoaderVisibility,
  cardDetail,
}) => {
  return (
    <SwipeableBottomSheet
      open={sheetVisible}
      onChange={() => {
        setSheetVisible(!sheetVisible)
        setItemVisible(true)
      }}
      fullScreen={sheetTittle === 'room details' ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{
          backgroundColor: sheetTittle === 'profile' ? 'transperent' : '',
        }}
      >
        {sheetTittle === 'new room' ? (
          <NewRoom
            cardDetail={cardDetail}
            setSheetVisible={(item) => {
              setSheetVisible(item)
              setItemVisible(true)
            }}
          />
        ) : sheetTittle === 'start room' ? (
          <StartRoom
            setSheetCreateRoom={setSheetCreateRoom}
            setSheetVisible={(item) => {
              setSheetVisible(item)
              setItemVisible(true)
            }}
          />
        ) : null}
      </div>
    </SwipeableBottomSheet>
  )
}
