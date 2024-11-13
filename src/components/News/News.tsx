import React from 'react'
import './News.css'
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <div className='news_conteiner'>
      <h1 className='newszag'>Новости студии</h1>

      <div className='news_block'>

        <div className='card'> 
           <Link className='photo' to='/News1'>
                <img className='photo' src="./news1.jpeg" alt="Новость 1" />
            </Link>
            <Link  className='name_news' to='/News1'>Champ fest «Scala»</Link>
            <Link  className='podrobnee' to='/News1'>Подробнее {'>'}</Link>
        </div>

        <div className='card'> 
           <Link className='photo' to='/News2'>
                <img className='photo' src="./news2.jpeg" alt="Новость 1" />
            </Link>
            <Link  className='name_news' to='/News2'>Конкурс «Only dance»</Link>
            <Link  className='podrobnee' to='/News2'>Подробнее {'>'}</Link>
        </div>
      </div>
    </div>
  )
}
// размер фото: 951 Х 951
// класс card тут прописан в Teacher css и используется в Teacher tsx