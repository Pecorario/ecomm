use('ecomm');

const contas = [
  {
    _id: ObjectId(),
    nome: 'Maria da Silva',
    email: 'maria.silva@gmail.com',
    senha: '123456',
    dataCriacao: new Date(),
    cpf: '67542998005',
    telefone: '1132325050',
    endereco: {
      bairro: 'Centro',
      rua: 'José Guilherme',
      numero: '123',
      cep: '62785970',
      cidade: 'Acarape',
      uf: 'CE',
    },
  },
  {
    _id: ObjectId(),
    nome: 'João Pedro Fernandes',
    email: 'joao_fernandes@hotmail.com',
    senha: 'joaozinho10',
    dataCriacao: new Date(),
    cpf: '24899235011',
    telefone: '49997658181',
    endereco: {
      bairro: 'Centro',
      rua: 'Iria Alves',
      numero: '45',
      cep: '14110970',
      cidade: 'Bonfim Paulista',
      uf: 'SP',
      complemento: 'Apto 91',
    },
  },
  {
    _id: ObjectId(),
    nome: 'Isabela Nascimento de Jesus',
    email: 'isa_nascimento@outlook.com',
    senha: 'nascjesusisa1',
    dataCriacao: new Date(),
    cpf: '45246741010',
    telefone: '67981405060',
    endereco: {
      bairro: 'Centro',
      rua: 'Servidão B-1',
      numero: '60',
      cep: '27275595',
      cidade: 'Volta Redonda',
      uf: 'RJ',
    },
  },
  {
    _id: ObjectId(),
    nome: 'Israel dos Santos',
    email: 'israel@yahoo.com.br',
    senha: '123',
    apelido: 'Isra',
    dataCriacao: new Date(),
    cpf: '92121912070',
    telefone: '80988454629',
    endereco: {
      bairro: 'Santo Agostinho',
      rua: 'J K',
      numero: '73',
      cep: '29824980',
      cidade: 'Santo Agostinho',
      uf: 'ES',
      apto: '12',
    },
  },
];

const result = db.accounts.insertMany(contas);

console.log(result);
