import cors from "cors";
import express from "express";
import "dotenv/config";

const app = express();
app.use(cors());

const PORT = process.env.port || 8080;
const APIKEY = process.env.API_KEY;

app.get('/', (req, res) => {
  res.json({ message: "Test" });
});

app.get('/quiz', (req, res) => {
  fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
  .then(response => {
  return response.json()
  })
  .then(apiData => {
  res.json(apiData);
  })
});


app.listen(PORT, () => {
  console.log(`Your man is listening on ${PORT}`);
});
