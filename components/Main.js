import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { QueryClient, useQuery } from 'react-query';

import Article from './Article';
import { fetchArticles } from '../pages/api/newsapi';
import { dehydrate } from 'react-query/hydration';

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

export async function getServerSideProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery('articles', fetchArticles);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

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
