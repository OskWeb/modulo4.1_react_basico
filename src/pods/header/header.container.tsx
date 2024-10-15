import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { HeaderComponent } from './header.component';

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

export const HeaderContainer = (props) => {
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
            <HeaderComponent classes={classes} onHandleTabChange={handleTabChange} tabIndex={tabIndex} />
        </>


    )
}