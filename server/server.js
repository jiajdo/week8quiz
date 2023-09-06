import cors from "cors";
import express from "express";
import "dotenv/config";

const app = express();
app.use(cors());

const PORT = process.env.port || 8080;
const APIKEY = process.env.APIKEY;

app.get(() => {});

app.get(() => {});

app.listen(PORT, () => {
  console.log(`Your man is listening on ${PORT}`);
});
