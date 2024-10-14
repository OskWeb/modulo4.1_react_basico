import { createContext, ReactNode, useState } from "react";
import React from 'react';

interface SearchProviderProps {
    children: ReactNode;
}

interface SearchContextGithubEntity {
    term: string;
    modifyTerm: ({ }) => void;
    currentPage: number;
    setCurrentPage: ({ }) => void;
    usersPerPage: number;
    setUsersPerPage: ({ }) => void;
    loadingGithub: boolean,
    setLoadingGithub: ({ }) => void;
    currentSearch: string;
    setCurrentSearch: ({ }) => void;
}

export const SearchContextGithub = createContext<SearchContextGithubEntity>(undefined);

export const SearchProviderGithub: React.FC<SearchProviderProps> = ({ children }) => {
    const [term, setTerm] = useState("lemoncode");
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [usersPerPage, setUsersPerPage] = React.useState<number>(5);
    const [loadingGithub, setLoadingGithub] = React.useState<boolean>(true);
    const [currentSearch, setCurrentSearch] = React.useState<string>("lemoncode");

    const modifyTerm = (newTerm: string) => {
        setTerm(newTerm);
    }

    return (
        <SearchContextGithub.Provider value={{
            term,
            modifyTerm,
            currentPage,
            setCurrentPage,
            usersPerPage,
            setUsersPerPage,
            loadingGithub,
            setLoadingGithub,
            currentSearch,
            setCurrentSearch
        }}>
            {children}
        </SearchContextGithub.Provider>
    )
}
