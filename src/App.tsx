import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components/UI'
import { Login } from './pages/LoginPage/LoginPage'
import { Main } from './pages/Main/Main'
import { Profile } from './pages/Profile/Profile'
import { Registration } from './pages/Registration/Registration'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
