import React from 'react'
import { paginationEntity } from '../listGithub.vm';
import { TablePagination } from '@mui/material';


export const ListPagination: React.FC<paginationEntity> = ({ members, pagination, changeRowsPerPage, page, perPage }) => {

    const paginationNumbers = [];

    return (

        <TablePagination
            component="div"
            count={members}
            page={page}
            onPageChange={(event, page) => pagination(event, page)}
            rowsPerPage={perPage}
            onRowsPerPageChange={(event) => changeRowsPerPage(event)}
            rowsPerPageOptions={[5, 10, 15]}
        />
    )
}

