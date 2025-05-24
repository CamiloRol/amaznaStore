import express from 'express';
import Product from './models/infoproduct.js';

const router = express.Router();

let productos = [];

(async () => {
    try {
        productos = await Product.findAll({
            attributes: ['produId', 'reference', 'produname', 'description', 'price', 'brand'],
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
})();

router.get('/productos', (req, res) => {
    res.json(productos);
});

export default router;