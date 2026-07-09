import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

export default function MyDocument() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx) => {
    const cache = createCache({ key: 'css' });
    const { extractCriticalToChunks } = createEmotionServer(cache);

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
        });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            ...emotionStyleTags,
        ],
    };
};
