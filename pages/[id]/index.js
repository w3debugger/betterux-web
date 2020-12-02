import sites from '../../public/static/json/sites.json';
import { useRouter } from 'next/router';
import Site from '../../components/site';
import Layout from '../../components/layout';

export default function SitePage() {
  const { id } = useRouter().query;

  if (!id) {
    return (
      <Layout title="Page Not Found - Help Designers Building Better User Experience and User Interface">
        <h2>Page Not Found</h2>
      </Layout>
    )
  }
  
  const filterSites = (sites || []).filter(({ url }) => (url === id));
  
  if (filterSites.length === 0) {
    return (
      <Layout title="Page Not Found - Help Designers Building Better User Experience and User Interface">
        <h2>Page Not Found</h2>
        <p>To contribute, Please <a href="https://github.com/w3debugger/betterux-web" target="_blank">click here</a></p>
      </Layout>
    )
  }
  
  const [{ title }] = filterSites;

  return (
    <Layout title={title}>
      {(filterSites || []).map(site => (
        <Site key={site.title} {...site} />
      ))}
    </Layout>
  )
}
