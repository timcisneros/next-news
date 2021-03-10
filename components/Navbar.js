import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    InputBase,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        // [theme.breakpoints.down('xs')]: {
        //     display: 'none',
        // },
    },
    logoIcon: {
        marginRight: 10,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(5),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Navbar = ({ setCategory }) => {
    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleOpen = (d) => {
        d = !d;
        setDrawerOpen(d);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => handleOpen(drawerOpen)}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <AnnouncementIcon className={classes.logoIcon} /> */}
                    <Typography variant="h6" className={classes.title}>
                        Next News
                    </Typography>
                    {/* <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div> */}
                    <Button
                        href="https://timcis.com"
                        target="_blank"
                        color="inherit"
                    >
                        @timcis
                    </Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <DrawerMenu
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                setCategory={setCategory}
            />
        </div>
    );
};

export default Navbar;
