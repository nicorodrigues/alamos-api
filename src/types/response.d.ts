export interface ApiResponse {
    status: number;
    data?: any;
    message?: string;
    meta?: any;
    error?: string;
}

export interface ExtendedRequest extends Express.Request {
    body?: any;
    params?: any;
    query?: any;
    headers?: any;
    connection?: any;
    ip?: any;
}

export interface FinalResponse extends Express.Response {
    status?: (code: number) => any;
}
