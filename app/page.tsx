"use client"

import type { ComponentProps, FC } from "react"
import { useEffect, useState } from "react"
import { Card } from "../components/elements/card"
import { Button } from "../components/elements/button"
import { Character } from "../components/modules/character"
import { SpeechRecognitionModal } from "../components/modules/speech-recognition-modal"
import { openai } from "../services/openai"
import { scenarioPrompt } from "../services/prompt"
import { useLoadingContext } from "../services/loading-provider"
import axios from "axios"

const initialTopics: Topic[] = [
  {
    title: "PC忘れ事件",
    body: "ハッカソンに出るために東京から福岡まできました。\nしかし、福岡に着いた時にPCを忘れてしまったことに気づきました。\nPCがないとハッカソンで力になれません。どうしたらいいでしょうか？",
  },
  {
    title: "コメ適正価格は3000円 生産者団体 - Yahoo!ニュース",
    body: "コメの価格高騰が続くなか、生産者団体の会長は、3000円が適正価格との考えを示しました",
  },
  {
    title:
      "20代の7割以上が「電話に苦手意識」 もう電話での連絡はやめるべきか？ 企業の対応は？ #エキスパートトピ（横山信弘） - エキスパート - Yahoo!ニュース",
    body: "「電話が怖くて会社を辞めた」そんな衝撃的な声がSNSで話題になっている。調査によると、20代の実に75%が電話対応に苦手意識を持っているという。SNS世代にとって電話は「なじみのないツール」なのだ",
  },
]

const Page: FC<ComponentProps<"section">> = ({ ...props }) => {
  const [selectedTopic, setSelectedTopic] = useState<Topic>()
  const [topics, setTopics] = useState<Topic[]>(initialTopics)
  const [chatList, setChatList] = useState<Chat[]>()
  const [isOpenSpeechRecognitionModal, setIsOpenSpeechRecognitionModal] =
    useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)
  const { setLoadingText } = useLoadingContext()
  const [apiKey, setApiKey] = useState<string | undefined>(
    process.env.NEXT_PUBLIC_OPENAI_API_KEY
  )

  const fetchNews = async () => {
    const {
      data: { articles },
    } = await axios.get("http://news.google.com/rss/search", {
      params: {
        q: "米",
      },
    })
    articles.slice(0, 5).map((item) => {
      setTopics([
        ...topics,
        {
          title: item.title,
          body: item.description,
        },
      ])
    })
  }
  useEffect(() => {
    fetchNews()
  }, [])

  const handleCreateScenario = async () => {
    if (!selectedTopic) return
    if (isSending) return
    setIsSending(true)
    try {
      setLoadingText?.("シナリオを生成中...")
      const response = await openai(apiKey).chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: scenarioPrompt(selectedTopic.body),
          },
        ],
      })
      const responseText = JSON.parse(
        response.choices[0].message.content
      ) as ChatResponseType
      setChatList([
        ...responseText.conversations,
        responseText.overall_conclusion,
      ])
    } finally {
      setIsSending(false)
      setLoadingText?.(undefined)
    }
  }
  return (
    <section style={{ padding: "1rem" }} {...props}>
      <video style={{ width: "100%" }} controls>
        <track kind="captions" srcLang="ja" label="Japanese" />
        <source src="./movie.mp4" type="video/mp4" />
        お使いのブラウザは video タグをサポートしていません。
      </video>
      <section style={{ padding: "1rem" }}>
        <h4>見る角度を変えれば毎日がもっと楽しくなる</h4>
        <p>
          プレイヤーからのトピックの入力に対して、3つの視点を持つキャラクター（リアリ＝現実主義・オプティ＝楽観主義・ウォリ＝心配性）が意見をぶつけ合い、最後に統合した結論を出してひらめき（悟り）を得るwebアプリケーションです。
        </p>
      </section>
      {!chatList && (
        <>
          <h2>題材をえらんで！</h2>
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              flexWrap: "wrap",
              padding: "1rem",
            }}
          >
            {topics.map((topic, i) => (
              <Card
                key={i}
                onSelect={() => setSelectedTopic(topic)}
                selected={topic === selectedTopic}
              >
                <h3>{topic.title}</h3>
                <p>{topic.body}</p>
              </Card>
            ))}
          </div>
          <div style={{ padding: "1rem", gap: ".5rem", display: "flex" }}>
            <Button onClick={() => setIsOpenSpeechRecognitionModal(true)}>
              題材を音声で入力する
            </Button>
            {isOpenSpeechRecognitionModal && (
              <SpeechRecognitionModal
                onClose={(text) => {
                  setIsOpenSpeechRecognitionModal(false)
                  if (text) {
                    setTopics([
                      ...topics,
                      {
                        title: "音声入力",
                        body: text,
                      },
                    ])
                  }
                }}
              />
            )}
            <Button
              onClick={async () => await handleCreateScenario()}
              disabled={!selectedTopic}
            >
              シナリオ生成
            </Button>
          </div>
        </>
      )}
      {chatList && (
        <div
          style={{
            margin: "auto",
            maxWidth: "48rem",
          }}
        >
          {selectedTopic && (
            <Card style={{ maxWidth: "100%" }}>
              <h3>{selectedTopic.title}</h3>
              <p>{selectedTopic.body}</p>
            </Card>
          )}
          {chatList?.map((chat, i) => (
            <Character key={i} type={chat.character} text={chat.text} />
          ))}
        </div>
      )}
      <div
        style={{ padding: "1rem", display: "flex", justifyContent: "right" }}
      >
        <Button onClick={() => setChatList(undefined)}>クリア</Button>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          gap: ".5rem",
          padding: "1rem",
        }}
      >
        <label htmlFor="apiKey">OpenAI API Key</label>
        <input
          type="password"
          value={apiKey}
          onChange={({ target }) => setApiKey(target.value)}
        />
      </div>
    </section>
  )
}

export default Page
