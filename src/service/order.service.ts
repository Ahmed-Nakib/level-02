import fs from "fs/promises"
import path from "node:path";
import type { Order } from "../type";



const DB_PATH = path.join(process.cwd(), "db", "data.json")

class OrderService{

    private async readData():Promise<Order[]> {
        try {
            const data =await fs.readFile(DB_PATH, "utf-8")
            return JSON.parse(data)            
        } catch {
            return []
        }
    }


    private async writeData(data: Order[]){
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2))
    }

    // GET
    async get () {
        const data = await this.readData();
        return data;
    }


    // GETbyId
    async getById (id: string) {
        const data = await this.readData();
        return data.find(order => order.id === id || null);
    }

    // create
    async create(order: Omit<Order, "id">) {
        const data = await this.readData();
        const newOrder = {
            id: String(Math.random() * 100),
           ...order
        }

        data.push(newOrder)

        await this.writeData(data)
    }


    // update 

    async update (id: string, updates: Partial<Omit<Order, "ïd">>): Promise<Order| null >{
        const data = await this.readData();

        const i = data.findIndex(order => order.id === id);
        
        if(i === -i) return null;

        data[i] = {...data[i], ...updates} as Order;

        await this.writeData(data);

        return data[i]
    }

    //delete

    async delete (id: string){
        const data = await this.readData();
        const i = data.findIndex(order => order.id === id);
        
        if(i === -1) return null;

        data.slice(i, 1)

        await this.writeData(data)
    }
}


export const orderService = new OrderService()

