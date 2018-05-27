import express from 'express';
import colors from 'colors';

import { renderPage } from './HMTL.js';

const app = express();

app.get('*', (req, res) => {
  renderPage(req)
  .then((html) => (res.send(html)))
  .catch((err) => {
    console.error(err);
    res.status(500).send('Uh oh, something went wrong!');
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(colors.yellow('Server Listening to port: '), colors.green(PORT));
  if (!PROD) {
    opn("http://localhost:8090/test-blanket-slug?blanket=test");
  }
});
