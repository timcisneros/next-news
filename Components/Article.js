import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    CardActions,
    Button,
} from '@material-ui/core';
import moment from 'moment';
import ShareModal from './ShareModal';

const useStyles = makeStyles((theme) => ({
    Card: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
        [theme.breakpoints.up('lg')]: {
            width: 400,
        },
        margin: 'auto',
    },
    Media: {
        height: 250,
    },
    control: {
        padding: theme.spacing(1),
    },
}));

const Article = ({ article }) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid className={classes.root} item xs={12} md={4} lg={4}>
                <div className={classes.control}>
                    <Card className={classes.Card}>
                        <CardActionArea href={article.url} target="_blank">
                            <CardMedia
                                className={classes.Media}
                                image={article.urlToImage}
                                title={article.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2"
                                >
                                    {article.title}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="subtitle1"
                                    component="h2"
                                >
                                    {`${article.source.name} - ${moment(
                                        article.publishedAt
                                    ).format('MMMM Do YYYY, h:mm a')}`}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {article.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => handleOpen()}
                            >
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>
            <ShareModal
                article={article}
                handleClose={handleClose}
                open={open}
            />
        </>
    );
};

export default Article;
