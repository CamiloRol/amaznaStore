import express from 'express';
import Product from './models/infoproduct.js';
import Image from './models/image.js';
import sequelize from './db.js';
import { Parser } from 'json2csv';

const router = express.Router();

router.get('/exportar-csv', async (req, res) => {
  try {
    const productos = await Product.findAll({
      include: [{ model: Image, required: false }],
      order: sequelize.literal('RAND()'),
    });

    // Convertir los datos en formato CSV
    const fields = ['id', 'nombre', 'precio', 'descripcion']; // Campos necesarios
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(productos);

    // Configurar la respuesta para descargar el archivo CSV
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=productos.csv');
    res.status(200).send(csv);

  } catch (error) {
    console.error('Error al exportar productos:', error);
    res.status(500).json({ error: 'Error al exportar productos' });
  }
});

export default router;