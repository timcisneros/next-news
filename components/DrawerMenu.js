import React from 'react';
import {
    Drawer,
    Toolbar,
    List,
    Divider,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const drawerOptions = [
    { title: 'Top U.S. Headlines' },
    { title: 'World', name: 'world' },
    { title: 'Nation', name: 'nation' },
    { title: 'Business', name: 'business' },
    { title: 'Technology', name: 'technology' },
    { title: 'Entertainment', name: 'entertainment' },
    { title: 'Sports', name: 'sports' },
    { title: 'Science', name: 'science' },
    { title: 'Health', name: 'health' },
];

const DrawerMenu = ({ drawerOpen, setDrawerOpen, setCategory }) => {
    const handleCategory = (t) => {
        setCategory(t);
        setDrawerOpen(prev => !prev);
    };

    return (
        <div>
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(prev => !prev)}
            >
                <Toolbar>
                    <AnnouncementIcon sx={{ mr: 1 }} />
                    <Typography variant="h6">Next News</Typography>
                </Toolbar>
                <Divider />
                <nav>
                    <List>
                        {drawerOptions.map((text) => (
                            <ListItemButton
                                key={text.title}
                                onClick={() => handleCategory(text)}
                            >
                                <ListItemText primary={text.title} />
                            </ListItemButton>
                        ))}
                    </List>
                </nav>
            </Drawer>
        </div>
    );
};

export default DrawerMenu;
