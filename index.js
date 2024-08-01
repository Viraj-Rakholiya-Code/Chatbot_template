import dotenv from "dotenv";
dotenv.config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const chatbot = new ChatGoogleGenerativeAI({});

const res = await chatbot.invoke("Hello");

console.log(res.content);
