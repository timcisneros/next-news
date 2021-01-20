import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { useQuery } from 'react-query';

import { fetchArticles } from '../../api/newsapi';

import Article from '../Article/Article';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    loadingProgress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const Main = ({ category }) => {
    const classes = useStyles();
    const { data, status } = useQuery(['articles', category], fetchArticles);

    return (
        <Container>
            <h1>{category}</h1>
            <Grid className={classes.root} container spacing={2}>
                {status === 'loading' && (
                    <div className={classes.loadingProgress}>
                        <CircularProgress />
                        <h2>Getting News Feed...</h2>
                    </div>
                )}
                {status === 'error' && <p>Unable To Load News Feed</p>}
                {status === 'success' && (
                    <>
                        {data.articles.map((article) => (
                            <React.Fragment key={article.title}>
                                <Article article={article} />
                            </React.Fragment>
                        ))}
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default Main;
