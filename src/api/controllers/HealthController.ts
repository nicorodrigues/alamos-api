import respond from "../../helpers/respond";
import * as health from "../../services/health";
import logger from "../../services/logger";
import { HealthCheck, ExtendedRequest } from "types";

export const getOverallHealth = async (req: ExtendedRequest, res: Express.Response) => {
    try {
        const data: HealthCheck = {
            api: "error",
        };

        const api_health = health.checkApi().then((res) => (data.api = res));

        await Promise.all([api_health]);

        respond(res, {
            code: 200,
            data: data,
        });
    } catch (error) {
        logger.error(error.message);
        console.log(error);
        respond(res, {
            code: 400,
            message: "Error fetching templates averages",
        });
    }
};
