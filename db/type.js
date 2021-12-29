/**
 * @description 封装 sequelize 数据类型
 * @author big yang
 */

const Sequelize = require("sequelize");

module.exports = {
  Op: Sequelize.Op,
  STRING: Sequelize.STRING,
  DECIMAL: Sequelize.DECIMAL,
  TEXT: Sequelize.TEXT,
  LONGTEXT: Sequelize.TEXT("long"),
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN,
};
