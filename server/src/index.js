import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("auth", userRouter)

app.use(express.json);
app.use(cors());

mongoose.connect("mongodb+srv://me:pass@recipes.8pmlymx.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3022, () => console.log("Server started"));
