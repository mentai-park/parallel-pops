import OpenAI from "openai"

export const openai = (key: string) =>
  new OpenAI({
    apiKey: key || process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  })
