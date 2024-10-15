import { AppBar, Box, Tab, Tabs, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export const HeaderComponent = ({ classes, onHandleTabChange, tabIndex }) => {
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
        </AppBar>
    )
}