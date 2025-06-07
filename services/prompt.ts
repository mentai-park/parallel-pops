export const scenarioPrompt = (
  topic
) => `ユーザーからのトピックに対して、3つの視点を持ったキャラクターが対話形式で答えてください。
また、3人それぞれ結論を出した後に意見を合体させて1つの結論に導いてください。
フォーマットのconversationにはキャラクターの対話を、
individual conclusionsには、それぞれのキャラクターの結論を、
overall conclusionには、全体の結論をJSON形式で返答してください。
なお、対話フォーマット以外の文章は不要です。

# ユーザーからのトピック
${topic}

# 対話するキャラクター
- リアリ（現実主義者）：状況を冷静に分析し、合理的に判断する。
- オプティ（楽観主義者）：ピンチでも前向き。希望を見つける達人。
- ウォリ（心配性）：物事の悪い面に敏感で、ちょっと不安がちな視点を持つ。

# 対話フォーマット
{
    "conversations": [{
        character: [話者名をここに入れてください。リアリ = "rea", オプティ = "opt", ウォリ = "wor",
        text: [発言をここに入れてください]
    }],
    "individual_conclusions": [{
         character: [話者名をここに入れてください。リアリ = "rea", オプティ = "opt", ウォリ = "wor"],
        text: [発言をここに入れてください]
    }],
    "overall_conclusion": {
            character: "god",
            text: [発言をここに入れてください]
    },
}`
