import winston from "winston";

const dateFormat = () => {
    return new Date(Date.now()).toLocaleString();
};

class Logger {
    logger: any;
    stream: any;
    log_data: any;

    constructor() {
        this.log_data = null;

        this.stream = {
            write: (message: string, encoding: any) => {
                this.info(message.trim());
            },
        };

        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.printf((info: { level: any; message: any; obj: any }) => {
                            let message = `${dateFormat()} | ${info.level} | `;
                            message += `${process.env.APP_NAME || "app"} | ${info.message}`;
                            message += info.obj ? ` | ` + `data: ${JSON.stringify(info.obj)}` : "";
                            message += this.log_data ? ` | ` + `extra_data: ${JSON.stringify(this.log_data)}` : "";

                            return message;
                        })
                    ),
                }),
            ],
            format: winston.format.printf((info: { level: any; message: any; obj: any }) => {
                let message = `${dateFormat()} | ${info.level} | `;
                message += `${process.env.APP_NAME || "app"} | ${info.message}`;
                message += info.obj ? ` | ` + `${JSON.stringify(info.obj)}` : "";
                message += this.log_data ? ` | ` + `extra_data: ${JSON.stringify(this.log_data)}` : "";

                return message;
            }),
        });
    }

    info(message: any, obj?: any, extra: any = null) {
        if (extra !== null) {
            this._extraData(extra);
        }

        this.logger.log("info", message, {
            obj,
        });
    }

    debug(message: any, obj?: any, extra: any = null) {
        if (extra !== null) {
            this._extraData(extra);
        }

        this.logger.log("debug", message, {
            obj,
        });
    }

    error(message: any, obj?: any, extra: any = null) {
        if (extra !== null) {
            this._extraData(extra);
        }

        this.logger.log("error", message, {
            obj,
        });
    }

    _extraData(log_data: any) {
        this.log_data = log_data;
    }
}

export default new Logger();
