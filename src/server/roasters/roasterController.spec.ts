import { describe, it, expect } from 'vitest';
import RoasterController from './roasterController';

describe('roasterController', () => {
  describe('index', () => {
    it('Can get a list of coffee roasters', async () => {
      expect(new RoasterController().index()).to.deep.equal({
        roasters: 'Hello World!',
      });
    });
  });
});
