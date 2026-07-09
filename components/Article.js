import React from 'react';
import Image from 'next/image';
import { Grid, Card, CardContent, Typography, CardActionArea, CardActions, Button, Box } from '@mui/material';
import ShareModal from './ShareModal';

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: '2-digit',
        }).format(new Date(dateStr));
    } catch {
        return dateStr;
    }
};

const Article = React.memo(({ article }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const sourceName = article.source?.name || 'Unknown Source';
    const publishedAt = formatDate(article.publishedAt);

    return (
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                    <CardActionArea
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '16/9',
                            overflow: 'hidden',
                            bgcolor: 'grey.200',
                        }}
                    >
                        {article.image ? (
                            <Image
                                src={article.image}
                                alt={article.title || ''}
                                fill
                                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'grey.500',
                                }}
                            >
                                No Image
                            </Box>
                        )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h6" component="h2">
                            {article.title}
                        </Typography>
                        {publishedAt && (
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {`${sourceName} - ${publishedAt}`}
                            </Typography>
                        )}
                        <Typography variant="body2" color="textSecondary" component="p">
                            {article.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleOpen}>
                        Share
                    </Button>
                </CardActions>
            </Card>
            <ShareModal article={article} handleClose={handleClose} open={open} />
        </Grid>
    );
});

Article.displayName = 'Article';

export default Article;
