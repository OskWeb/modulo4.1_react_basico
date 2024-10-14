import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MemberEntity } from '../interfaces/member';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { characterEntity } from '../interfaces/character';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


// interface MembersList {
//     members: MemberEntity[];
// }

// interface CharacterList {
//     characters: characterEntity[];
// }

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


        // <TableContainer component={Paper}>
        //     <Table sx={{ minWidth: 650 }} aria-label='list table'>
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>Image</TableCell>
        //                 <TableCell>ID</TableCell>
        //                 <TableCell>Name</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {
        //                 data ? (
        //                     data.map((person) => (
        //                         <>
        //                             <TableRow
        //                                 key={person.id}
        //                             >
        //                                 <TableCell component="th" scope='members'>
        //                                     <img src={"members" in props ? person.avatar_url : person.image} alt="image" width="120px" />
        //                                 </TableCell>
        //                                 <TableCell component="th" scope='members' style={{ width: 160 }}>
        //                                     {person.id}
        //                                 </TableCell>
        //                                 <TableCell component="th" scope='members' style={{ width: 160 }}>

        //                                     {
        //                                         "members" in props ? (
        //                                             <Link
        //                                                 to={{
        //                                                     pathname: `/list1/detail/${person.login}`,
        //                                                 }}
        //                                                 state={{ from: location.pathname }}
        //                                             >
        //                                                 {person.login}
        //                                             </Link>
        //                                         ) : (
        //                                             <Link
        //                                                 to={{
        //                                                     pathname: `/list2/detail/${person.id}`,
        //                                                 }}
        //                                                 state={{ from: location.pathname }}
        //                                             >
        //                                                 {person.name}
        //                                             </Link>
        //                                         )
        //                                     }

        //                                 </TableCell>
        //                             </TableRow>

        //                         </>

        //                     ))
        //                 ) : (
        //                     ""
        //                 )


        //             }
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    )
}

