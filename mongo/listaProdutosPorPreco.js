use("ecomm");
var result = db.products.find({ "preco": { $gte: 1000, $lte: 2000 } }).projection({ nome: 1, preco: 1 });

console.log(result);