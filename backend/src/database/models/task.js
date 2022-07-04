module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Tasks'
  });

  Task.associate = ({ User }) => {
    Task.belongsTo(User, {
      foreignKey: 'userId', as: 'user'
    });
  };

  return Task;
};