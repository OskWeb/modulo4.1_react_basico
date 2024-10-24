export interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}
export interface paginationEntity {
    members: number;
    pagination: (event, pageNumber: number) => void;
    changeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    page: number;
    perPage: number;
}
export interface MembersList {
    members: MemberEntity[];
}