# 📖 Unseen Passage Q&A – Chrome Extension  

A Chrome extension that answers questions from an unseen passage using Hugging Face’s Inference.js Question Answering model. Users provide a passage(context) and a question, and the extension generates an answer instantly.  

## 🚀 Features  
- Enter any passage and ask a question about it
- <img width="1893" height="864" alt="Screenshot 2025-09-27 234744" src="https://github.com/user-attachments/assets/23c1016e-dee7-4977-9607-acfac9e2034d" />

- Uses Hugging Face’s `distilbert-base-cased-distilled-squad` model  
- Simple popup UI
- <img width="1884" height="896" alt="Screenshot 2025-09-27 234822" src="https://github.com/user-attachments/assets/68f6b429-c3d7-4e85-a589-c045cb0c31c9" />
- Generates answer using HF model
- <img width="1842" height="840" alt="Screenshot 2025-09-27 234859" src="https://github.com/user-attachments/assets/06644b0b-0abe-4a64-872f-c7b271feedb3" />
- Backend powered by Node.js + Express

## ⚡ Getting Started  
1. Clone the repo  
2. Run `npm install`  
3. Add your Hugging Face API key in `.env`  
4. Start backend: `node index.js`  
5. Load the extension in Chrome → `chrome://extensions/` → Load unpacked  

## 🛠 Tech Stack  
- Chrome Extension (HTML, CSS, JS)  
- Node.js, Express  
- Hugging Face Inference API (Q&A model)
