const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const env = process.env.ENVIROMENT;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.y4vjhn0.mongodb.net/`,
  env,
};
