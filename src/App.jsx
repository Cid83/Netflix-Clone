
import './App.css'
import MainPage from './pages/MainPage'
import Header from './components/Header'
import MovieDetail from './pages/MovieDetail'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/movie/:movie_id" element={<MovieDetail/>}/>
      </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
