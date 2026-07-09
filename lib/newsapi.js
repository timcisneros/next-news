export const fetchArticles = async ({ queryKey }) => {
    const c = queryKey[1];
    const category = c.title === 'Top U.S. Headlines' ? 'Top U.S. Headlines' : c.name;

    const res = await fetch(`/api/news?category=${encodeURIComponent(category)}`);

    if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || `Request failed (${res.status})`);
    }

    const data = await res.json();

    return data;
};
