import React, { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MemberDetailEntity } from "../interfaces/memberDetail";
import { Detail } from "../components/detail";
import { fetchDataRickMortyCharacter } from "../api/fetchDataAPI2";
import { characterDetailEntity } from "../interfaces/characterDetail";
import { CharacterDetail, MemberDetail } from "../types/types";
import { fetchDataGithubMember } from "../api/fetchDataAPI1";
import { SearchContextGithub } from "../context/searchContextGithub";
import { SearchContextRickMorty } from "../context/searchContextRickMorty";

export const DetailPage: React.FC = () => {
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
        <div>
            {fetchOK ? (
                userDetail ? (
                    <Detail {...userData} />
                )
                    : characterDetail ? (
                        <Detail {...characterData} />
                    ) : ""
            ) : (
                ""
            )
            }
        </div >
    );
};