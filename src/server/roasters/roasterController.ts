/* eslint-disable class-methods-use-this */
export default class RoasterController {
  index() {
    return {
      roasters: [{ code: 'example', title: 'Hello World!' }],
    };
  }
}
