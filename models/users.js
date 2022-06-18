// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Users.init({
//     UserId: DataTypes.INTEGER,
//     UserName: DataTypes.STRING,
//     Password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define(
    'Users',
    {
      UserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      Username: {
        type: DataTypes.STRING,
        unique: true
      },
      Password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Users;
};
