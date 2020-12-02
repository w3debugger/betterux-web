import Link from 'next/link';
import './card.scss';

export default function Card({ id, url, image, title, downloads }) {
  return (
    <Link href="/[id]/[variation]" as={`/${id}/${url}`}>
      <a className="card">
        <img className="card-image" src={image} alt={title} />

        <div className="display-flexAICJCSB mt15">
          <h3 className="card-title">{title}</h3>
          {downloads && (<div className="card-downloads">{downloads} Downloads</div>)}
        </div>
      </a>
    </Link>
  )
}
