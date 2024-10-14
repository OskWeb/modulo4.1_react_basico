export interface paginationEntity {
    members: number;
    pagination: (event, pageNumber: number) => void;
    changeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    page: number;
    perPage: number;
}