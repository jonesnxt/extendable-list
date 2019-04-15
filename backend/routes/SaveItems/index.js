import 'isomorphic-fetch';
import Jiro from '@madewithjiro/jiro-sdk';
const { Store } = new Jiro();

export default async (req, res) => {
    console.log('Saving data...');
    console.log(req.body.items);

    await Store.set('TodoList', 'Items', { items: req.body.items });

    res.sendStatus(200);
}
