import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/UI/alert-dialog";
import { Area } from "@/store/api/types";

interface AreasModalMenuProps {
    area: Area;
    onClose: () => void; 
}

export const AreasModalMenu: React.FC<AreasModalMenuProps> = ({ area, onClose }) => {
    if (!area) return null;

    return (
        <AlertDialog open={true} onOpenChange={(open) => !open && onClose()}>
            <AlertDialogContent className="stylesmodalContent">
                <AlertDialogHeader>
                    <AlertDialogTitle className="stylesteamTitle">
                        <div>
                            <img
                                src={area.flag || 'default_flag.png'}
                                alt={area.name}
                                className="stylesteamLogo"
                            />
                        </div>
                        {area.name}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="stylesdescription">
                        <span><strong>Код страны:</strong> {area.countryCode}</span>
                        <span>{area.parentArea}</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="stylesbutton" onClick={onClose}>Закрыть</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
