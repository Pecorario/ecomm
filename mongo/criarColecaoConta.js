use('ecomm');

const result = db.createCollection('accounts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      additionalProperties: false,
      required: ['nome', 'email', 'senha', 'dataCriacao', 'cpf', 'telefone', 'endereco'],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'Deve ser um ObjectId',
        },
        nome: {
          bsonType: 'string',
          minLength: 5,
          description: 'Deve ser uma string e conter pelo menos 5 caracteres',
        },
        email: {
          bsonType: 'string',
          minLength: 5,
          description: 'Deve ser uma string e conter pelo menos 5 caracteres',
        },
        senha: {
          bsonType: 'string',
          minLength: 5,
          description: 'Deve ser uma string e conter pelo menos 5 caracteres',
        },
        dataCriacao: {
          bsonType: 'date',
          description: 'Deve ser uma data válida',
        },
        cpf: {
          bsonType: 'string',
          minLength: 11,
          maxLength: 11,
          description: 'Deve conter apenas os números',
        },
        telefone: {
          bsonType: 'string',
          minLength: 10,
          description: 'Deve ser um telefone válido',
        },
        endereco: {
          bsonType: 'object',
          additionalProperties: false,
          required: ['bairro', 'rua', 'numero', 'cep', 'cidade', 'uf'],
          properties: {
            bairro: {
              bsonType: 'string',
              minLength: 1,
              description: 'Deve ser uma string e conter pelo menos 1 caracteres',
            },
            rua: {
              bsonType: 'string',
              minLength: 1,
              description: 'Deve ser uma string e conter pelo menos 1 caracteres',
            },
            numero: {
              bsonType: 'string',
              minLength: 1,
              description: 'Deve ser uma string e conter pelo menos 1 caracteres',
            },
            cep: {
              bsonType: 'string',
              minLength: 8,
              maxLength: 8,
              description: 'Deve conter apenas os números',
            },
            cidade: {
              bsonType: 'string',
              minLength: 5,
              description: 'Deve ser uma string e conter pelo menos 5 caracteres',
            },
            uf: {
              bsonType: 'string',
              minLength: 2,
              maxLength: 2,
              description: 'Deve ser a sigla',
            },
            complemento: {
              bsonType: 'string',
              description: 'Deve ser uma string válida',
            },
          },
        },
      },
    },
  },
});

console.log(result);
