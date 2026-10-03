 export default function Aboutus({ image, title, description,cardTitle, cardDescription }) {
  return (
    <div className="about">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
      <h1>Our Services</h1>
      <h4>{cardTitle}</h4>
        <p>{cardDescription}</p>
        </div>
    </div>
  );
}