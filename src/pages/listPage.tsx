import React, { ChangeEvent, useContext } from "react";
import { List } from "../components/list";
import { MemberEntity } from "../interfaces/member";
import { DataNotFound } from "../components/dataNotFound";
import { SearchContextGithub } from "../context/searchContextGithub";
import { ListPagination } from "../components/pagination";
import { Loading } from "../components/loading";
import { MembersList } from "../types/types";
import { SearchGithub } from "../components/searchGithub";
import { fetchDataGithubCorporation } from "../api/fetchDataAPI1";


export const ListPage: React.FC = () => {

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
        <div>
            <SearchGithub onSearch={handleSearch} onReset={handleReset} term={term} />
            <h2 className="title">Listado de miembros {currentSearch}</h2>
            {loadingGithub ? (
                <Loading />
            ) : (
                fetchOK ? (
                    <>
                        <List {...membersData} />
                        <ListPagination
                            members={members.length}
                            pagination={handlePagination}
                            changeRowsPerPage={handleChangeRowsPerPage}
                            page={currentPage}
                            perPage={usersPerPage}
                        />
                    </>

                ) : <DataNotFound term={term} />
            )}



        </div>
    );
};