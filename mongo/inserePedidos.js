use("ecomm");

const contas = db.accounts.find().toArray();
const produtos = db.products.find().toArray();

const pedidos = [
  {
    _id: ObjectId(),
    dataPedido: new Date(),
    account: {
      accountId: contas[0]._id,
      nome: contas[0].nome
    },
    enderecoEntrega: { ...contas[0].endereco },
    itens: [
      {
        productId: produtos[2]._id,
        quantidade: 1,
        precoUnitario: produtos[2].preco
      }
    ]
  },
  {
    _id: ObjectId(),
    dataPedido: new Date(),
    account: {
      accountId: contas[1]._id,
      nome: contas[1].nome
    },
    enderecoEntrega: { ...contas[1].endereco },
    itens: [
      {
        productId: produtos[4]._id,
        quantidade: 3,
        precoUnitario: produtos[4].preco
      }
    ]
  },
  {
    _id: ObjectId(),
    dataPedido: new Date(),
    account: {
      accountId: contas[2]._id,
      nome: contas[2].nome
    },
    enderecoEntrega: { ...contas[2].endereco },
    itens: [
      {
        productId: produtos[1]._id,
        quantidade: 0,
        precoUnitario: produtos[1].preco
      }
    ]
  }
];

var result = db.orders.insertMany(pedidos);

console.log(result);