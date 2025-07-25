import express from 'express';
import { addMaterial, getMaterials } from '../controllers/materialController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/add', protect, addMaterial);   // supplier only
router.get('/', getMaterials);              // public

export default router;
