'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/hello');
    expect(response.status).toBe(404);
  });

  it('can add a record', async () => {
    let mockRequest = 'purse';
    const response = await mockRequest.post('/clothes');
    // response.insert('purse');
    expect(response).toBe('purse');
  });

  it('can get a list of records', async () => {

  });

  it('can get a record', async () => {

  });

  it('can update a record', async () => {

  });

  it('can delete a record', async () => {

  });

});
