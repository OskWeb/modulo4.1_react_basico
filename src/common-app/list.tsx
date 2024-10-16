import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MemberEntity } from '../pods/listGithub/listGithub.vm';
import { characterEntity } from '../pods/listRickMorty/listRickMorty.vm';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

type MembersList = {
    members: MemberEntity[];
}

type CharacterList = {
    characters: characterEntity[];
}

type ListProps = MembersList | CharacterList;

export const List: React.FC<ListProps> = (props: ListProps) => {

    const location = useLocation();

    const [data, setData] = React.useState<MemberEntity[] | characterEntity[]>();

    useEffect(() => {
        if ("members" in props) {
            setData(props.members);
        } else if ("characters" in props) {
            setData(props.characters);
        }
    }, [props])

    return (
        <div className='listContainer'>
            {
                data ? (
                    data.map((person) => (
                        <Card className='card'>
                            <CardActionArea component={Link}
                                to={"members" in props ? `/list1/detail/${person.login}` : `/list2/detail/${person.id}`}
                                state={{ from: location.pathname }}
                            >
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={"members" in props ? person.avatar_url : person.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    {
                                        "members" in props ? (
                                            <Typography>
                                                {person.login}
                                            </Typography>
                                        ) : (
                                            <Typography>
                                                {person.name}
                                            </Typography>
                                        )
                                    }

                                </CardContent>

                            </CardActionArea>

                        </Card>
                    ))
                ) : (
                    ""
                )
            }

        </div>
    )
}