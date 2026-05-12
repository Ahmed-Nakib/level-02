import { orderService } from "../service/order.service";
import type { Req, Res } from "../type";
import { extractRequestInfo, sendResponse } from "../utils";

export const orderRoute = async (req: Req, res: Res) => {

    const {url, params} = extractRequestInfo(req);
    const orderId = params[1]

    if(req.method === "GET" && !orderId){
        const orders = await orderService.get();
        sendResponse(res, {message: "Order retrieved successfully", data: orders}, 200);
        return
    }
    
    if(req.method === "GET" && orderId) {
        const order = await orderService.getById(orderId);

        sendResponse(res,
            {message: order ? "Order retrieved successfully ": "Order not found", data: order, error: order ? false : true}, order ? 200 : 404
        )
        return
    }

    if(req.method === "DELETE" && orderId) {
        const deleted = await orderService.getById(orderId);

        sendResponse(res,
            {message: deleted ? "Order deleted successfully ": "Order not found", error: deleted ? false : true}, deleted ? 200 : 404
        )
        return
    }

    
}