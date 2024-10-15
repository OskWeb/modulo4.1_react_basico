import React, { useContext } from 'react'
import { DataNotFound } from '../components/dataNotFound';
import { CharacterList } from '../types/types';
import { characterEntity } from '../interfaces/character';
import { List } from '../components/list';
import { Pagination } from '@mui/material';
import { fetchDataRickMortyCharacterPage, filterRickMortyCharacter } from '../api/fetchDataAPI2';
import { useDebounce } from '../common/useDebounce';
import { SearchRickMorty } from '../components/searchRickMorty';
import { SearchContextRickMorty } from '../core/context/searchContextRickMorty';
import { Loading } from '../common/loading';


export const ListRickMorty: React.FC = () => {

    const context = useContext(SearchContextRickMorty);
    const { term, modifyTerm } = context;

    const [characters, setCharacters] = React.useState<characterEntity[]>([]);
    const [fetchOK, setFetchOk] = React.useState<Boolean>(true);

    const [flagSearch, setFlagSearch] = React.useState<Boolean>(false);
    const [page, setPage] = React.useState<number>(1);
    const [count, setCount] = React.useState<number>();

    const context2 = useContext(SearchContextRickMorty);
    const { loadingRickMorty, setLoadingRickMorty } = context2;

    const debounceValue = useDebounce(term, 1000);

    React.useEffect(() => {

        handleSearch();
        console.log("--use effect---");
        console.log("termino: " + term);

    }, [debounceValue])

    const handleFetchData = async (page: number) => {

        const data = await fetchDataRickMortyCharacterPage(page, setLoadingRickMorty);
        if (data) {
            console.log(data.info);
            setCount(data.info.pages);
            setCharacters(data.results);
            setFetchOk(true);
        }
    }

    const handleFetchDataFilter = async (page: number, term: string) => {

        const data = await filterRickMortyCharacter(page, term, setLoadingRickMorty);

        if (data) {
            console.log(data.info);

            setCharacters(data.results);
            setCount(data.info.pages);
            setFetchOk(true);

        } else {
            setFetchOk(false);
        }
    }

    const handleChangeGeneral = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        handleFetchData(value);
        console.log(value);
    }

    const handleChangeFilter = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        handleFetchDataFilter(value, debounceValue);
    }

    const handleSearch = () => {
        const resetPage = 1;
        setPage(resetPage);
        if (term.length > 0) {
            handleFetchDataFilter(resetPage, debounceValue);
            console.log("busqueda actual: " + term);
            console.log("pagina actual: " + resetPage);
            console.log("--consulta filtro----");
            setFlagSearch(true);
        } else {
            handleFetchData(resetPage);
            console.log("pagina actual: " + resetPage);
            console.log("--consulta general----");
            setFlagSearch(false);
        }
    }

    const handleReset = () => {
        modifyTerm("");
        setFlagSearch(false);
    }

    const charactersData: CharacterList = {
        characters: characters
    }

    return (
        <>
            <div className='listRickMortyPage'>
                <SearchRickMorty onReset={handleReset} />
                <div className='listbox'>
                    {
                        loadingRickMorty ? (
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
        </>

    );
}
