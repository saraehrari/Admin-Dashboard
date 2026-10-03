 export default function Aboutus({
  image,
  title,
  description,
  cardTitle,
  cardDescription,
  title2,
}) {
  return (
    <div className="about">

      {image && (
        <img
          src={image}
          alt={title}
          className="img-fluid rounded-4 mb-4"
          style={{ maxWidth: "250px" }}
        />
      )}

      {title && <h1 className="fw-bold">{title}</h1>}

      {description && (
        <p className="text-muted">
          {description}
        </p>
      )}

      {title2 && (
        <h3 className="fw-bold mt-5 mb-4">
          {title2}
        </h3>
      )}

      {cardTitle && (
        <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
          <div className="card-body">
            <h4 className="card-title fw-bold">
              {cardTitle}
            </h4>

            <p className="card-text text-muted">
              {cardDescription}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}