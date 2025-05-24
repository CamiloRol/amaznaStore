import express from 'express';
import Product from './models/infoproduct.js';
import Image from './models/image.js';
import sequelize from './db.js';

const router = express.Router();

router.get('/productos', async (req, res) => {
  try {
    const productos = await Product.findAll({
      include: [{
        model: Image,
        required: false
      }],
      order: sequelize.literal('RAND()'),
      limit: 6
    });

    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

export default router;
