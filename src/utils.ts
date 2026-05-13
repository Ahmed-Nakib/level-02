import type { Req, Res } from "./type";

export function sendResponse <T>(res: Res, {message, data , error}: {message: string, data?:T, error?: boolean }, status = 200) {
    res.writeHead(status, {"content-type" : "application/json"})
    res.end(JSON.stringify({
        success: error ? false : true,
        message: message,
        data: error ? false : data
    }))
}

export const extractRequestInfo = async <T> (req: Req) => {
    const params = req.url?.split("/").filter(Boolean) ?? [];
    const body = req.method === "POST" || req.method === "PUT" || req.method === "PATCH" ? await parseBody<T>(req) : null
    return {
        url: req.url ?? "/",
        method: req.method,
        params: params,
        body: body
    }
}


const parseBody = async <T> (req: Req): Promise<T | null> => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString()
        })
        req.on("end", () => {
            try {
                resolve(JSON.parse(body))
            } catch (error) {
                reject(new Error("invalid data"))
            }
        })
    })
}