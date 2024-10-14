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