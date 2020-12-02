import Link from 'next/link';
import Card from './card';
import './site.scss';

export default function Site({ url, title, limit, variations }) {
  const limitVariations = limit ? variations.slice(0, limit) : variations;

  return (
    <div className="site">
      <div className="site-header display-flexAICJCSB">
        <div className="site-title">{title}</div>
  
        {(variations.length > 3 && limit) && (
          <Link href="/[id]" as={`/${url}`}>
            <a className="site-seeAll">See all</a>
          </Link>
        )}
      </div>

      <div className="site-banners">
        <div className="row">
          {limitVariations.map(variation => (
            <div key={variation.title} className="col-sm-4">
              <Card id={url} {...variation} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
