import App from './api';

const port = 4000;

App.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`express is listening on port ${port}`);
});
