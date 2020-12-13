import Link from 'next/link';
import './card.scss';

export default function Card({ id, url, image, title, downloads }) {
  return (
    <Link href="/[id]/[variation]" as={`/${id}/${url}`}>
      <a className="card">
        <img
          alt={title}
          src={image}
          width="256"
          height="144"
          className="card-image"
        />

        <div className="display-flexAICJCSB mt15">
          <h3 className="card-title">{title}</h3>
          {downloads && (<div className="card-downloads">{downloads} Downloads</div>)}
        </div>
      </a>
    </Link>
  )
}
