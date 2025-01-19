import express from "express";
import cors from "cors";

const app = express();

app.use(express.jason());
app.use(cors());

app.listen(8800);


