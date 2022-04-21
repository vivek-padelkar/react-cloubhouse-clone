import { useState, useEffect } from 'react'
import { roomCardData } from '../../data/data'
import style from './roomInfoCard.module.css'
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs'

const RoomInfoCard = () => {
  return (
    <div>
      {roomCardData.map((item) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="user1"
                  />
                  <img
                    src="https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4"
                    alt="user2"
                  />
                </div>
                <div>
                  {item.members.map((person) => (
                    <p>
                      {person.first_name} {person.last_name}
                      <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="mr-2">1.8</span> <BsChatDotsFill />
                    <span className="mx-2"></span>{' '}
                    <span className="mr-2">5</span>
                    <BsFillPersonFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoomInfoCard
