import {Request, Response } from "express"
import { query } from "./../config/db"
import { User, Post } from "./../types"
import {prisma} from "../index"


// CREATE
export const createPostByUser = async (req: Request, res: Response) => {

    const { title, content, userId } = req.body;
    // TODO: När vi har authentiserin gpå plats (JWT) ska vi hämta userId därifrån istället
 
   try {
     const response = await prisma.post.create({
       data: {
         title: title,
         content: content,
         userId: userId
       },
     });
     console.log(response);
     res.status(200).json({ title: response.title });
   } catch (error) {
     res.status(500).json({ error: "Internal server error" });
   }

};

// READ MANY
export const getPostsByUser = async (req: Request, res: Response) => {


    const { userId } = req.body;
    // TODO: ersätt i auth-hantering

    try {
        const user = await prisma.post.findMany({
          where: { userId: userId },
        });
        res.status(200).json({ user });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }

};

// READ ONE
export const getPostByUser = async (req: Request, res: Response) => {

    const { postId } = req.params
    const { userId } = req.body;
    // TODO: ersätt i auth-hantering

    try {
        const user = await prisma.post.findUnique({
          where: { userId: userId, id:Number(postId) },
        });
        res.status(200).json({ user });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }

};

// UPDATE
export const updatePostByUser = async (req: Request, res: Response) => {


    const { postId } = req.params;
    const { title, content } = req.body;   // TODO: ersätt i auth-hantering

    try {
        const updatedPost = await prisma.post.update({
          where: { id: Number(postId) },
          data: {title:title, content: content}
        });
        res.status(200).json({ updatedPost });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }

};

// DELETE
export const deletePostByUser = async (req: Request, res: Response) => {


    const { postId } = req.params;

    try {
        const user = await prisma.post.delete({
          where: { id: Number(postId) },
        });
        res.status(200).json({ user });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }

};