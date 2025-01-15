import { Link } from 'react-router-dom';
import { Navbar } from '../../Navbar/Navbar';
import { Button } from '../Button/Button';
import './Header.css'

export const Header: React.FC = () => {
    return (
        <header>
            <div>
                <h1>Live Result</h1>
                <p>Футбол онлайн — результаты и счета матчей.</p>
                <Link to="/login">
                    <Button type='button' text="Войти" />
                </Link>
            </div>
            <Navbar />
        </header>
    );
};
