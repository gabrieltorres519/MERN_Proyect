import { Router } from "express";
import {
  getPost,
  createPost,
  updatePost,
  removePost,
  getPosts,
} from "../controllers/posts.controllers.js";

const router = Router();

// Todos los registros
router.get("/posts", getPosts);

// Obtener registro por _id
router.get("/posts:id", getPost);

// Insertar registro
router.post("/posts", createPost);

// Modificar registro
router.put("/posts/:id", updatePost);

// Eliminar
router.delete("/posts/:id", removePost);

export default router;