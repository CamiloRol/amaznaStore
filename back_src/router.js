import express from 'express';
import Product from './models/infoproduct.js';
import Image from './models/image.js';
import sequelize from './db.js';
import { Parser } from 'json2csv';

const router = express.Router();

router.get('/exportar-csv', async (req, res) => {
  try {
    const productos = await Product.findAll({
      attributes: ['produId', 'reference', 'produname', 'description', 'price', 'brand'],
      include: [{ model: Image, required: false }],
      order: sequelize.literal('RAND()'),
    });
    const fields = ['produId', 'reference', 'produname', 'description', 'price', 'brand'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(productos);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=productos.csv');
    res.status(200).send(csv);

  } catch (error) {
    console.error('Error al exportar productos:', error);
    res.status(500).json({ error: 'Error al exportar productos' });
  }
});

export default router;