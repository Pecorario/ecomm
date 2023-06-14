import CategoryService from "./CategoryService.js";

const args = process.argv;

async function processarComando(args) {
  const command = args[2];
  const id = args[3];

  switch (command) {
    case '--listarCategorias':
      CategoryService.findCategories();
      break;
    case '--recuperarCategoriaPorId':
      CategoryService.findCategoryById(id);
      break;
    default:
      return 'comando não encontrado';
  }
}

processarComando(args);