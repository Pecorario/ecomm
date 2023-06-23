import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import app from '../main.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /api/categories', () => {
  it('Deve retornar uma lista de categorias', async () => {
    const response = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(response.body[0].nome).toEqual('INFORMÁTICA');
  });
});

let idResponse;
describe('POST em /api/admin/categories', () => {
  it('Deve adicionar uma nova categoria', async () => {
    const response = await request(app)
      .post('/api/admin/categories')
      .send({
        nome: 'TESTANDO',
        status: 'ATIVA',
      })
      .expect(201);

    idResponse = response.body._id;
  });
  it('Deve nao adicionar nada ao passar o body vazio', async () => {
    await request(app)
      .post('/api/admin/categories')
      .send({})
      .expect(500);
  });
});

// daqui em diante tem q testar
describe('GET em /api/categories/id', () => {
  it('Deve retornar recurso selecionado', async () => {
    const response = await request(app)
      .get(`/api/categories/${idResponse}`)
      .expect(200);

    expect(response.body.nome).toEqual('TESTANDO');
  });
});

describe('PUT em /api/admin/categories/id', () => {
  test.each([
    ['nome', { nome: 'Teste Teste' }],
    ['status', { status: 'INATIVA' }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/api/admin/categories/${idResponse}`)
      .send(param)
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });
});

// describe('DELETE em /editoras/id', () => {
//   it('Deletar o recurso adcionado', async () => {
//     await request(app)
//       .delete(`/editoras/${idResposta}`)
//       .expect(200);
//   });
// });
