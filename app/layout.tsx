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
      <body>
        <header>
          <h1>Parallel Pops!</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
