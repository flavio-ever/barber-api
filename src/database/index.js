import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import DatabaseConfig from '../config/database';
// Models
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

// Buffer
const models = [User, File, Appointment];

class DataBase {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    // Inicializa conexao
    this.connection = new Sequelize(DatabaseConfig);

    // Percorre o buffer (vetor) e acessa o método inicializador
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new DataBase();
