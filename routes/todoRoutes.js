import { Router } from "express";
import { deleteTodo, getTodo, saveTodo, updateTodo } from "../controllers/todocontroller.js";

const todoRoute = Router()

todoRoute.get("/get",getTodo)

todoRoute.post("/save",saveTodo)

todoRoute.put("/update/:id",updateTodo)

todoRoute.delete("/delete/:id",deleteTodo)

export default todoRoute

