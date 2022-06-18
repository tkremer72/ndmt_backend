// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Images extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Images.init({
//     UserId: DataTypes.INTEGER,
//     Image: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Images',
//   });
//   return Images;
// };
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Images = sequelize.define(
    'Images',
    {
      UserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
        Image: DataTypes.STRING
    },
    {}
  );

  return Images;
};