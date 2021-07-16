const express = require('express');
const path = require('path');

const port = process.env.PORT || 4003;
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'assets')));

app.post('*', (req, res) => {
  res.redirect(req.originalUrl);
});

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
