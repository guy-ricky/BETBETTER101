export type LeagueMeta = {
    slug: string;
    leagueId: number;
    season: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    type: string;
};

export type StandingRow = {
    rank: number;
    teamId: number;
    team: string;
    logo: string;
    played: number;
    win: number;
    draw: number;
    lose: number;
    gf: number;
    ga: number;
    gd: number;
    points: number;
    form: string;
};

export type TeamSide = {
    id: number;
    name: string;
    logo: string;
    goals: number | null;
};

export type Fixture = {
    id: number;
    date: string;
    status: string; // NS, FT, 1H, 2H, etc.
    venue: string;
    home: TeamSide;
    away: TeamSide;
};

export type Scorer = {
    playerId: number;
    name: string;
    photo: string;
    team: string;
    goals: number;
    assists: number;
    matches: number;
};
