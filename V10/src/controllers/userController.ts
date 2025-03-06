import { Request, Response } from "express";
import { query } from "../config/db";
import { User } from "../types";

import { prisma } from "../index";

// CREATE
export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // TODO: No user duplicate?

  try {
    const response = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    console.log(response);
    res.status(200).json({ id: response.id });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// READ ONE
export const getUser = async (req: Request, res: Response) => {
  // Hämta url-parameter
  const { username } = req.params;

  try {
    const user = await prisma.user.findMany({
      where: { username: username },
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// READ MANY
export const getUsers = async (req: Request, res: Response) => {
   

    try {
      const user = await prisma.user.findMany({
      });
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
};

// UPDATE
export const updateUser = async (req: Request, res: Response) => {
    const {username, password} = req.body;

    try {
      const user = await prisma.user.update({
        where: { username: username },
        data: {password: password}
      });
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
};

// DELETE
export const deleteUser = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    const user = await prisma.user.delete({
      where: { username: username },
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
