import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Image from './image.js';


const Product = sequelize.define('Product', {
    produId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    reference: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    produname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'product',
    freezeTableName: true,
    timestamps: false
});

export default Product;

Product.hasMany(Image, { foreignKey: 'produId' });
Image.belongsTo(Product, { foreignKey: 'produId' });