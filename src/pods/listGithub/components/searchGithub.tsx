import React, { useContext } from 'react'
import { SearchContextGithub } from '../../../core/context/searchContextGithub';
import Button from '@mui/material/Button';
import CustomInput from '../../../common/customInput';
import SearchIcon from '@mui/icons-material/Search';
import LoopIcon from '@mui/icons-material/Loop';
import { SearchTooltip } from '@/common/searchTooltip';

interface SearchInputProps {
    onSearch: (term: string) => void;
    onReset: () => void;
    term: string;
}

export const SearchGithub: React.FC<SearchInputProps> = ({ onSearch, onReset }) => {

    const context = useContext(SearchContextGithub);
    const { term, modifyTerm } = context;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        modifyTerm(e.target.value);
    }

    const handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(term);
    };

    const handleReset = () => {
        onReset();
    }

    return (

        <form className='searchGithub' onSubmit={handleSearchClick}>
            <CustomInput handleInput={handleInput} term={term}></CustomInput>
            <div className='buttonsBox'>
                <div className='actionsGroup'>
                    <Button
                        variant='contained'
                        type='submit'
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                sm: 'center',
                                md: 'space-between'
                            },
                            width: {
                                sm: 40,
                                md: 120
                            },

                        }}
                    >
                        <span>Buscar</span>
                        <SearchIcon />
                    </Button>
                    <Button
                        variant='contained'
                        color='warning'
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                sm: 'center',
                                md: 'space-between'
                            },
                            width: {
                                sm: 40,
                                md: 120
                            },

                        }}
                        onClick={handleReset}>
                        <span>Reset</span>
                        <LoopIcon />
                    </Button>
                </div>

                <SearchTooltip text="Buscar por compañía con sus respectivos miembros" />
            </div>
        </form>


    )
}