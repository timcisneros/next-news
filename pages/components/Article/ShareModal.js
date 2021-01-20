import React, { useState } from 'react';
import { Button, Snackbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import copy from 'clipboard-copy';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ShareModal = ({ article, handleClose, open }) => {
    const classes = useStyles();

    const [openNotification, setOpenNotification] = useState(false);

    const handleCopy = () => {
        copy(article.url);
        setOpenNotification(true);
    };

    const handleCloseNotification = () => {
        setOpenNotification(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => handleClose()}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{`Share ${article.source.name} Article`}</h2>
                        <p id="transition-modal-description">{article.url}</p>
                        <Button onClick={() => handleCopy()}>Copy</Button>
                    </div>
                </Fade>
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
                    <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleCloseNotification}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
};

export default ShareModal;
