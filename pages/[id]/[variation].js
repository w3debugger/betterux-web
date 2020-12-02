import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Gallery from '../../components/gallery';

export default function VariationPage() {
  const router = useRouter();
  const { id, variation } = router.query;

  if (!id || !variation) { return (<div>Loading</div>); }

  const title = `${variation} - ${id} - Help Designers Building Better User Experience and User Interface`;

  return (
    <Layout title={title}>
      <>
        <div className="row">
          <div className="col-sm-8">
            {[...new Array(1)].map((item, index) => (
              <Gallery key={index} src={`${id}/${variation}/${index + 1}`} />
            ))}
          </div>

          <div className="col-sm-4">
            <div className="sticky" style={{ top: 60 }}>
              <h3>CSS</h3>
              <iframe className="mt15" src={`/static/css/${id}/${variation}.css`} frameBorder="0" />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
