use("ecomm");

const result = db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["dataPedido", "account", "enderecoEntrega", "itens"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Deve ser um ObjectId"
        },
        dataPedido: {
          bsonType: "date",
          description: "Deve ser uma data válida"
        },
        account: {
          bsonType: "object",
          required: ["accountId", "nome"],
          properties: {
            accountId: {
              bsonType: "objectId",
              description: "Deve ser um ObjectId"
            },
            nome: {
              bsonType: "string",
              minLength: 5,
              description: "Deve ser uma string e conter pelo menos 5 caracteres"
            },
          }
        },
        enderecoEntrega: {
          bsonType: "object",
          additionalProperties: false,
          required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
          properties: {
            bairro: {
              bsonType: "string",
              minLength: 1,
              description: "Deve ser uma string e conter pelo menos 1 caracteres"
            },
            rua: {
              bsonType: "string",
              minLength: 1,
              description: "Deve ser uma string e conter pelo menos 1 caracteres"
            },
            numero: {
              bsonType: "string",
              minLength: 1,
              description: "Deve ser uma string e conter pelo menos 1 caracteres"
            },
            cep: {
              bsonType: "string",
              minLength: 8,
              maxLength: 8,
              description: "Deve conter apenas os números"
            },
            cidade: {
              bsonType: "string",
              minLength: 5,
              description: "Deve ser uma string e conter pelo menos 5 caracteres"
            },
            uf: {
              bsonType: "string",
              minLength: 2,
              maxLength: 2,
              description: "Deve ser a sigla"
            },
            complemento: {
              bsonType: "string",
              description: "Deve ser uma string válida"
            }
          }
        },
        itens: {
          bsonType: "array",
          additionalProperties: false,
          items: {
            bsonType: "object",
            additionalProperties: false,
            description: "Insira corretamente os itens",
            required: ["productId", "quantidade", "precoUnitario"],
            properties: {
              productId: {
                bsonType: "objectId",
                description: "Deve ser um ObjectId"
              },
              quantidade: {
                bsonType: "int",
                minimum: 1,
                description: "Deve ser um número inteiro maior ou igual a 1"
              },
              desconto: {
                bsonType: "decimal",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Deve ser maior que 0"
              },
              precoUnitario: {
                bsonType: "decimal",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Deve ser maior que 0"
              }
            }
          }
        }
      }
    }
  }
})

console.log(result);
