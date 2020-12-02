import sites from '../public/static/json/sites.json';
import Site from '../components/site';
import Layout from '../components/layout';

export default function HomePage() {
  return (
    <Layout title="BetterUX - Help Designers Building Better User Experience and User Interface">
      {(sites || []).map(site => (
        <Site key={site.title} {...site} limit={3} />
      ))}
    </Layout>
  )
}
