import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    CssBaseline,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const drawerOptions = [
    {
        title: 'Top U.S. Headlines',
    },
    {
        title: 'World',
        name: 'world',
    },
    {
        title: 'Nation',
        name: 'nation',
    },
    {
        title: 'Business',
        name: 'business',
    },
    {
        title: 'Technology',
        name: 'technology',
    },
    {
        title: 'Entertainment',
        name: 'entertainment',
    },
    {
        title: 'Sports',
        name: 'sports',
    },
    {
        title: 'Science',
        name: 'science',
    },
    {
        title: 'Health',
        name: 'health',
    },
];

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        width: 250,
    },
    logoIcon: {
        marginRight: 10,
    },
    toolBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
});

const DrawerMenu = ({ drawerOpen, setDrawerOpen, setCategory }) => {
    const classes = useStyles();

    const handleCategory = (t) => {
        setCategory(t);
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(!drawerOpen)}
            >
                <Toolbar>
                    <AnnouncementIcon className={classes.logoIcon} />
                    <Typography variant="h6">Next News</Typography>
                </Toolbar>
                <Divider />
                <nav className={classes.drawer}>
                    <List>
                        {drawerOptions.map((text) => (
                            <ListItem
                                button
                                key={text.title}
                                onClick={() => handleCategory(text)}
                            >
                                {/* <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon> */}
                                <ListItemText primary={text.title} />
                            </ListItem>
                        ))}
                    </List>
                </nav>
            </Drawer>
        </div>
    );
};

export default DrawerMenu;
