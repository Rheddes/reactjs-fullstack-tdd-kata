import request from 'superagent';

const baseUrl = 'http://localhost:4000';

export default async function fetchRoasters() {
  const { body } = await request.post(`${baseUrl}/roasters`);
  return body;
}
