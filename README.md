# 📖 Unseen Passage Q&A – Chrome Extension  

A Chrome extension that answers questions from an unseen passage using Hugging Face’s Question Answering model. Users provide a passage (context) and a question, and the extension generates an answer instantly.  

## 🚀 Features  
- Enter any passage and ask a question about it  
- Uses Hugging Face’s `distilbert-base-cased-distilled-squad` model  
- Simple popup UI  
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