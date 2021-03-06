require("dotenv").config();

module.exports = {
    apps: [
        {
            name: "Alamos - Main API",
            script: "dist/index.js",
            cwd: "./",
            watch: true,
            ignore_watch: ["logs", "node_modules"],
            error_file: "logs/err.log",
            out_file: "logs/out.log",
            log_file: "logs/combined.log",
        },
    ],
};
