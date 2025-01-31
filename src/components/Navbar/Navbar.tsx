import { Link } from 'react-router-dom'
import { Button } from '../UI'
import './Navbar.css'
import { NavbarData } from './NavbarData'

export const Navbar = () => {
    return (
        <div className='navbar'>
            {NavbarData.map((item) => (
                item === "Избранное" ? (
                    <Link to="/favourite" key={item}>
                        <Button type='button' text={item} />
                    </Link>
                ) : item === "Главная страница" ? (
                    <Link to="/main" key={item}>
                        <Button type='button' text={item} />
                    </Link>
                ) : (
                    <Button key={item} type='button' text={item} />
                )
            ))}
        </div>
    )
}
