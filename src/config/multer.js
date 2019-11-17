import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  /**
   * @name storage como o multer vai armazenar o arquivo
   *
   * @function diskStorage uma das formas de se salvar o arquivo
   * { destination } pasta que os arquivos serão salvos (a pasta uploads fora do src)
   *
   * @function path (do node) ...
   *
   * @function resolve cada parâmetro é uma pasta
   *
   * @function filename ...
   * { req } ...
   * { file } tipo arquivo, extensão, tamanho, nome e etc
   * { cb } callback
   */
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
