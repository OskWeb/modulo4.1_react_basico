import React, { useContext } from 'react'
import { SearchContextGithub } from '../../core/context/searchContextGithub';
import { MemberEntity } from './listGithub.vm';
import { MembersList } from '../../types/types';
import { fetchDataGithubCorporation } from './listGithub.api';
import { ListGithubComponent } from './listGithub.component';

export const ListGithubContainer = () => {

    const context = useContext(SearchContextGithub);
    const {
        term, modifyTerm,
        currentPage, setCurrentPage,
        usersPerPage, setUsersPerPage,
        loadingGithub, setLoadingGithub,
        currentSearch, setCurrentSearch
    } = context;

    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [fetchOK, setFetchOk] = React.useState<Boolean>(true);

    React.useEffect(() => {
        handleFetchData(term);

    }, []);

    const handleFetchData = async (term: string) => {
        console.log("termino inicial: " + term);
        let data: any;

        data = await fetchDataGithubCorporation(term, setLoadingGithub);

        if (data) {
            console.log("realizada con exito");
            console.log(data);
            setFetchOk(true);
            setMembers(data);
            setCurrentSearch(term);
        } else {
            setFetchOk(false);
        }
    }

    const handleSearch = (term: string) => {
        modifyTerm(term);
        setCurrentPage(0);
        handleFetchData(term);
    }

    const handlePagination = (event, pageNumber: number) => {
        setCurrentPage(pageNumber);
        console.log('pagination', pageNumber);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUsersPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    }

    const currentMembers = members.slice(currentPage * usersPerPage, currentPage * usersPerPage + usersPerPage);

    const membersData: MembersList = {
        members: currentMembers
    }

    const handleReset = () => {
        handleFetchData("lemoncode");
        modifyTerm("lemoncode");
        setCurrentPage(0);
        setCurrentSearch("lemoncode")
    }

    return (
        <>
            <ListGithubComponent
                handleSearch={handleSearch}
                handleReset={handleReset}
                term={term}
                currentSearch={currentSearch}
                loadingGithub={loadingGithub}
                fetchOK={fetchOK}
                membersData={membersData}
                members={members}
                handlePagination={handlePagination}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                currentPage={currentPage}
                usersPerPage={usersPerPage}
            />
        </>
    )
}