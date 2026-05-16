import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";

const createUser =async (req: Request, res: Response) => {
    const result = await userService.createUserIntoDB(req.body)
  try {
    
    res.status(200).json({
      message: "Created",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      author: error,
    });
  }
}


export const userController = {
    createUser,
}