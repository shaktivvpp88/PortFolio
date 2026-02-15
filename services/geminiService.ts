import { GoogleGenAI, Chat } from "@google/genai";
import { ABOUT_TEXT, EXPERIENCES, PROJECTS, SKILLS, DEV_NAME } from "../constants";

// Construct a context string for the AI
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${DEV_NAME}'s portfolio website. 
Your goal is to answer questions about ${DEV_NAME}'s professional experience, skills, and projects based strictly on the context provided below.
Be professional, concise, and enthusiastic.
If a user asks something unrelated to ${DEV_NAME}'s professional background, politely steer the conversation back to the portfolio.

Context:
About: ${ABOUT_TEXT}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
      console.warn("API_KEY is not set. Chat functionality will not work.");
    }
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: {
          thinkingBudget: 32768,
        },
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};