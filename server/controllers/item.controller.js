import Item from '../models/item';
import sanitizeHtml from 'sanitize-html';

export function getItem(req, res) {
  Item.findOne({ name: req.params.name }).exec((err, item) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ item });
  });
}
