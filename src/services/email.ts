import Axios from "axios";

export const notify = (email: string, title: string, message: string) => {
    return Axios.post("https://1ynz76z1g9.execute-api.us-east-1.amazonaws.com/dev/notify", {
        platform: "email",
        email,
        level: "info",
        title,
        message,
    });
};

export default notify;
