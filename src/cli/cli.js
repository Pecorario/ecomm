import CategoryService from "./CategoryService.js";
import Utils from "./Utils.js";

const args = process.argv;

async function processarComando(args) {
  const command = args[2];

  switch (command) {
    case '--listarCategorias':
      await CategoryService.findCategories();
      break;
    case '--recuperarCategoriaPorId':
      CategoryService.findCategoryById(args[3]);
      break;
    case '--inserirCategoria':
      const newCategory = await Utils.readFile(args[3]);
      await CategoryService.createCategory(newCategory);
      break;
    case '--atualizarCategoria':
      const data = await Utils.readFile(args[4]);
      await CategoryService.updateCategory(args[3], data);
      break;
    case '--excluirCategoria':
      await CategoryService.deleteCategory(args[3]);
      break;
    default:
      return 'comando não encontrado';
  }
}

processarComando(args);