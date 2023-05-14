const { Pool } = require("pg")
require('dotenv').config();
const dbUser = process.env.FORUM_DB_USER;
const dbHost = process.env.FORUM_DB_HOST;
const dbName = process.env.FORUM_DB_NAME;
const dbPassword = process.env.FORUM_DB_PASSWORD;
const dbPort = process.env.FORUM_DB_PORT;

const p = new Pool({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPassword,
    port: dbPort,
});
