import chai from 'chai';
import chaiDom from 'chai-dom';

// chai.use(chaiAsPromised);
chai.use(chaiDom);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.chai = chai;
