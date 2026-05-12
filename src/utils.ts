import type { Req, Res } from "./type";

export function sendResponse <T>(res: Res, {message, data , error}: {message: string, data?:T, error?: boolean }, status = 200) {
    res.writeHead(status, {"content-type" : "application/json"})
    res.end(JSON.stringify({
        success: error ? false : true,
        message: message,
        data: error ? false : data
    }))
}

export const extractRequestInfo = (req: Req) => {
    const params = req.url?.split("/").filter(Boolean) ?? []
    return {
        url: req.url ?? "/",
        method: req.method,
        params: params,
    }
}