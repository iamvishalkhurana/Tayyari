import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

import questionRouter from "./routes/questionRoute.js";

app.use("/api/v1/ques", questionRouter);

export { app };
