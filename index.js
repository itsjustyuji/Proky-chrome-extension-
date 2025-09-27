import express from "express";
import { InferenceClient } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(".")); // serve index.html

const hf = new InferenceClient(process.env.HF_APIKEY);

// Route to handle Q&A
app.post("/ask", async (req, res) => {
  try {
    const { question, context } = req.body;

    const result = await hf.questionAnswering({
      model: "distilbert/distilbert-base-cased-distilled-squad",
      inputs: { question, context }
    });

    res.json({ answer: result.answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
