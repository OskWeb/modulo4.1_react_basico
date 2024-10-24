import React, { useContext } from 'react'
import { CharacterList } from './listRickMorty.vm';
import { characterEntity } from './listRickMorty.vm';
import { fetchDataRickMortyCharacterPage, filterRickMortyCharacter } from './listRickMorty.api';
import { useDebounce } from '../../common/useDebounce';
import { SearchContextRickMorty } from '../../core/context/searchContextRickMorty';
import { ListRickMortyComponent } from './listRickMorty.component';

export const ListRickMortyContainer: React.FC = () => {

    const context = useContext(SearchContextRickMorty);
    const {
        term, modifyTerm,
        loadingRickMorty, setLoadingRickMorty,
        currentPage, setCurrentPage,
        flagSearch,
        setFlagSearch

    } = context;

    const [characters, setCharacters] = React.useState<characterEntity[]>([]);
    const [fetchOK, setFetchOk] = React.useState<Boolean>(true);

    const [count, setCount] = React.useState<number>();

    const debounceValue = useDebounce(term, 1000);

    React.useEffect(() => {

        if (debounceValue.length > 0) {
            handleSearch();
        }


    }, [debounceValue])

    React.useEffect(() => {
        if (!flagSearch) {
            handleSearch();
        }
    }, [currentPage])

    const handleFetchData = async (page: number) => {

        const data = await fetchDataRickMortyCharacterPage(page, setLoadingRickMorty);
        if (data) {
            setCount(data.info.pages);
            setCharacters(data.results);
            setFetchOk(true);
        }
    }

    const handleFetchDataFilter = async (page: number, term: string) => {

        const data = await filterRickMortyCharacter(page, term, setLoadingRickMorty);

        if (data) {
            setCharacters(data.results);
            setCount(data.info.pages);
            setFetchOk(true);

        } else {
            setFetchOk(false);
        }
    }

    const handleChangeGeneral = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    }

    const handleChangeFilter = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
        handleFetchDataFilter(value, debounceValue);
    }

    const handleSearch = () => {
        const resetPage = 1;

        if (term.length > 0) {
            setCurrentPage(resetPage);
            handleFetchDataFilter(resetPage, debounceValue);
            setFlagSearch(true);
        } else {
            handleFetchData(currentPage);
            setFlagSearch(false);
        }
    }

    const handleReset = () => {
        setCurrentPage(0);
        modifyTerm("");
        setFlagSearch(false);
    }

    const charactersData: CharacterList = {
        characters: characters
    }

    return (
        <>
            <ListRickMortyComponent
                onReset={handleReset}
                loading={loadingRickMorty}
                fetchOK={fetchOK}
                flagSearch={flagSearch}
                term={term}
                charactersData={charactersData}
                count={count}
                page={currentPage}
                handleChangeFilter={handleChangeFilter}
                handleChangeGeneral={handleChangeGeneral}
            />
        </>

    );
}
