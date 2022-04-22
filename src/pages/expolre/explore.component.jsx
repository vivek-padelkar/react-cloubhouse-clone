import style from './expolre.module.css'
import { DownOutlined, FireOutlined } from '@ant-design/icons'
import { exploreData } from '../../data/data'
import { Input } from 'antd'
import SubHeader from '../../component/subheader/subheader.component'

const Expolre = () => {
  const { people, conversation } = exploreData
  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="Explore" />
        <Input
          style={{
            backgroundColor: '#f4f4f4',
            borderRadius: '0.8em',
            padding: '0.3em 1em',
            boxShadow: 'none',
          }}
          size="large"
          placeholder="Find people and club"
          prefix={
            <i
              className="bi bi-search"
              style={{ marginRight: '5px', width: '20px' }}
            />
          }
        />
      </div>
      <h6>PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContaner}>
        {people.map((Item) => (
          <div>
            <div className="d-flex align-items-center">
              <img
                src="https://avatars.githubusercontent.com/u/90445381?s=400&u=7441253847b500e0e4bfdc84afc627639e83b9ec&v=4"
                alt="user profile"
              />
              <div style={{ marginLeft: '4px' }}>
                <h5>{Item.title}</h5>
                <p>{Item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          Show more people{' '}
          <span>
            <DownOutlined />
          </span>
        </button>
      </div>
      <h6>Find Converstation about...</h6>
      <div className="row mx-0">
        {conversation.map((item) => (
          <div className="col-6 px-2 mb-2">
            <div className={style.conversationCard}>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expolre
