import supertest from 'supertest';
import App from '../../src/server/api';

const request = supertest(App);

export default function sendQuery(query) {
  return request.post('/graphql').set('Accept', 'application/json').send(query);
}
