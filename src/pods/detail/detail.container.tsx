import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { fetchDataGithubMember } from './detail.api';
import { fetchDataRickMortyCharacter } from './detail.api';
import { characterDetailEntity, MemberDetailEntity } from './detail.vm';
import { DetailComponent } from './detail.component';
import { CharacterDetail, MemberDetail } from '../detail/detail.vm';

const DetailContainer = () => {

    const { id } = useParams();
    const location = useLocation();

    const previousPath = location.state?.from;

    const [userDetail, setUserDetail] = React.useState<MemberDetailEntity>(undefined);
    const [characterDetail, setCharacterDetail] = React.useState<characterDetailEntity>(undefined);
    const [fetchOK, setFetchOk] = React.useState<Boolean>(false);

    const url1 = 'https://api.github.com/users/';
    const url2 = 'https://rickandmortyapi.com/api/character/'

    useEffect(() => {
        handleFetchData();
    }, [])

    const handleFetchData = async () => {
        let data1: MemberDetailEntity;
        let data2: characterDetailEntity;
        if (previousPath == '/list1') {
            data1 = await fetchDataGithubMember(id, url1);
            if (data1) {
                setUserDetail(data1);
                setCharacterDetail(undefined);
            }

        } else if (previousPath == '/list2') {
            data2 = await fetchDataRickMortyCharacter(id, url2);
            if (data2) {
                setCharacterDetail(data2);
                setUserDetail(undefined);
            }

        }

        data1 || data2 ? setFetchOk(true) : setFetchOk(false);

    }

    const userData: MemberDetail = {
        member: userDetail
    }

    const characterData: CharacterDetail = {
        character: characterDetail
    }


    return (
        <>
            {fetchOK ? (
                userDetail ? (
                    <DetailComponent {...userData} />
                )
                    : characterDetail ? (
                        <DetailComponent {...characterData} />
                    ) : ""
            ) : (
                ""
            )
            }
        </>
    )
}

export default DetailContainer