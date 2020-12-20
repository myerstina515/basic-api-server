'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/hello');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 on an invalid route', async () => {
    const response = await mockRequest.get('/hello');
    expect(response.status).toBe(404);
  });

  it('can get a list of records', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
    console.log(response.body);
    expect(response.body).toEqual([]);
  });

  it('can create a record', async () => {
    // let mockRequest = 'purse';
    let record = {name: 'purse'};
    const response = await mockRequest.post('/clothes').query(record);
    // response.insert('purse');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined;
  });

  it('can get a record', async () => {
    const response = await mockRequest.get('/clothes').query(1);
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{'id': 1}]);
  });

  it('can update a record', async () => {
    const object = { name: 'coat'};
    const response = await mockRequest.put('/clothes/1').query(object);
    expect(response.status).toBe(200);
    // console.log(response.body);
    expect(response.body).toBeDefined;
  });

  it('can delete a record', async () => {
    const response = await mockRequest.delete('/clothes/1');
    expect(response.body).toStrictEqual([]);
    expect(response.status).toBe(200);
  });

});
