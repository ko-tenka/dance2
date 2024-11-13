import  { useState } from 'react';
import './Slider.css';

export default function Slider() {
    const [isImageClicked, setIsImageClicked] = useState(false);

    const handleImageClick = () => {
      setIsImageClicked(true);
    };

  return (
    <div className='container_carousel'>

          <div className='slide fon'>
            <img className='photo2' src="./frind.png" alt="Красивая картинка" />
            <h3 className='text2'>Приведи друга</h3>

            {!isImageClicked ? (
              <img 
                className='gif' 
                src="./gift2.gif" 
                alt="Подарок!" 
                onClick={handleImageClick} 
              />
            ) : (
              // <div className='conteiner_txt'>
                <div className='gif_txt'>
                <div className='podloshka'></div>
                <p className='text-overlay'> Бесплатное пробное занятие!</p>
              </div>
            )}
          </div>
      </div>
  );
}
