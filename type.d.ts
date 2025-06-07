type Topic = { title: string; body: string }

type Character = "wor" | "rea" | "opt" | "god"

type Chat = {
  character: Character
  text: string
}

type ChatResponseType = {
  conversations: [
    {
      character: Character
      text: string
    },
  ]
  individual_conclusions: [
    {
      character: Character
      text: string
    },
  ]
  overall_conclusion: {
    character: "god"
    text: string
  }
}
