import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados!");
  } catch (e) {
    Logger.error("Não foi possivel conectar ao DB!");
    Logger.error(`Erroc: ${e}`);
    // encerra a aplicação em caso de erro
    // process.exit(1);
  }
}

export default connect;
