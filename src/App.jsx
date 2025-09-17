
import './App.css'
import { Routes, Route } from 'react-router-dom';

/* componenets */
import HomePage from './pages/HomePage';

/* pages */
import Header from './components/Header';
import FortuneTeller from './pages/FortuneTellerPage';
import FloatingBubblesCanvas from './pages/FloatingBubblesCanvas';


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
          <Route path='/floating-bubbles-canvas' element={
            <>
              <Header/>
              <FloatingBubblesCanvas/>
            </>
          }>            
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
