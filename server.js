import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import auth from './back_src/auth.js';
import product from './back_src/product.js';
import sequelize from './back_src/db.js';
import cors from 'cors';
import router from './back_src/router.js';

const app = express();
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth);
app.use(product);
app.use('/api', router);
app.use(express.static(path.join(__dirname, 'dist')));



app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
