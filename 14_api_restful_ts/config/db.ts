import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(dbUri);
    console.log("Conectou ao banco de dados!");
  } catch (e) {
    console.log("Não foi possivel conectar ao DB!");
    console.log(`Erroc: ${e}`);
  }
}

export default connect;
