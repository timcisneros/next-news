import { config } from '../config';

const apiKey = config.API_KEY;

export const fetchArticles = async (key) => {
    const c = key.queryKey[1];
    const urlTop = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    const urlSearch = `https://newsapi.org/v2/everything?q=${c}&apiKey=${apiKey}`;

    const url = c === 'Top U.S. Headlines' ? urlTop : urlSearch;

    const res = await fetch(url);
    return res.json();
};
// const url2 = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
