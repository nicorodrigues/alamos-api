import { Sequelize } from "sequelize";
import logger from "../services/logger";

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT) || 3306,
    dialect: "mysql",
    define: {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    },
    pool: {
        max: 7,
        min: 2,
        idle: 10000,
        acquire: 30000,
    },
    logging: (log) => logger.info(log),
});

sequelize
    .authenticate()
    .then(() => {
        logger.info("Connection to -- MySQL -- established");
    })
    .catch((err) => {
        logger.error("Unable to connect to the database:", err);
    });

export default sequelize;
