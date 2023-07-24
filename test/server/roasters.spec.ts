import { describe, it, expect } from 'vitest';
import { sendQuery } from '../utils/sendQuery';

describe('Roasters', () => {
	it('returns hello world for roasters', async () => {
		const query = {
			query: `query { 
				roasters
			}`,
		};

		const response = await sendQuery(query);
		const { roasters } = response.body.data;

		expect(roasters).to.equal('Hello World');
	});
});
