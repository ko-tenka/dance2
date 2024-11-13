
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import Marina from './pages/Marina/Marina'
import Anastasi from './pages/Anastasi/Anastasi'
import Sofi from './pages/Sofi/Sofi'
import News1 from './pages/News/News1/News1';
import News2 from './pages/News/News2/News2'



function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Marina' element={<Marina />} />
        <Route path='/Anastasi' element={<Anastasi />} />
        <Route path='/Sofi' element={<Sofi />} />

        <Route path='/News1' element={<News1 />} />
        <Route path='/News2' element={<News2 />} />

      </Routes>

    </>
  );
}

export default App;
