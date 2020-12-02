import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    const metaName = {
      'author': 'author',
      'robots': 'robots',
      'description': 'description',
      'theme-color': 'theme-color',
      'naver-site-verification': 'naver-site-verification',
      'msapplication-TileColor': 'msapplication-TileColor',
      'msapplication-TileImage': 'msapplication-TileImage',
      'google-site-verification': 'google-site-verification',
    };

    const metaProperty = {
      'fb:app_id': 'fb:app_id',
      'article:author': 'article:author',
      'al:web:url': 'al:web:url',
      'al:ios:url': 'al:ios:url',
      'al:ios:app_name': 'al:ios:app_name',
      'al:ios:app_store_id': 'al:ios:app_store_id',
      'al:android:url': 'al:android:url',
      'al:android:package': 'al:android:package',
      'al:android:app_name': 'al:android:app_name',
      'og:url': 'og:url',
      'og:type': 'og:type',
      'og:title': 'og:title',
      'og:image': 'og:image',
      'og:locale': 'og:locale',
      'og:site_name': 'og:site_name',
      'og:description': 'og:description',
    };

    const hrefFavIcon = size => `/static/images/app-icon/favicon-${size}x${size}.png`;
    const hrefAppleIcon = size => `/static/images/app-icon/apple-icon-${size}x${size}.png`;

    return (
      <Html lang='en-US'>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          {/*
          <base href="https://betterux.io/" />
          <link href="manifest.json" rel="manifest" />

          {Object.keys(metaName).map(name => (<meta name={name} content={metaName[name]} />))}
          {Object.keys(metaProperty).map(property => (<meta property={property} content={metaProperty[property]} />))}

          {[16, 32, 96].map(size => (
            <link sizes={`${size}x${size}`} href={hrefFavIcon(size)} rel="icon" type="image/png" />
          ))}

          {[57, 60, 72, 76, 114, 120, 144, 152, 180].map(size => (
            <link sizes={`${size}x${size}`} href={hrefAppleIcon(size)} rel="apple-touch-icon" />
          ))}

          <link rel="icon" type="image/png" sizes="192x192" href="/static/images/app-icon/android-icon-192x192.png" />
          */}
        </Head>

        <body className="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;
