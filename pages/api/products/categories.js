import nc from 'next-connect';

const handler = nc();

handler.get(async(req, res) => {
    const categories = ['Shoes', 'CLoths', 'Accessories']
    res.send(categories);
});

export default handler;