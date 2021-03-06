import respond from "../../helpers/respond";
import logger from "../../services/logger";
import { ExtendedRequest } from "response";

export const getPublicationsFromUser = async (req: ExtendedRequest, res: Express.Response) => {
    return respond(res, {
        data: [
            {
                id: 1,
                title: "Honda civic 2019",
                created_at: 1614819507960,
                price: 70000,
                status: 'sold',
                chats: [
                    {
                        contact: "agus",
                        status: "read",
                        messages: [
                            { id: 324, from: "agus", to: "nico", publication: 1, text: "tengo un auto", time: 1614819503960, read: true },
                            { id: 327, from: "agus", to: "nico", publication: 1, text: "lo querés?", time: 1614819507960, read: true },
                            { id: 329, from: "nico", to: "agus", publication: 1, text: "si", time: 1614819509960, read: false },
                        ],
                    },
                ],
            },
        ],
    });
};
