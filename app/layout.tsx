export const metadata = {
  title: "Page title",
  description: "Page description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body
        style={{
          background: "linear-gradient(to bottom right, #f0fff0, #e6ffe6)",
        }}
      >
        <header style={{ padding: "1rem", textAlign: "center" }}>
          <h1
            style={{
              background: "linear-gradient(90deg, #3b82f6, #1e40af)",
              fontSize: "1.5rem",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Parallel Pops!
          </h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
