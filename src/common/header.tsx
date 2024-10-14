import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { SearchContextGithub } from '../context/searchContextGithub';

const useStyles = makeStyles((theme) => ({
    tabContainer: {
        display: 'inline-block'
    },
    tab: {
        textTransform: "none",
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "1rem"
    }

}));

const Header = (props) => {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = React.useState(0);

    useEffect(() => {
        const idx = ["/", "/list_1", "list_2"].indexOf(
            window.location.pathname
        );
        if (tabIndex !== idx) {
            setTabIndex(idx);
        }
    }, [tabIndex])

    const handleTabChange = (evt: any, index: any) => {
        setTabIndex(index);
    }


    return (
        <>
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
                    onChange={handleTabChange}
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

        </>


    )
}

export default Header