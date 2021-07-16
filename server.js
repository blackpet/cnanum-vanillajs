const express = require('express');
const path = require('path');

const port = process.env.PORT || 4005;
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'assets')));

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
