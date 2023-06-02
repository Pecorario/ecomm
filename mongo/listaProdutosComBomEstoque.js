use("ecomm");
var result = db.products.find({ "estoque": { $gte: 3 } }).projection({ nome: 1, estoque: 1 });

console.log(result);