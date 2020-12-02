import './gallery.scss';

export default function Gallery({ alt, src }) {
  return (
    <div className="gallery">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="gallery-title">Before</h2>
          <img className="gallery-image" src={`/static/images/${src}-before.jpg`} alt={alt} />
        </div>

        <div className="col-sm-6">
          <h2 className="gallery-title">After</h2>
          <img className="gallery-image" src={`/static/images/${src}-after.jpg`} alt={alt} />
        </div>
      </div>
    </div>
  )
}
