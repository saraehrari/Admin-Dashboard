 
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

      {/* Hero Section */}
      {(image || title || description) && (
        <div className="row align-items-center g-4 mb-5">

          {/* Hero Text */}
          <div className="col-md-6">
            {title && (
              <h1 className="fw-bold display-5">
                {title}
              </h1>
            )}

            {description && (
              <p className="text-muted lead mt-3">
                {description}
              </p>
            )}
          </div>

          {/* Hero Image */}
          {image && (
            <div className="col-md-6 text-center">
              <img
                src={image}
                alt={title}
                className="img-fluid rounded-4 shadow"
                style={{
                  maxHeight: "350px",
                  objectFit: "cover",
                }}
              />
            </div>
          )}

        </div>
      )}

      {/* Section Title */}
      {title2 && (
        <h3 className="fw-bold mt-5 mb-4">
          {title2}
        </h3>
      )}

      {/* Feature Card */}
      {cardTitle && (
        <div className="card h-100 border-0 shadow-sm rounded-4">
          <div className="card-body p-4">
            <h4 className="card-title fw-bold">
              {cardTitle}
            </h4>

            <p className="card-text text-muted mb-0">
              {cardDescription}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}