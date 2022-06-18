// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Info extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Info.init({
//     UserId: DataTypes.INTEGER,
//     FirstName: DataTypes.STRING,
//     MiddleInitial: DataTypes.STRING,
//     LastName: DataTypes.STRING,
//     EmailAddress: DataTypes.STRING,
//     PhoneNumber: DataTypes.INTEGER,
//     HouseNumber: DataTypes.INTEGER,
//     StreetName: DataTypes.STRING,
//     StreetCity: DataTypes.STRING,
//     StreetState: DataTypes.STRING,
//     StreetZipCode: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Info',
//   });
//   return Info;
// };
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Info = sequelize.define(
    'Info',
    {
      UserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      FirstName: DataTypes.STRING,
      MiddleInitial: DataTypes.STRING,
      LastName: DataTypes.STRING,
      EmailAddress: {
        type: DataTypes.STRING,
        unique: true
      },
      Username: {
        type: DataTypes.STRING,
        unique: true
      },
      PhoneNumber: DataTypes.INTEGER,
      HouseNumber: DataTypes.INTEGER,
      StreetName: DataTypes.STRING,
      StreetCity: DataTypes.STRING,
      StreetState: DataTypes.STRING,
      StreetZipCode: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Info;
};