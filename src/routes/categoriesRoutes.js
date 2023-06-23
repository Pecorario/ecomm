import express from 'express';
import CategoriesController from '../controllers/categoriesController.js';

const router = express.Router();

router
  .get('/api/categories', CategoriesController.getAllCategories);
router
  .post('/api/admin/categories', CategoriesController.addNewCategory);
router
  .get('/api/categories/:id', CategoriesController.getCategoryById);
router
  .put('/api/admin/categories/:id', CategoriesController.updateCategoryById);
router
  .patch('/api/admin/categories/:id', CategoriesController.activateCategoryById);
router
  .delete('/api/admin/categories/:id', CategoriesController.deleteCategoryById);

export default router;
