
import './Teacher.css'
import { Link } from 'react-router-dom';

export default function Teacher() {
  return (
    <div className='backdround'>
      <h1 className='zagolovok_ped'>Наши педагоги</h1>

        <div className='vse'>
          <div className='card'>
             <Link className='photo' to='/Marina'>
                <img className='photo' src="./marina.jpeg" alt="Марина" />
             </Link>
             <Link  to='/Marina'>Марина Дмитриева</Link>
             <Link  to='/Marina'>Руководитель клуба</Link>
          </div>

          <div className='card'>
             <Link className='photo' to='/Anastasi'>
                <img className='photo' src="./anastasia.jpeg" alt="Анастасия" />
             </Link>
             <Link  to='/Anastasi'>Анастасия Носенко</Link>
             <Link  to='/Anastasi'>Тренер по CONTEMPORARY</Link>
          </div>
          

          <div className='card'>
             <Link className='photo' to='/Sofi'>
                <img className='photo' src="./sofia.jpeg" alt="София" />
             </Link>
             <Link  to='/Sofi'>София Назаренко</Link>
             <Link  to='/Sofi'>Тренер по Choreo</Link>
          </div>

        </div>

        <div>
          <img className='line' src="./line3.PNG" alt="линия" />
        </div>
    </div>
  )
}
