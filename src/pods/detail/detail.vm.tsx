export interface MemberDetailEntity {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
}
export interface MemberDetail {
    member: MemberDetailEntity;
}
export interface characterDetailEntity {
    id: string;
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    }
    location: {
        name: string
    };
}
export interface CharacterDetail {
    character: characterDetailEntity;
}