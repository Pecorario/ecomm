use("ecomm");

db.categories.createIndex({ "nome": 1 });
db.products.createIndex({ "nome": 1 });
db.products.createIndex({ "estoque": 1 });

const resultProducts = db.products.getIndexes();
const resultCategories = db.categories.getIndexes();

console.log('Índices produtos: ', resultProducts);
console.log('Índices categorias: ', resultCategories);