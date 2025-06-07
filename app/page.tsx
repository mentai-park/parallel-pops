"use client"

import React, { ComponentProps, FC } from "react"
import { Card } from "../components/elements/card"

const Page: FC<ComponentProps<"section">> = ({ ...props }) => {
  return (
    <section style={{ padding: "1rem" }} {...props}>
      <h2>題材をえらんで！</h2>
      <div style={{ display: "flex", gap: ".5rem" }}>
        <Card>PC忘れ事件</Card>
      </div>
    </section>
  )
}

export default Page
