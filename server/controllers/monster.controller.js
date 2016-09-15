import Monster from '../models/monster';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getMonsters(req, res) {
  Monster.find().exec((err, monsters) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ monsters });
  });
}
/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getMonster(req, res) {
  Monster.findOne({ name: req.params.name }).exec((err, monster) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ monster });
  });
}
