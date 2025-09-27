import { InferenceClient } from '@huggingface/inference';
import 'dotenv/config';

const key=process.env.HF_APIKEY;

const hf = new InferenceClient(key);

const res=await hf.questionAnswering({
  model: 'distilbert/distilbert-base-cased-distilled-squad',
  inputs: {
    question: 'Where is India?',
    context: 'The capital of India is Delhi.'
  }
})
console.log(res.answer);