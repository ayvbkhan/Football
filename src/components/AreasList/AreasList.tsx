import './AreasList.css';
import { useState } from "react";
import { useGetAreasQuery } from "../../store/api/footbal.api";
import { AreasModalMenu } from "./AreasModalMenu"; 
import { Area } from "../../store/api/types"; 

const AreasList: React.FC = () => {
    const { data: areasData, error: areasError, isLoading: areasLoading } = useGetAreasQuery();
    const [selectedArea, setSelectedArea] = useState<null | Area>(null); 

    if (areasLoading) return <p>Загрузка стран...</p>;
    if (areasError) return <p>Ошибка загрузки данных стран!</p>;

    const areasWithFlags = areasData?.areas?.filter((area) => area.flag !== null).slice(0, 50) || [];

    const handleCloseModal = () => {
        setSelectedArea(null); 
    };

    return (
        <div>
            <h2>Страны:</h2>
            {areasWithFlags.map((area) => (
                <div
                    key={area.id}
                    className="areaItem"
                    onClick={() => setSelectedArea(area)} 
                >
                    <img src={area.flag || 'default_flag.png'} alt={area.name} />
                    <h3>{area.name}</h3>
                </div>
            ))}
            {selectedArea && (
                <AreasModalMenu area={selectedArea} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default AreasList;
