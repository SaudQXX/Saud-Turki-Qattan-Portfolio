import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('.'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
