import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import LogoutPage from './pages/LogoutPage/LogoutPage'


function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>

    </>
  );
}

export default App;
