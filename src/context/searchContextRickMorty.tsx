import { createContext, ReactNode, useState } from "react";
import React from 'react';

interface SearchProviderProps {
    children: ReactNode;
}

interface SearchContextRickMortyEntity {
    term: string;
    modifyTerm: ({ }) => void;
    currentPage: number;
    setCurrentPage: ({ }) => void;
    usersPerPage: number;
    setUsersPerPage: ({ }) => void;
    loadingRickMorty: boolean;
    setLoadingRickMorty: ({ }) => void;

}

export const SearchContextRickMorty = createContext<SearchContextRickMortyEntity>(undefined);

export const SearchProviderRickMorty: React.FC<SearchProviderProps> = ({ children }) => {
    const [term, setTerm] = useState("");
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [usersPerPage, setUsersPerPage] = React.useState<number>(5);
    const [loadingRickMorty, setLoadingRickMorty] = React.useState<boolean>(true);

    const modifyTerm = (newTerm: string) => {
        setTerm(newTerm);
    }

    return (
        <SearchContextRickMorty.Provider value={{
            term,
            modifyTerm,
            currentPage,
            setCurrentPage,
            usersPerPage,
            setUsersPerPage,
            loadingRickMorty,
            setLoadingRickMorty
        }}>
            {children}
        </SearchContextRickMorty.Provider>
    )
}