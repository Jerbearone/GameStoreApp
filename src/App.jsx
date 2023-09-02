
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import NewGame from './components/NewGame'
import Home from './components/Home'
import MoreInfo from './components/MoreInfo'

function App() {
  const navigate = useNavigate();
  //create gamestore front-end and create get/getbyId/post/delete/put
  //put post in new router element
  //create game cards, and add delete, update, and getById(which will go to a different route)
  const goHome = () => {
    navigate("/");

  }

  return (
    <>
      
      <div className="app_title">
        <h1 className='title_style' >GameStore</h1>
        <button onClick={() => {
          goHome();
        }} className='home_button'>Home</button>

      </div>
      <Routes>
        <Route path='/new' element={<NewGame></NewGame>}></Route>
        <Route path='/' element={<Home></Home>}></Route >
        <Route path='/info' element={<MoreInfo></MoreInfo>}></Route>
      </Routes>
    

    </>
  )
}

export default App
