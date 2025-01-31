import './ModalMenu.css';

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/UI/alert-dialog";
import { Match } from "@/store/api/types";

interface ModalMenuProps {
    match: Match;
}

export const ModalMenu: React.FC<ModalMenuProps> = ({ match }) => {
    if (!match) return null;
    return (
        <AlertDialog>
            <AlertDialogTrigger className="stylesbutton">Подробнее</AlertDialogTrigger>
            <AlertDialogContent className="stylesmodalContent">
                <AlertDialogHeader>
                    <AlertDialogTitle className="stylesteamTitle">
                        <div>
                            <img
                                src={match.homeTeam.crest}
                                alt={match.homeTeam.name}
                                className="stylesteamLogo" />

                        </div>
                        Матч: {match.homeTeam.name} vs {match.awayTeam.name}
                        <img
                            src={match.awayTeam.crest}
                            alt={match.awayTeam.name}
                            className="stylesteamLogo" />
                    </AlertDialogTitle>
                    <AlertDialogDescription className="stylesdescription">
                        <span><strong>Дата:</strong> {match.utcDate.split("T")[0]}</span>
                        <span><strong>Стадия:</strong> {match.stage}</span>
                        <span><strong>Турнир:</strong> {match.competition.name} ({match.area.name})</span>
                        <span><strong>Счет:</strong> {match.score.fullTime.home} : {match.score.fullTime.away}</span>
                        {match.score.winner && (
                            <span><strong>Победитель:</strong> {match.score.winner === "HOME_TEAM" ? match.homeTeam.name : match.awayTeam.name}</span>
                        )}
                        <span><strong>Судьи:</strong> {match.referees.length > 0 ? match.referees.map(ref => ref.name).join(", ") : "Нет данных"}</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="stylesbutton">Закрыть</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
