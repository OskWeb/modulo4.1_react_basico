import React, { useContext } from 'react'
import { Alert } from '@mui/material';

interface dataNotFoundEntity {
    term: string
}

export const DataNotFound: React.FC<dataNotFoundEntity> = ({ term }) => {

    return (
        <div>
            <Alert severity='warning'>La busqueda "{term}" no obtuvo ningún resultado</Alert>
        </div>
    )
}