export default async function handler(req, res) {
    const { category } = req.query;

    const apiKey = process.env.NEXT_PUBLIC_GNEWS_TOKEN;
    const isTopHeadlines = category === 'Top U.S. Headlines';
    const url = isTopHeadlines
        ? `https://gnews.io/api/v4/top-headlines?&token=${apiKey}&lang=en`
        : `https://gnews.io/api/v4/top-headlines?&token=${apiKey}&lang=en&topic=${category}`;

    const response = await fetch(url);

    if (!response.ok) {
        const body = await response.json().catch(() => null);
        res.status(response.status).json({
            error: body?.errors?.[0]?.message || body?.message || `Request failed (${response.status})`,
        });
        return;
    }

    const data = await response.json();
    res.status(200).json(data);
}
