import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            {/* google font  */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Biryani:wght@400;600&family=Open+Sans:wght@400;500;600;700&&family=Roboto:wght@300,400,500,700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

            {/* bootstrap script  */}
            
            <Script
            src="https://unpkg.com/react/umd/react.production.min.js"
            strategy="lazyOnload" 
            />

            <Script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            strategy="lazyOnload" 
            />

            <Script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            strategy="lazyOnload" 
            />
            <Script src="https://kit.fontawesome.com/b98d090fd4.js" strategy="lazyOnload" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument