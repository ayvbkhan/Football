import { useGetAreasQuery } from "../../store/api/footbal.api";

export const Main: React.FC = () => {
    const { data, error, isLoading } = useGetAreasQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;
    return (
        <>
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Главная страница</h2>
            <p>Добро пожаловать на Live Result!</p>
        </div>
         <ul>
      {data?.map((area) => (
        <li key={area.id}>
          {area.name} ({area.countryCode})
        </li>
      ))}
            </ul>
        </>
    );
};