import React, { useContext } from 'react'
import { Alert } from '@mui/material';
import { dataNotFoundEntity } from '../interfaces/dataNotFound';

export const DataNotFound: React.FC<dataNotFoundEntity> = ({ term }) => {

    return (
        <div>
            <Alert severity='warning'>La busqueda "{term}" no obtuvo ningún resultado</Alert>
        </div>
    )
}