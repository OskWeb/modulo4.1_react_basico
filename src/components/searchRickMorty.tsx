import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import CustomInput from '../common/customInput';
import { SearchContextRickMorty } from '../context/searchContextRickMorty';
import LoopIcon from '@mui/icons-material/Loop';

interface SearchInputProps {
    onReset: () => void;
}

export const SearchRickMorty: React.FC<SearchInputProps> = ({ onReset }) => {

    const context = useContext(SearchContextRickMorty);
    const { term, modifyTerm } = context;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        modifyTerm(e.target.value);
        console.log(e.target.value);
    }

    const handleReset = () => {
        onReset();
    }

    return (

        <div className='searchRickMorty'>
            <CustomInput handleInput={handleInput} term={term}></CustomInput>
            <Button variant='contained' color='warning' onClick={handleReset}>
                Reset
                <LoopIcon />
            </Button>
        </div>


    )
}