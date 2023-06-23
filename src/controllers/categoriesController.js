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

  static addNewCategory = async (req, res) => {
    const body = req.body;
    const regex = /^[0-9]/;

    if (body.nome && regex.test(body.nome)) {
      return res.status(422).json({ error: 'O nome não pode começar com um número' });
    }

    try {
      await categories.create(body);
      return res.status(201).json({ message: 'Categoria criada com sucesso! ' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await categories.findById(id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

export default CategoriesController;
