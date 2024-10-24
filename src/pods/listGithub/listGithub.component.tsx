import React from 'react'
import { ListPagination } from './components/pagination'
import { DataNotFound } from '../../common/dataNotFound'
import { Loading } from '../../common/loading'
import { SearchGithub } from '../../pods/listGithub/components/searchGithub'
import { List } from '../../common-app/list'

export const ListGithubComponent = ({
    handleSearch,
    handleReset,
    term,
    currentSearch,
    loadingGithub,
    fetchOK,
    membersData,
    members,
    handlePagination,
    handleChangeRowsPerPage,
    currentPage,
    usersPerPage
}) => {
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
    )
}

