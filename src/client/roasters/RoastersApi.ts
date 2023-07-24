import request from 'superagent';

const url = 'http://localhost:4000/graphql';

async function sendRequest(query) {
  return request.post(url).send(query);
}

export default async function fetchRoasters() {
  const query = {
    query: `query { 
				roasters
			}`,
  };

  const response = await sendRequest(query);
  return response.body.data;
}
