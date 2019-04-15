import 'isomorphic-fetch';
import Jiro from '@madewithjiro/jiro-sdk';
const { Store } = new Jiro();

export default async (req, res) => {
    console.log('Loading data...');

    try {
        const { items } = await Store.get('TodoList', 'Items');
        res.status(200).json({ items });
    } catch (err) {
        res.status(200).json({ items: [] });
    }
}
