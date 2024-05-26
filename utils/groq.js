import { Groq } from "groq-sdk"

const groq = new Groq({
    apiKey: process.env.NEXT_PUBLIC_GROQ_KEY,
    dangerouslyAllowBrowser: true
})

export const requestMessage = async (message) => {
    const reply = await groq.chat.completions.create({
        messages: [
            { role: "user", content: message },
            { role: "system", content: "You are a helpful assistant." }
        ],
        model: "llama3-8b-8192"
    })
    return reply
}