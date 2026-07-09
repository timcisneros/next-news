export const fetchArticles = async ({ queryKey }) => {
    const apiKey = process.env.NEXT_PUBLIC_GNEWS_TOKEN;

    const c = queryKey[1];
    const isTopHeadlines = c.title === 'Top U.S. Headlines';
    const url = isTopHeadlines
        ? `https://gnews.io/api/v4/top-headlines?&token=${apiKey}&lang=en`
        : `https://gnews.io/api/v4/top-headlines?&token=${apiKey}&lang=en&topic=${c.name}`;

    const res = await fetch(url);

    if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.errors?.[0]?.message || body?.message || `Request failed (${res.status})`);
    }

    const data = await res.json();

    return data;
};
