import React, { useState } from 'react';
import { Button, Snackbar, IconButton, Modal, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ShareModal = ({ article, handleClose, open }) => {
    const [openNotification, setOpenNotification] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(article.url);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = article.url;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        setOpenNotification(true);
    };

    const handleCloseNotification = () => {
        setOpenNotification(false);
    };

    return (
        <div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 500,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: '16px 32px 24px',
                        borderRadius: 1,
                        outline: 'none',
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {`Share ${article.source?.name || 'Article'}`}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, wordBreak: 'break-all' }}>
                        {article.url}
                    </Typography>
                    <Button variant="contained" onClick={handleCopy}>Copy</Button>
                </Box>
            </Modal>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openNotification}
                autoHideDuration={6000}
                onClose={handleCloseNotification}
                message="Copied to clipboard"
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleCloseNotification}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </div>
    );
};

export default ShareModal;
