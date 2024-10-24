import { Box, Button, List, ListItem, ListItemButton, SwipeableDrawer, Tab, Tabs } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

interface DrawerLinks {
    urls: Url[],
    classes: any,
    onHandleTabChange: any,
    tabIndex: any
}

export interface Url {
    path: string,
    label: string
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const DrawerBurguer: React.FC<DrawerLinks> = ({ urls, classes, onHandleTabChange, tabIndex }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [anchor, setAnchor] = React.useState<Anchor>("right");

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                {urls?.map((url, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Tabs
                                className={classes.tabContainer}
                                value={tabIndex}
                                onChange={onHandleTabChange}
                            >
                                <Tab
                                    className={classes.tab}
                                    component={Link}
                                    to={url.path}
                                    label={url.label}
                                />
                            </Tabs>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



    return (
        <div>

            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)} sx={{ color: 'white' }}>
                    <MenuIcon />
                </Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}