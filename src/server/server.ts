import createApp from './api';

const app = createApp();
const port = 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`express is listening on port ${port}`);
});
