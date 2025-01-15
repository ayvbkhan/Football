export interface Area {
    id: number;
    name: string;
    countryCode: string;
    ensignUrl: string | null;
    parentAreaId: number | null;
    parentArea: string | null;
}