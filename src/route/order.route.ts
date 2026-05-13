import { orderService } from "../service/order.service";
import type { Order, Req, Res } from "../type";
import { extractRequestInfo, sendResponse } from "../utils";

export const orderRoute = async (req: Req, res: Res) => {

    const {method, params, body} = await extractRequestInfo<Omit<Order, "id">>(req);
    const orderId = params[1]

    if(method === "GET" && !orderId){
        const orders = await orderService.get();
        sendResponse(res, {message: "Order retrieved successfully", data: orders}, 200);
        return
    }
    
    if(method === "GET" && orderId) {
        const order = await orderService.getById(orderId);

        sendResponse(res,
            {message: order ? "Order retrieved successfully ": "Order not found", data: order, error: order ? false : true}, order ? 200 : 404
        )
        return
    }

    if(method === "DELETE" && orderId) {
        const deleted = await orderService.getById(orderId);

        sendResponse(res,
            {message: deleted ? "Order deleted successfully ": "Order not found", error: deleted ? false : true}, deleted ? 200 : 404
        )
        return
    }

    if(method === "POST" && body){
        const newOrder = orderService.create(body)
        sendResponse(res, {message: "Order created", data: newOrder}, 201);
        return
    }
    
    if(method === "PUT" && body && orderId){
        const updated = await orderService.update(orderId, body)
        sendResponse(res, {message: updated ? "Update successfully": "undefined ", data: updated}, updated ? 201 : 404);
        return
    }
    
}