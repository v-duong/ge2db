import Monster from '../models/monster';
import sanitizeHtml from 'sanitize-html';

export function getMonsters(req, res) {
  Monster.find().exec((err, monsters) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ monsters });
  });
}

export function getMonster(req, res) {
  Monster.findOne({ name: req.params.name }).exec((err, monster) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ monster });
  });
}
