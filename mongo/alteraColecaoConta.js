use('ecomm');

const result = db.runCommand({
  collMod: 'accounts',
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
          pattern: '^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$',
          description: 'Deve ser um email válido',
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
          pattern: '^[0-9]{11}$',
          description: 'Deve ser um CPF válido',
        },
        telefone: {
          bsonType: 'string',
          minLength: 10,
          pattern: '^[0-9]{10,}$',
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
              pattern: '^([0-9]+|(S/N))$',
              description: 'Deve ser uma string e conter pelo menos 1 caracteres',
            },
            cep: {
              bsonType: 'string',
              minLength: 8,
              maxLength: 8,
              pattern: '^[0-9]{8}$',
              description: 'Deve ser um CEP válido',
            },
            cidade: {
              bsonType: 'string',
              minLength: 5,
              description: 'Deve ser uma string e conter pelo menos 5 caracteres',
            },
            uf: {
              bsonType: 'string',
              enum: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
              minLength: 2,
              maxLength: 2,
              description: 'Deve ser uma sigla válida',
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
