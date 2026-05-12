import { createServer } from "node:http";
import { sendResponse } from "./utils";
import { orderRoute } from "./route/order.route";
import type { Req } from "./type";

const port = 3000;
const server = createServer(async (req, res) => {

  const url = req.url ?? "/"

  if( url === "/") {
    sendResponse(res, {message: "Welcome to our server"}, 200);
    return
  } 

  if(url.startsWith("/order")){
    await orderRoute(req as Req, res)
    return
  }

  sendResponse(res, {message: "Not Found : C"}, 404)
})

server.listen( port, () => {
  console.log(`Server running at port ${port}`);
  
})