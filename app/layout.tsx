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
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
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
