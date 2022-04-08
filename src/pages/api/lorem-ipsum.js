export default async function handler(req, res) {
    if (req.method == 'GET') {
        const lorem = await generateLoremIpsum()
        return res.status(200).json({
            statusCode: 200,
            body: lorem[0].text
        })
    }

    return res.status(405).json({
        statusCode: 405,
        body: 'Method Not Allowed'
    })
}

export async function generateLoremIpsum() {
    const r = await fetch(`https://60eb0748e9647b0017cddcbd.mockapi.io/lorem`);
    const text = await r.json();
    return text;
}