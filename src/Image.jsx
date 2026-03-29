/* the resuable image component*/
function Image({ src, title }) {
  return (
    <div className="image-card">
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Image;