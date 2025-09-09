import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { Fields, Files, File } from "formidable";
import fs from "fs";
import pdfParse from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Disable Next.js default body parser (we’re using formidable)
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).json({ error: "File upload failed" });
    }

    try {
      // Handle file safely
      const uploaded = files.file;
      const file: File | undefined = Array.isArray(uploaded)
        ? uploaded[0]
        : uploaded;

      if (!file || !file.filepath) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Read file buffer
      const fileBuffer = fs.readFileSync(file.filepath);

      // Extract text from PDF
      const pdfData = await pdfParse(fileBuffer);
      const text = pdfData.text;

      if (!text.trim()) {
        return res.status(400).json({ error: "No readable text found in PDF" });
      }

      // Send to Gemini for analysis
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `
        You are a legal assistant. Analyze the following legal document text.
        Provide:
        1. A concise summary of the document's purpose.
        2. Key obligations and parties.
        3. Potential legal concerns or risks.
        4. Recommendations.

        Document text:
        ${text}
      `;

      const result = await model.generateContent(prompt);
      const analysis = result.response.text();

      return res.status(200).json({ analysis });
    } catch (error: unknown) {
      console.error("Document analysis error:", error);
      return res.status(500).json({
        error:
          error instanceof Error ? error.message : "Failed to analyze document",
      });
    }
  });
}
