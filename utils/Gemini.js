import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model:"gemini-2.0-flash-thinking-exp-01-21",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = {
  harmCategory: HarmCategory.ALL,
  harmBlockThreshold: HarmBlockThreshold.HIGH,
};

export const chatSession = model.startChat({
  generationConfig,
  //   safetySettings,
});
