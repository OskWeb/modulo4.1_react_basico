import { DrawerBurguer, Url } from '@/common/drawer';
import { AppBar, Box, Tab, Tabs, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const HeaderComponent = ({ classes, onHandleTabChange, tabIndex }) => {

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    useEffect(() => {

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])

    const urls: Url[] = [
        {
            path: '/list1',
            label: 'API Github'
        },
        {
            path: '/list2',
            label: 'API Rick & Morty'
        }
    ]
    return (
        <AppBar
            position='fixed'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 50px 10px 50px',

            }}
        >
            <Toolbar>
                <Box
                    component="img"
                    sx={{
                        height: 40,
                    }}
                    alt='Logo Lemoncode'
                    src="/home-logo.png"
                ></Box>
            </Toolbar>
            {

                screenWidth >= 600 ? (
                    <>
                        <Tabs
                            className={classes.tabContainer}
                            value={tabIndex}
                            onChange={onHandleTabChange}
                        >
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/list1"
                                label="API Github"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/list2"
                                label="API Rick & Morty"
                            />
                        </Tabs>
                    </>
                ) : (
                    <DrawerBurguer urls={urls} classes={classes} onHandleTabChange={onHandleTabChange} tabIndex={tabIndex} />
                )
            }


        </AppBar>
    )
}