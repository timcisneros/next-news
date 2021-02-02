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
    },
    {
        title: 'Business',
    },
    {
        title: 'Technology',
    },
    {
        title: 'Entertainment',
    },
    {
        title: 'Sports',
    },
    {
        title: 'Science',
    },
    {
        title: 'Health',
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
        setCategory(t.title);
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