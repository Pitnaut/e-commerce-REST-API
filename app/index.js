const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes')
const loaders = require('./loaders/index')

loaders(app);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to SuperMusicShop');
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

