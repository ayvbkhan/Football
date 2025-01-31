import React from 'react';
import MatchesList from "../../components/MatchesList/MatchesList";
import { Footer, Header } from "../../components/UI";
import './Main.css';
import AreasList from '../../components/AreasList/AreasList';
import CompetitionsList from '../../components/CompetitionsList/CompetitionsList';


export const Main: React.FC = () => {
    
    return (
        <>
            <Header />
            <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#afd7d8' }}>
                <div className="marquee">
                    <p>Добро пожаловать на Live Result!</p>
                </div>
            </div>
            <div className="mainContainer">
                <div className="leftSide">
                    <AreasList />
                </div>
                <div className="centerSide">
                    <MatchesList />
                </div>
                <div className="rightSide">
                    <CompetitionsList />
                </div>
            </div>
            <Footer />
        </>
    );
};
