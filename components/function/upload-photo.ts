import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { image, documentType } = req.body;

    if (!image) {
      return res.status(400).json({ error: "No image provided" });
    }

    // Upload base64 image to Cloudinary
    const uploadResponse = await cloudinary.v2.uploader.upload(image, {
      folder: "vkyc-documents",
      public_id: `${documentType}-${Date.now()}`,
    });

    return res.status(200).json({ url: uploadResponse.secure_url });
  } catch (error: any) {
    console.error("Cloudinary upload error:", error);
    return res.status(500).json({ error: "Upload failed" });
  }
}
