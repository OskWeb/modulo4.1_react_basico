import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Loading: React.FC = () => {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
            <h3>Buscando resultados ...</h3>

        </div>
    )
}

