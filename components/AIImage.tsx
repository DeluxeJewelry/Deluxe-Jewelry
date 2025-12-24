
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackUrl?: string;
}

const AIImage: React.FC<AIImageProps> = ({ prompt, alt, className, fallbackUrl }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1",
            },
          },
        });

        const imagePart = response.candidates?.[0]?.content?.parts.find(part => part.inlineData);
        
        if (imagePart?.inlineData) {
          const base64Data = imagePart.inlineData.data;
          setImageUrl(`data:image/png;base64,${base64Data}`);
        } else {
          throw new Error("No image data returned");
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt]);

  if (loading) {
    return (
      <div className={`bg-[#111] animate-pulse flex items-center justify-center ${className}`}>
        <span className="text-[10px] uppercase tracking-widest text-gray-600">Generating Luxury Visual...</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return <img src={fallbackUrl} alt={alt} className={className} />;
  }

  return <img src={imageUrl} alt={alt} className={className} />;
};

export default AIImage;
