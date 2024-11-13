import './Marina.css';
import { Link } from 'react-router-dom';

export default function Marina() {
  return (
    <div className='glav'>
      <h1 className='zag'>Марина Дмитриева</h1>
      <img className='photoPro' src="./marina.jpeg" alt="Марина" />

      <div className='opisanie'>
       <p className='work'>Руководитель клуба</p>
       <p className='text_marina'> Закончила Кузбасский колледж культуры и искусств имени народного артиста СССР Иосифа Давыдовича Кобзона! <br/>
        Победительница всероссийский и международных конкурсов и фестивалей!   <br/>
        Хореограф, педагог и основатель школы современного танца « Maze dance company» по направлению contemporary , modern, детский танец!  <br/>
        Ученики школы являются победителями чемпионата «Scala Champ-Fest» в 2023 году!  <br/>
        Обладатели многократных побед на всероссийских и международных конкурсах и фестивалей!</p>
        <br/>
           <Link to='/' className='back'> {'<'}Назад</Link>
      </div>
    </div>
  )
}
