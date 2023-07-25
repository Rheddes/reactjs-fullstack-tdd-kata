import { describe, expect, it } from 'vitest';
import supertest from 'supertest';
import createApp from '../src/server/api';

describe('Api', () => {
  const app = createApp();
  const request = supertest(app);

  it('returns hello world for roasters', async () => {
    const response = await request.get('/roasters');

    const { roasters } = response.body;
    expect(roasters).to.equal('Hello World!');
  });
});
