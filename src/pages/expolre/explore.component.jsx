import style from './expolre.module.css'
import { DownOutlined, FireOutlined } from '@ant-design/icons'
import { exploreData } from '../../data/data'

const Expolre = () => {
    const { people, conversation } = exploreData
    return (
        <div className={style.exploreContainer}>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContaner}>
                {
                    people.map((Item) => (
                        <div>
                            <div className='d-flex align-items-center'>
                                <img src='https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4' alt='user profile' />
                                <div className='ml-2'>
                                    <h5>{Item.title}</h5>
                                    <p>{Item.description}</p>
                                </div>
                            </div>
                            <button>Follow</button>
                        </div>
                    ))
                }
                <button className={style.showMore}>
                    Show more people <span><DownOutlined /></span>
                </button>

            </div>
        </div>
    )
}

export default Expolre