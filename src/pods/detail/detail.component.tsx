import { Card, CardContent, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CharacterDetail, MemberDetail } from '../detail/detail.vm';

type ListProps = MemberDetail | CharacterDetail;

export const DetailComponent: React.FC<ListProps> = (props: ListProps) => {
    return (
        <Container className="detailContainer">
            <Card variant="outlined" className="detailHeader">
                <CardContent className="content">
                    <div className="contentLeft">
                        {
                            "member" in props ? (
                                <>
                                    <img src={props.member.avatar_url} alt="User Image" />
                                    <h3>{props.member.login}</h3>
                                </>

                            ) : (
                                <>
                                    <img src={props.character.image} alt="User Image" />
                                    <h3>{props.character.name}</h3>
                                </>
                            )
                        }

                    </div>
                    <div className="contentRight">
                        <div className="top">
                            <Typography sx={{ color: 'text.primary', fontSize: 24 }}>
                                Info
                            </Typography>
                        </div>

                        <Divider />
                        <div className="below">

                            {
                                "member" in props ? (
                                    <>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Github:</span>
                                            <a href={props.member.html_url}>{props.member.html_url}</a>

                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Name:</span>
                                            {props.member.name}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Company:</span>
                                            {props.member.company}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Public Repos:</span>
                                            {props.member.public_repos}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Public Gists:</span>
                                            {props.member.public_gists}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Followers:</span>
                                            {props.member.followers}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Following:</span>
                                            {props.member.following}
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Id:</span>
                                            {props.character.id}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Status:</span>
                                            {props.character.status}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Species:</span>
                                            {props.character.species}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Gender:</span>
                                            {props.character.gender}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Origin:</span>
                                            {props.character.origin.name}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            <span>Location:</span>
                                            {props.character.location.name}
                                        </Typography>
                                    </>
                                )
                            }

                        </div>

                    </div>
                </CardContent>
            </Card>
            {
                "member" in props ? (
                    <Link className='link' to={"/list1"}>Volver</Link>
                ) : (
                    <Link className='link' to={"/list2"}>Volver</Link>
                )
            }

        </Container>
    )
}