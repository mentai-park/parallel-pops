"use client"

import React, { ComponentProps, FC } from "react"
import { Card } from "../components/elements/card"
import { Button } from "../components/elements/button"

const topics = [
  {
    title: "PC忘れ事件",
    body: "ハッカソンに出るために東京から福岡まできました。\nしかし、福岡に着いた時にPCを忘れてしまったことに気づきました。\nPCがないとハッカソンで力になれません。どうしたらいいでしょうか？",
  },
]

const Page: FC<ComponentProps<"section">> = ({ ...props }) => {
  return (
    <section style={{ padding: "1rem" }} {...props}>
      <h2>題材をえらんで！</h2>
      <div style={{ display: "flex", gap: ".5rem" }}>
        {topics.map((topic, i) => (
          <Card key={i}>
            <h3>{topic.title}</h3>
            <p>{topic.body}</p>
            <Button
              onClick={() => {
                alert(`選択された題材: ${topic.title}`)
              }}
            >
              これにする！
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Page
