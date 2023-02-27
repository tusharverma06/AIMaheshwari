import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI MAHESHWARI" key="title"/>
        <meta property="og:description" content="Get motivated and reach your goals with AI" key="description"/>
        <meta
          property="og:image"
          content="https://i.ibb.co/T1gRmBR/Final-OG-AI.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
