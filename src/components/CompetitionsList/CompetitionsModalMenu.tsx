import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/UI/alert-dialog";
import { Competition } from "@/store/api/types";

interface CompetitionsModalMenuProps {
    competition: Competition;
    onClose: () => void; 
}

export const CompetitionsModalMenu: React.FC<CompetitionsModalMenuProps> = ({ competition, onClose }) => {
    if (!competition) return null;

    return (
        <AlertDialog open={true} onOpenChange={(open) => !open && onClose()}>
            <AlertDialogContent className="stylesmodalContent">
                <AlertDialogHeader>
                    <AlertDialogTitle className="stylesteamTitle">
                        <div>
                            <img
                                src={competition.emblem || 'default_flag.png'}
                                alt={competition.name}
                                className="stylesteamLogo"
                            />
                        </div>
                        {competition.name}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="stylesdescription">
                        <span>{competition.area?.name || 'Не указано'}</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="stylesbutton" onClick={onClose}>Закрыть</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
