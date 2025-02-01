// src/routes/postRoutes.js
import express from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController.js';
import authenticateToken from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', authenticateToken, createPost); 
router.put('/:id', authenticateToken, updatePost); 
router.delete('/:id', authenticateToken, deletePost); 
export default router;
