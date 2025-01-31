import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/LoginPage/LoginPage'
import { Main } from './pages/Main/Main'
import { Favourite } from './pages/Favourite/Favourite'
import { Registration } from './pages/Registration/Registration'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
