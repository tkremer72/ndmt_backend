// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Security extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Security.init({
//     UserId: DataTypes.INTEGER,
//     UserPassword: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Security',
//   });
//   return Security;
// };
'use strict';
module.exports = (sequelize, DataTypes) => {
  var security = sequelize.define(
    'security',
    {
      UserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      UserPassword: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return security;
};