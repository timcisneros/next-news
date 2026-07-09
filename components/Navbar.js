import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import DrawerMenu from './DrawerMenu';

const Navbar = ({ setCategory }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setDrawerOpen(prev => !prev)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Next News
                    </Typography>
                    <Button
                        href="https://timcis.com"
                        target="_blank"
                        rel="noopener noreferrer"
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
