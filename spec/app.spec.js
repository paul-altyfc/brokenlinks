const app = require('../app.js');
const request = require('supertest');
const { expect } = require('chai');

describe('/api', () => {
  it('GET status: 404, responds with Not Found when passed a route that does not exist', () => {
    return request(app)
      .get('/not-a-route')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).to.equal('Not Found');
      });
  });
});
describe('/url - endpoint tests', () => {
  it('GET status: 200, responds with an url object having the right properties', () => {
    return request(app)
      .get('/api/url/web-crawler-test1.herokuapp.com')
      .expect(200)
      .then(({ body }) => {
        expect(body.result).to.be.an('object');
        expect(body.result[0]).to.contain.keys(
          'url',
          'total',
          'broken',
          'deadlist'
        );
      });
  });
});
