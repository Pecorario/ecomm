import CategoryService from "./CategoryService.js";

const args = process.argv;

async function processarComando(args) {
  const command = args[2];

  switch (command) {
    case '--listarCategorias':
      CategoryService.findCategories();
      break;
    default:
      return 'comando não encontrado';
  }
}

processarComando(args);