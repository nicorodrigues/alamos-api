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
                            { id: 329, from: "nico", to: "agus", owner_type: 'publications', owner_id: 1, text: "Pinta mi cerca", time: 1614819509960, read: false },
                            { id: 324, from: "agus", to: "nico", owner_type: 'publications', owner_id: 1, text: "OBLIGAME", time: 1614819503960, read: true },
                            { id: 327, from: "agus", to: "nico", owner_type: 'publications', owner_id: 1, text: "querés mi auto?", time: 1614819507960, read: true },
                            { id: 329, from: "nico", to: "agus", owner_type: 'publications', owner_id: 1, text: "Si", time: 1614819509960, read: false },
                        ],
                    },
                    {
                        contact: "jorge",
                        status: "read",
                        messages: [
                            { id: 324, from: "jorge", to: "nico", owner_type: 'publications', owner_id: 1, text: "tengo un auto", time: 1614819503960, read: true },
                            { id: 327, from: "jorge", to: "nico", owner_type: 'publications', owner_id: 1, text: "lo querés?", time: 1614819507960, read: true },
                            { id: 329, from: "nico", to: "jorge", owner_type: 'publications', owner_id: 1, text: "si", time: 1614819509960, read: false },
                        ],
                    },
                ],
            },
        ],
    });
};
