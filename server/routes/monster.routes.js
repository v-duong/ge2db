import { Router } from 'express';
import * as MonsterController from '../controllers/monster.controller';
import * as ItemController from '../controllers/item.controller';
const router = new Router();

// Get all Posts
router.route('/monster/').get(MonsterController.getMonsters);

// Get one post by cuid
router.route('/monster/:name').get(MonsterController.getMonster);

router.route('/item/:name').get(ItemController.getItem);

export default router;
