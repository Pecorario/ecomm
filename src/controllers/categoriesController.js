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
      const response = await categories.create(body);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await categories.findById(id);

      if (response === null) {
        return res.status(404).json({ error: 'Categoria não encontrada!' });
      }

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static updateCategoryById = async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const regex = /^[0-9]/;

    if (body.nome && regex.test(body.nome)) {
      return res.status(422).json({ error: 'O nome não pode começar com um número' });
    }

    try {
      const response = await categories.findByIdAndUpdate(id, { $set: body });

      if (response === null) {
        return res.status(404).json({ error: 'Categoria não encontrada!' });
      }

      return res.status(200).json({ _id: response._id, ...body });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static activateCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await categories.findByIdAndUpdate(id, { $set: { status: 'ATIVA' } });

      if (response === null) {
        return res.status(404).json({ error: 'Categoria não encontrada!' });
      }

      return res.status(200).json({ _id: response._id, nome: response.nome, status: 'ATIVA' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static deleteCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await categories.findByIdAndDelete(id);

      if (response === null) {
        return res.status(404).json({ error: 'Categoria não encontrada!' });
      }

      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

export default CategoriesController;
