// lib/pdfExtractor.ts
import Tesseract from "tesseract.js";
import { PDFDocument } from "pdf-lib";

// --- DOM polyfills for Node.js (so pdfjs-dist doesn't crash) ---
import { DOMMatrix, DOMPoint } from "canvas";
import { DOMParser } from "xmldom";

if (!(global as any).DOMMatrix) (global as any).DOMMatrix = DOMMatrix;
if (!(global as any).DOMPoint) (global as any).DOMPoint = DOMPoint;
if (!(global as any).DOMRect) {
  (global as any).DOMRect = class DOMRect {
    constructor(
      public x = 0,
      public y = 0,
      public width = 0,
      public height = 0
    ) {}
  };
}
if (!(global as any).DOMParser) (global as any).DOMParser = DOMParser;

// --- Simple PDF text extraction without external dependencies ---
export async function extractPDFText(arrayBuffer: ArrayBuffer): Promise<string> {
  try {
    const data = new Uint8Array(arrayBuffer);
    const pdfString = Array.from(data, (byte) =>
      String.fromCharCode(byte)
    ).join("");

    let extractedText = "";

    // Look for text objects in PDF
    const textRegex = /BT\s*(.*?)\s*ET/g;
    const textMatches = pdfString.match(textRegex) || [];

    for (const match of textMatches) {
      const textContent = match.match(/\((.*?)\)/g) || [];
      for (const text of textContent) {
        const cleanText = text
          .slice(1, -1)
          .replace(/\\n/g, "\n")
          .replace(/\\r/g, "\r")
          .replace(/\\t/g, "\t")
          .replace(/\\\\/g, "\\")
          .replace(/\\'/g, "'")
          .replace(/\\"/g, '"');
        extractedText += cleanText + " ";
      }
    }

    // Look for Tj operators
    if (extractedText.length < 50) {
      const tjRegex = /\((.*?)\)\s*Tj/g;
      let match;
      while ((match = tjRegex.exec(pdfString)) !== null) {
        extractedText += match[1] + " ";
      }
    }

    // Look for TJ arrays
    if (extractedText.length < 50) {
      const tjArrayRegex = /\[(.*?)\]\s*TJ/g;
      const tjArrayMatches = pdfString.match(tjArrayRegex) || [];

      for (const tjArray of tjArrayMatches) {
        const textMatches = tjArray.match(/\((.*?)\)/g) || [];
        for (const text of textMatches) {
          extractedText += text.slice(1, -1) + " ";
        }
      }
    }

    extractedText = extractedText.replace(/\s+/g, " ").trim();

    return extractedText.length > 10
      ? extractedText
      : "No readable text found in PDF";
  } catch (error) {
    console.error("PDF text extraction error:", error);
    return "Failed to extract text from PDF";
  }
}

// --- Advanced PDF.js text extraction (fallback) ---
export async function extractPDFTextAdvanced(
  arrayBuffer: ArrayBuffer
): Promise<string> {
  try {
    let pdfjsLib: any;

    // ✅ Try multiple locations (for v2/v3/v4 compatibility)
    try {
      pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js"); // v3
    } catch {
      try {
        pdfjsLib = require("pdfjs-dist/build/pdf.js"); // v2
      } catch {
        pdfjsLib = require("pdfjs-dist"); // v4+
      }
    }

    // ✅ Disable worker completely for Node.js (prevents pdf.worker.js errors)
    if (pdfjsLib.GlobalWorkerOptions) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = undefined;
    }

    const loadingTask = pdfjsLib.getDocument({
      data: arrayBuffer,
      useSystemFonts: true,
      disableFontFace: true,
      verbosity: 0,
    });

    const pdf = await loadingTask.promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      try {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();

        const pageText = textContent.items
          .map((item: any) => ("str" in item ? item.str : ""))
          .join(" ");

        fullText += pageText + "\n";
      } catch (pageError) {
        console.warn(`Error extracting text from page ${i}:`, pageError);
        continue;
      }
    }

    await pdf.destroy();
    return fullText.trim();
  } catch (error) {
    console.error("Advanced PDF extraction error:", error);
    throw error;
  }
}

// --- OCR fallback for scanned/image PDFs ---
export async function extractPDFWithOCR(
  arrayBuffer: ArrayBuffer
): Promise<string> {
  try {
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    let fullText = "";

    for (let i = 0; i < pdfDoc.getPageCount(); i++) {
      // TODO: convert page to image buffer before passing to Tesseract
      // Example (pseudo):
      // const { data: { text } } = await Tesseract.recognize(pngBuffer, "eng");
      // fullText += text + "\n";
    }

    return fullText.trim() || "No readable text found (OCR failed)";
  } catch (error) {
    console.error("OCR extraction failed:", error);
    return "Failed to extract text with OCR";
  }
}
