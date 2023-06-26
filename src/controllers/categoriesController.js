import categories from '../models/Category.js';

class CategoriesController {
  static getAllCategories = async (req, res) => {
    try {
      const response = await categories.find();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

export default CategoriesController;
