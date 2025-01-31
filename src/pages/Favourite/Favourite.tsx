import { useEffect, useState } from "react";
import './Favourite.css'
import { Footer, Header, ModalMenu } from "../../components/UI";
import { useGetMatchesQuery } from "../../store/api/footbal.api";

export const Favourite: React.FC = () => {

    const [favorites, setFavorites] = useState<number[]>([]);
    const { data, error, isLoading } = useGetMatchesQuery(64);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const favoriteMatches = data?.matches.filter(match => favorites.includes(match.id)) || [];

    const handleRemoveFromFavorites = (matchId: number) => {
        const updatedFavorites = favorites.filter(id => id !== matchId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    if (isLoading) return <p>Загрузка матчей...</p>;
    if (error) return <p>Ошибка загрузки данных!</p>;

    return (
        <>
            <Header />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Избранное</h2>
                <ul className="matches-list">
                    {favoriteMatches.map((match) => (
                        <div key={match.id} className="match-item">
                            <div className="match-details">
                                <img
                                    src={match.homeTeam.crest || '/default-team-logo.png'}
                                    alt={match.homeTeam.name}
                                    className="team-logo"
                                />
                                <span className="team-name">{match.homeTeam.name}</span> vs
                                <span className="team-name">{match.awayTeam.name}</span>
                                <img
                                    src={match.awayTeam.crest || '/default-team-logo.png'}
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
                                    onClick={() => handleRemoveFromFavorites(match.id)}
                                    className="favorite-button">
                                    Удалить из избранного
                                </button>
                                <ModalMenu match={match} />
                            </div>
                        </div>
                    ))}
                </ul>

            </div>
            <Footer />
        </>
    );
};