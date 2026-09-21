export const metadata = {
  title: 'React Foundations',
  description: 'Aprendendo Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}