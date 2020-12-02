import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import '../sass/global.scss';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="page-site wrapper">
        <Header/>
        <main className="main">{children}</main>
        <Footer/>
      </div>
    </>
  )
}
