import { OpenAI } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;
  const apiKey = req.headers.authorization?.split(" ")[1];

  if (!apiKey) {
    return res.status(400).json({ error: "API key is required" });
  }

  const client = new OpenAI(apiKey, { baseURL: "https://api.perplexity.ai" });

  try {
    const response = await client.chat.completions.create({
      model: "llama-3-sonar-large-32k-online",
      messages,
    });

    res.status(200).json({ content: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}