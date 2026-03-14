import {GoogleGenAI} from "@google/genai";

let googleAI: GoogleGenAI;
try {
    googleAI = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
 
    });
} catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
}
    

export class Assistant {
    #model: string;
    constructor(model:string ="gemini-2.5-flash"){
        this.#model = model
    }
    async chat(content: string){
        try {
            const response = await googleAI.models.generateContent({
                    model: this.#model,
                    contents: content
            })
            return response.text
        } catch (error) {
            throw(error)
        }
    }
}