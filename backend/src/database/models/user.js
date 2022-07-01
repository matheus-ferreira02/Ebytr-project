module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
    timestamps: false,
    underscored: true
  });

  User.associate = ({ Task }) => {
    User.hasMany(Task, {
      foreignKey: 'userId', as: 'task'
    });
  };

  return User;
};