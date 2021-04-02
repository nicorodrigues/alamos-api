import { PublicationModel } from "../database/models/Publication";
import { Message, Publication, User } from "../database/models";
import { MessageModel } from "../database/models/Message";

export const orderMessagesIntoChats = (messages: MessageModel[]) => {
    const chats: any = [];

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const current_chat = chats.find((chat: any) => chat.contact === message.from || chat.contact === message.to);

        if (current_chat) {
            current_chat.push(message);
        } else {
            chats.push({
                contact: message.from,
                status: "unread",
                messages: [message],
            });
        }
    }

    return chats;
};

export const getFromUser = (user_id: string) => {
    return Publication.findAll({
        where: { user_id },
        include: [
            {
                model: Message,
                as: "messages",
                include: [
                    { model: User, as: "from_user", attributes: ["id", "first_name", "last_name", "email"] },
                    { model: User, as: "to_user", attributes: ["id", "first_name", "last_name", "email"] },
                ],
            },
        ],
    }).then((publications: PublicationModel[]) => {
        for (let i = 0; i < publications.length; i++) {
            const publication = publications[i];

            publication.setDataValue("chats", orderMessagesIntoChats(publication.messages));
        }

        return publications;
    });
};
