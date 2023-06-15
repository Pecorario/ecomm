import CategoryService from "./CategoryService.js";
import Utils from "./Utils.js";

const args = process.argv;

async function processarComando(args) {
  const command = args[2];
  const id = args[3];
  const path = args[3];

  switch (command) {
    case '--listarCategorias':
      await CategoryService.findCategories();
      break;
    case '--recuperarCategoriaPorId':
      CategoryService.findCategoryById(id);
      break;
    case '--inserirCategoria':
      const newCategory = await Utils.readFile(path);
      await CategoryService.createCategory(newCategory);
      break;
    default:
      return 'comando não encontrado';
  }
}

processarComando(args);