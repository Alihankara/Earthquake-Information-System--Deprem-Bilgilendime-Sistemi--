import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app = express();

import depremRouter from './controller/depremRouter.js';

// Middleware ve diğer ayarlar...
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/sondepremler', depremRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Diğer rotalar ve ayarlar...

app.listen(3000, () => {
  console.log('Sunucu çalışıyor...');
});
