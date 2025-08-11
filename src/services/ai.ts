const GEMINI_API_KEY = 'AIzaSyDfnhVsSnrATm11ErTX6YRWuVhC2riRLRE';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export const generateCodeWithAI = async (prompt: string): Promise<any> => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Generate React/TypeScript code for: ${prompt}. Return only clean, production-ready code with Tailwind CSS styling.`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('AI service unavailable');
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    return {
      code: generatedText,
      explanation: 'Code generated successfully',
      suggestions: ['Consider adding error handling', 'Add responsive design', 'Optimize for performance']
    };
  } catch (error) {
    console.error('AI generation error:', error);
    throw new Error('Failed to generate code');
  }
};

export const optimizeCode = async (code: string): Promise<string> => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Optimize this React/TypeScript code for better performance and maintainability: ${code}`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || code;
  } catch (error) {
    console.error('Code optimization error:', error);
    return code;
  }
};