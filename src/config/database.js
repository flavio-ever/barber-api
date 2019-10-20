// https://sequelize.org/master/manual/dialects.html
// https://blog.rocketseat.com.br/nodejs-express-sequelize/
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // registro com timer
    underscored: true, // padrao tabelas e colulas que nao é camelcase. Ex: user_groups
    underscoredAll: true,
  },
};
