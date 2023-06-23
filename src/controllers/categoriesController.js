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

    if (body.nome.trim() === '') {
      return res.status(422).json({ error: 'O nome é obrigatório' });
    }

    try {
      await categories.create(body);
      return res.status(201).json({ message: 'Categoria criada com sucesso! ' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

export default CategoriesController;
