import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import '../sass/global.scss';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content="UX, UI, Google, Ounass, Github, Soundcloud, WhatsApp, HTML, CSS, JavaScript" />
        <meta name="author" content="Muhammad Umar - w3debugger" />
      </Head>

      <div className="page-site wrapper">
        <Header/>
        <main className="main">{children}</main>
        <Footer/>
      </div>
    </>
  )
}
