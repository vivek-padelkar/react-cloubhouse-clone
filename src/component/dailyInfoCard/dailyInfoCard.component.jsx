import style from './dailyInfoCard.module.css'
import { dailyPost } from '../../data/data'

const DailyInfoCard = () => {
  return (
    <div className={style.dailyCard}>
      {dailyPost.map((item) => (
        <div key={item.id}>
          <span className="">{item.time}</span>
          <div className="">
            <span> {item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DailyInfoCard
