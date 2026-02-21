// api/ai.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  const { type, input } = req.body;

  const prompt = type === "exercise"
    ? `Suggest substitutions and regressions for this exercise: ${input}`
    : `Suggest healthier or equivalent food substitutions for: ${input}`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    });

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
