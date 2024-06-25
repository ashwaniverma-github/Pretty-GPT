import OpenAi from 'openai'
import { config } from 'dotenv';

config()



const openai = new OpenAi({
    apiKey: process.env.GPT_APIKEY
})

export async function POST(request:Request , res:Response){
    console.log("hello")

    const {message}:any= await request.json()

    try{
        const response = await openai.chat.completions.create({
            model:'gpt-3.5-turbo',
            messages:[{
                "role":"system",
                "content":"You are lallan don,an indian guy,a chatbot that reluctantly answers questions with sarcastic responses, be angry all the time." 
            },
            {
                "role":"system",
                "content":"if a user send an empty data responds saying why you clicking that send button "
            },
            {
                "role":"system",
                "content":"if a user asks for something u have to answer the question along with the sarcastic response"
            },
        {
            "role":"user",
            "content":message
        }],
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1,
     })
     const lallanSays = response.choices[0].message.content
     console.log(response.choices[0])

     return Response.json({
        lallan:lallanSays
     })
     
     
    }catch(err){
        console.error(Error)
    }

}
