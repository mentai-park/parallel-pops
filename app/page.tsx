"use client"

import React, { ComponentProps, FC } from "react"
import { Card } from "../components/elements/card"
import { Button } from "../components/elements/button"
import { Character } from "../components/modules/character"

type Topic = { title: string; body: string }

const topics: Topic[] = [
  {
    title: "PC忘れ事件",
    body: "ハッカソンに出るために東京から福岡まできました。\nしかし、福岡に着いた時にPCを忘れてしまったことに気づきました。\nPCがないとハッカソンで力になれません。どうしたらいいでしょうか？",
  },
  {
    title:
      "自民党が都議選公約、「所得倍増」に向け生活支援…生理痛や更年期障害の無料検診も盛り込む",
    body: "生活支援では物価高や家賃の上昇に備え、「東京都公式アプリ（東京アプリ）」を通じ、子育て世帯が賃貸に住む場合は月２万円分、住宅を購入した場合は１００万円分のポイントを、それぞれ付与するとした。福祉政策では女性の健康向上に焦点を当て、生理痛や更年期障害の無料検診などの実施を盛り込んだ。",
  },
]

type Chat = {
  type: "wor" | "rea" | "opt"
  text: string
}

const chatList: Chat[] = [
  {
    type: "wor",
    text: "こんにちは！ハッカソンの準備はできていますか？",
  },
  {
    type: "rea",
    text: "こんにちは！ハッカソンの準備はできていますか？",
  },
  {
    type: "opt",
    text: "こんにちは！ハッカソンの準備はできていますか？\n\nPCを忘れたのは大変ですね。福岡でPCを借りることができる場所を探してみましょうか？",
  },
]

const Page: FC<ComponentProps<"section">> = ({ ...props }) => {
  const [selectedTopic, setSelectedTopic] = React.useState<Topic>()
  return (
    <section style={{ padding: "1rem" }} {...props}>
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
      <div style={{ padding: "1rem" }}>
        <Button onClick={() => {}}>シナリオ生成</Button>
      </div>

      <div>
        {chatList.map((chat, i) => (
          <Character key={i} type={chat.type} text={chat.text} />
        ))}
      </div>
    </section>
  )
}

export default Page
