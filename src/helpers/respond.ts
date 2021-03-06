import { FinalResponse, ApiResponse } from "types";

/*
data: Sets the data to be returned
message: overrides data, applied when code >= 400
code: sets the status code
direct: if true, it won't create the response object and instead send what was received in 'data' directly
logging: if false, it won't log to console
meta_extra: everything here will be put in the response.meta property
*/
const respond = (res: FinalResponse | null, { data = null, message = "Undefined error", code = 200, direct = false, meta = false, meta_extra = {} }) => {
    if (res === null) {
        return;
    }

    let response: ApiResponse = { status: code };

    if (!direct) {
        if (code < 400) {
            response.data = data;

            if (meta && response.data) {
                if (typeof meta !== "boolean" && Object.keys(meta)) {
                    response.meta = meta;
                } else {
                    response.meta = {
                        count: Array.isArray(response.data) ? response.data.length : response.data ? 1 : 0,
                        ...meta_extra,
                    };
                }
            }
        } else {
            response.error = message;
        }
    } else {
        response = data;
    }

    res.status(code).send(response);
};

export default respond;
