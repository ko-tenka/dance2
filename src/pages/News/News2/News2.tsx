import { Link } from 'react-router-dom';

export default function News1() {
    return (
        <div className='glav_news'>
          <h1 className='zag'>Конкурс «Only dance» </h1>
          <img className='photoPro' src="./news2.jpeg"  alt="Фото" />
    
          <div className='opisanie_news'>
           <p className='text_marina'> 
           
           Номер «дотянуться до» лауреат 1 степени <br/>
           Номер «шабаш» лауреат 1 степени <br/>
           Номер «сияй» лауреат 1 степени <br/>
           Номер «я рисую» лауреат 1 степени <br/>
           Номер «красное величество» лауреат 1 степени <br/>
           Номер «птица» лауреат 2 степени <br/>
           Номер «погружение» лауреат 2 степени<br/>
           </p>
           <br/>
           <Link to='/' className='back'> {'<'}Назад</Link>
          </div>
        </div>
      )
}
