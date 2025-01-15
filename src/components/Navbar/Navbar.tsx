import { Link } from 'react-router-dom'
import { Button } from '../UI'
import './Navbar.css'
import { NavbarData } from './NavbarData'

export const Navbar = () => {
  return (
      <div className='navbar'>
          {NavbarData.map((sport) => (
              sport === "Главная страница" ? (
                  <Link to="/" key={sport}>
                      <Button type='button' text={sport} />
                  </Link>
              ) : (
                  <Button key={sport} type='button' text={sport} />
              )
          ))}
      </div>
  )
}
