const API_KEY = '5c0ff4f168ee4731a0dc9a89ec657870';

export const fetchArticles = async (key) => {
    const c = key.queryKey[1];
    const urlTop = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const urlSearch = `https://newsapi.org/v2/everything?q=${c}&apiKey=${API_KEY}`;

    const url = c === 'Top U.S. Headlines' ? urlTop : urlSearch;

    const res = await fetch(url);
    return res.json();
};
// const url2 = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
