import React from 'react';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import Article from './Article';
import { fetchArticles } from '../lib/newsapi';

const Main = ({ category }) => {
    const { data, error, status } = useQuery({
        queryKey: ['articles', category],
        queryFn: fetchArticles,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });

    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ my: 3, textAlign: 'center' }}>
                {category.title}
            </Typography>
            <Grid container spacing={2}>
                {status === 'pending' && (
                    <Grid size={{ xs: 12 }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '48px 0',
                            }}
                        >
                            <CircularProgress />
                            <Typography variant="h5" sx={{ mt: 2 }}>
                                Getting News Feed...
                            </Typography>
                        </div>
                    </Grid>
                )}
                {status === 'error' && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h6" color="error" sx={{ textAlign: 'center', mt: 4 }}>
                            {error?.message || 'Unable to get articles'}
                        </Typography>
                    </Grid>
                )}
                {status === 'success' && data.articles?.length > 0 && (
                    <>
                        {data.articles.map((article) => (
                            <Article key={article.id || article.title} article={article} />
                        ))}
                    </>
                )}
                {status === 'success' && (!data.articles || data.articles.length === 0) && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
                            No articles found for this category.
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Main;
