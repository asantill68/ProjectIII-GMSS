module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstName: DataTypes.STRING,
      lastName:  DataTypes.STRING,
      userName:  DataTypes.STRING,
      password: DataTypes.STRING,
      email:  DataTypes.STRING
    });
    return User;
  };
  