import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import CustomInput from '../../../common/customInput';
import { SearchContextRickMorty } from '../../../core/context/searchContextRickMorty';
import LoopIcon from '@mui/icons-material/Loop';
import { SearchTooltip } from '@/common/searchTooltip';

interface SearchInputProps {
    onReset: () => void;
}

export const SearchRickMorty: React.FC<SearchInputProps> = ({ onReset }) => {

    const context = useContext(SearchContextRickMorty);
    const { term, modifyTerm } = context;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        modifyTerm(e.target.value);
    }

    const handleReset = () => {
        onReset();
    }

    return (

        <div className='searchRickMorty'>
            <CustomInput handleInput={handleInput} term={term}></CustomInput>
            <div className='buttonsContainer'>
                <Button variant='contained' color='warning' onClick={handleReset}>
                    Reset
                    <LoopIcon />
                </Button>
                <SearchTooltip text="Filtrar por los diferentes personajes de la serie" />
            </div>

        </div>

    )
}