import React from 'react'
import { Loading } from '../../common/loading'
import { List } from '../../common-app/list'
import { Pagination } from '@mui/material'
import { DataNotFound } from '../../common/dataNotFound'
import { SearchRickMorty } from './components/searchRickMorty'

export const ListRickMortyComponent = ({
    onReset,
    loading,
    fetchOK,
    flagSearch,
    term,
    charactersData,
    count,
    page,
    handleChangeFilter,
    handleChangeGeneral
}) => {
    return (
        <div className='listRickMortyPage'>
            <SearchRickMorty onReset={onReset} />
            <div className='listbox'>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        fetchOK ? (
                            flagSearch ? (
                                <>
                                    <h2 className='title'>Resultado de búsqueda para "{term}"</h2>
                                    <List {...charactersData} />
                                    <Pagination
                                        count={count}
                                        page={page}
                                        onChange={handleChangeFilter}
                                        siblingCount={0}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'end'
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <h2 className="title">Listado de personajes</h2>
                                    <List {...charactersData} />
                                    <Pagination count={count} page={page} onChange={handleChangeGeneral} siblingCount={0} />
                                </>
                            )
                        ) :
                            <DataNotFound term={term} />
                    )
                }

            </div>


        </div >
    )
}