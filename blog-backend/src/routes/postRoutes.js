// src/routes/postRoutes.js
import express from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController.js';
import authenticateToken from '../middleware/authMiddleware.js'; // <-- Correct import

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', authenticateToken, createPost); // Protect the create route
router.put('/:id', authenticateToken, updatePost); // Protect the update route
router.delete('/:id', authenticateToken, deletePost); // Protect the delete route

export default router;
