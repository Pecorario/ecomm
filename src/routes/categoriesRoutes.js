import express from 'express';
import CategoriesController from '../controllers/categoriesController.js';

const router = express.Router();

router
  .get('/api/categories', CategoriesController.getAllCategories);

export default router;
