import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Image = sequelize.define('Image', {
  imagesId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  produId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produImages: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'images',
  freezeTableName: true,
  timestamps: false,
});

export default Image;