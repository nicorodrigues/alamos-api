import respond from "../../helpers/respond";
import logger from "../../services/logger";
import { ExtendedRequest } from "response";

import * as publications from "../../services/publications";

export const getPublicationsFromUser = async (req: ExtendedRequest, res: Express.Response) => {
    const pubs = await publications.getFromUser(req.body.id);

    return respond(res, {
        data: pubs,
    });
};
