
import './App.css'
import { Routes, Route } from 'react-router-dom';

/* pages */
import HomePage from './pages/HomePage';

/* components */
import Header from './components/Header';
import FortuneTeller from './pages/FortuneTellerPage';


function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={
            <>
              <Header/>
              <HomePage/>

            </>
          }>
          </Route>
          <Route path='/fortune-teller-page' element={
            <>
              <Header/>
              <FortuneTeller/>
            </>
          }>            
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
