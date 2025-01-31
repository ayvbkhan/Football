
export interface Area {
    id: number;
    name: string;
    countryCode: string;
    flag: string | null;
    parentAreaId: number;
    parentArea: string;
}


export interface AreasResponse {
    count: number;
    filters: Record<string, any>;
    areas: Area[];
}

export interface Competition {
    id: number;
    name: string;
    area: { name: string };
    emblem: string | null;
}

export interface CompetitionResponse {
    competitions: Competition[];
}

export interface MatchResponse {
    count: number; 
    filters: {
        season?: string; 
    };
    matches: Match[]; 
}

export interface Match {
    id: number; 
    competition: {
        id: number;
        name: string | undefined;
        area: {
            id: number;
            name: string;
        };
    };
    area: {
        id: number;
        name: string;
    };
    season: {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number;
    };
    utcDate: string; 
    status: string; 
    matchday: number;
    stage: string;
    group?: string; 
    lastUpdated: string;

    homeTeam: Team;
    awayTeam: Team;

    score: {
        winner: "HOME_TEAM" | "AWAY_TEAM" | "DRAW" | null; 
        fullTime: Score;
        halfTime: Score;
        extraTime?: Score;
        penalties?: Score;
    };
    referees: Referee[];
}

export interface Team {
    id: number;
    name: string;
    shortName?: string;
    tla?: string;
    crest?: string; 
}

export interface Score {
    home: number | null; 
    away: number | null; 
}

export interface Referee {
    id: number;
    name: string;
    nationality?: string;
}


