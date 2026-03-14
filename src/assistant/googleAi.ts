import {GoogleGenAI} from "@google/genai";

const googleAI = 
       new GoogleGenAI({
            apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        });
    

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