import './CompetitionsList.css';
import { useGetCompetitionsQuery } from "../../store/api/footbal.api";
import { Competition } from "@/store/api/types";
import { useState } from 'react';
import { CompetitionsModalMenu } from './CompetitionsModalMenu';

const CompetitionsList: React.FC = () => {
    const { data: competitionsData, error: competitionsError, isLoading: competitionsLoading } = useGetCompetitionsQuery();
    const [selectedCompetition, setSelectedCompetition] = useState<null | Competition>(null);

    if (competitionsLoading) return <p>Загрузка соревнований...</p>;
    if (competitionsError) return <p>Ошибка загрузки данных соревнований!</p>;

    const competitions = competitionsData?.competitions?.slice(0, 50) || [];

    const handleCloseModal = () => {
        setSelectedCompetition(null);
    };

    return (
        <div>
            <h2>Соревнования:</h2>
            {competitions.map((competition) => (
                <div
                    key={competition.id}
                    className="competitionItem"
                    onClick={() => setSelectedCompetition(competition)} 
                >
                    <img
                        src={competition.emblem || 'default_emblem.png'}
                        alt={competition.name}
                        style={{ width: '35px', height: '35px' }}
                    />
                    <h3>{competition.name}</h3>
                    <p>{competition.area?.name || 'Не указано'}</p>
                </div>
            ))}

            {selectedCompetition && (
                <CompetitionsModalMenu competition={selectedCompetition} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default CompetitionsList;
