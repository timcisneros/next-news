export const fetchArticles = async (key) => {
    const apiKey = process.env.NEXT_PUBLIC_NEWSID;

    const c = key.queryKey[1];
    const urlTop = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    const urlSearch = `https://newsapi.org/v2/everything?q=${c}&apiKey=${apiKey}`;

    const url = c === 'Top U.S. Headlines' ? urlTop : urlSearch;

    const res = await fetch(url);
    const data = await res.json();

    return data;
};
