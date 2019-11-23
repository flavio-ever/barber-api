// https://sequelize.org/master/manual/dialects.html
// https://blog.rocketseat.com.br/nodejs-express-sequelize/

require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // registro com timer
    underscored: true, // padrao tabelas e colulas que nao é camelcase. Ex: user_groups
    underscoredAll: true,
  },
};
