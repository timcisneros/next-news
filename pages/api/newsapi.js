export const fetchArticles = async (key) => {
    const apiKey = process.env.NEXT_PUBLIC_GNEWS_TOKEN;

    const c = key.queryKey[1];

    const urlTop = `https://gnews.io/api/v4/top-headlines?&token=${apiKey}&lang=en`;
    const urlSearch = `https://gnews.io/api/v4/top-headlines?&token=${apiKey}&lang=en&topic=${c.name}`;

    const url = c === 'Top U.S. Headlines' ? urlTop : urlSearch;

    const res = await fetch(url);
    const data = await res.json();
    await Promise.reject(
        new Error('Too many requests made to API (Resets in 24 hours)')
    );

    return data;
};
