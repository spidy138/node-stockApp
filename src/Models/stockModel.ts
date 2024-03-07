import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize  from '../../config';

export class AddStock extends Model {
  public name!: string;
  public sell!: string;
  public buy!:string;
}
export class DbStock extends AddStock{
  public id!:string;
}

DbStock.init( {
  id: {
    type: DataTypes.STRING,
    primaryKey:true,
    allowNull: true,
  }
},
{
  sequelize,
  modelName: 'DbStock',
});
AddStock.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sell: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    buy:{
      type:DataTypes.STRING,
      allowNull: false,
      
    }
  },
  {
    sequelize,
    modelName: 'AddStock',
  }
);

