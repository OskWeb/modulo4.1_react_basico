import * as React from 'react';
import { Input } from '@mui/material';
import { useTheme } from '@mui/system';

export default function CustomInput({ handleInput, term }) {
    return (
        <React.Fragment>
            <Input
                slotProps={{ input: { className: 'CustomInput' } }}
                aria-label="Search input"
                placeholder="Type something…"
                onChange={handleInput}
                value={term}
                sx={{
                    width: {
                        sx: '100%'
                    }
                }}
            />
            <Styles />
        </React.Fragment>
    );
}

const cyan = {
    50: '#E9F8FC',
    100: '#BDEBF4',
    200: '#99D8E5',
    300: '#66BACC',
    400: '#1F94AD',
    450: '#1976D2',
    500: '#0D5463',
    600: '#094855',
    700: '#063C47',
    800: '#043039',
    900: '#022127',
};


const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

function useIsDarkMode() {
    const theme = useTheme();
    return theme.palette.mode === 'dark';
}

function Styles() {
    // Replace this with your app logic for determining dark mode
    const isDarkMode = useIsDarkMode();

    return (
        <style>
            {`
      .CustomInput {
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        
        color: ${isDarkMode ? grey[300] : grey[900]};
        background: ${isDarkMode ? grey[900] : '#fff'};
        border: 1px solid ${isDarkMode ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${isDarkMode ? grey[900] : grey[50]};

        &:hover {
            border-color: ${cyan[450]};
        }

        &:focus {
            border-color: ${cyan[450]};
        }

        &:focus-visible {
          outline: 0;
        }
      }
      `}
        </style>
    );
}