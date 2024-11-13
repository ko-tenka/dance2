import './News1.css'
import { Link } from 'react-router-dom';

export default function News1() {
    return (
        <div className='glav_news'>
          <h1 className='zag'>Champ fest «Scala»</h1>
          <img className='photoPro' src="./news1.jpeg"  alt="Фото" />
    
          <div className='opisanie_news'>
           <p className='text_marina'> 
           На конкурсе 
           Номер «шабаш» лауреат 1 степени <br/>
           Номер «вдох-выдох» лауреат 2 степени <br/>
           Номер «сияй» лауреат 1 степени <br/>
           Номер «погружение» лауреат 1 степени <br/>
           Номер «сказочная» лауреат 2 степени <br/>
           Номер «лесной житель» дипломант 1 степени</p>
           <br/>
           <Link to='/' className='back'> {'<'}Назад</Link>
          </div>

          
        </div>
      )
}
