import App from '../../src/server/api';
import supertest from 'supertest';

const request = supertest(App);

export function sendQuery(query) {
  return request.post('/graphql').set('Accept', 'application/json').send(query);
}
