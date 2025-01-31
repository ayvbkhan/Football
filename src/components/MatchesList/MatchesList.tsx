import { useEffect, useState } from "react";
import { useGetMatchesQuery } from "../../store/api/footbal.api";
import './MatchesList.css';
import { ModalMenu } from "../UI";

const MatchesList: React.FC = () => {
    const teamId = 64;
    const { data, error, isLoading } = useGetMatchesQuery(teamId);

    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const addToFavorites = (matchId: number) => {
        if (!favorites.includes(matchId)) {
            const updatedFavorites = [...favorites, matchId];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    const removeFromFavorites = (matchId: number) => {
        const updatedFavorites = favorites.filter(id => id !== matchId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };


    if (isLoading) return <p>Загрузка матчей...</p>;
    if (error) return <p>Ошибка загрузки данных!</p>;

    return (
        <div className="matches-list-container">
            <h2>Матчи команды:</h2>
            <ul className="matches-list">
                {data?.matches.map((match) => (
                    <div key={match.id} className="match-item">
                        <div className="match-details">
                            <img
                                src={match.homeTeam.crest}
                                alt={match.homeTeam.name}
                                className="team-logo"
                            />
                            <span className="team-name">{match.homeTeam.name}</span> vs
                            <span className="team-name">{match.awayTeam.name}</span>
                            <img
                                src={match.awayTeam.crest}
                                alt={match.awayTeam.name}
                                className="team-logo"
                            />
                        </div>
                        <div className="match-date">
                            {match.utcDate.split("T")[0]} 
                        </div>
                        <div className="match-score">
                            <strong>{match.score.fullTime.home} : {match.score.fullTime.away}</strong>
                        </div>
                        <div className="winner-info">
                            {match.score.winner && (
                                <p>Победитель: {match.score.winner === "HOME_TEAM" ? match.homeTeam.name : match.awayTeam.name}</p>
                            )}
                        </div>
                        <div className="cardButton" >
                        <button
                            className="favorite-button"
                            onClick={() => {
                                if (favorites.includes(match.id)) {
                                    removeFromFavorites(match.id); 
                                } else {
                                    addToFavorites(match.id); 
                                }
                            }}
                        >
                            {favorites.includes(match.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
                        </button>
                            <ModalMenu match={match} />
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default MatchesList;
