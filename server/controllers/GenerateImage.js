import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAIApi  from "openai";
import Configuration from "openai";

dotenv.config();


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Controller to generate Image
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      throw createError(400, "Prompt is required to generate an image.");
    }

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const generatedImage = response.data.data[0].b64_json;
    res.status(200).json({ photo: generatedImage });
  } catch (error) {
    console.error("Error generating image:", error.message);
    next(
      createError(
        error.status || 500,
        error?.response?.data?.error.message || error.message
      )
    );
  }
};
