import { Router } from 'express';
import * as MonsterController from '../controllers/monster.controller';
const router = new Router();

// Get all Posts
router.route('/monster/').get(MonsterController.getMonsters);

// Get one post by cuid
router.route('/monster/:name').get(MonsterController.getMonster);

export default router;
