
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const getGeminiChatResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Always initialize with the direct environment variable string as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `You are Nexus Core, the advanced AI assistant for Quantara Nexus. 
        Quantara Nexus is a multi-disciplinary tech conglomerate with three branches:
        1. Quantara Studio of Games (AAA gaming, high-end visuals, interactive experiences).
        2. Quantara AI (Cutting-edge R&D, neural networks, automation).
        3. Quantara Software Works (Enterprise software, cloud infrastructure, cybersecurity).
        
        Your tone is professional, futuristic, and helpful. Keep responses concise but impactful.
        Always align with the Quantara Nexus branding of being visionary and technically superior.`,
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
      },
    });

    // Directly access the .text property from the GenerateContentResponse object
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but my neural link is currently experiencing interference. Please try again shortly.";
  }
};
