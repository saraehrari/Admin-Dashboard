export default function StudentCards({ title, number }) {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm p-3">
        <h5>{title}</h5>
        <p className="fs-3 fw-bold">{number}</p>
      </div>
    </div>
  );
}