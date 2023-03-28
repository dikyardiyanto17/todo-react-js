import Card from "react-bootstrap/Card";
import "../css/card.css";

export default function Cards() {
  return (
    <Card className="activity-card" data-cy="activity-item">
      <Card.Body>
        <Card.Title className="activity-body" data-cy="activity-item-title">
          <h4>Title</h4>
        </Card.Title>
        <div className="card-footer">
          <span data-cy="activity-item-date">Tanggal</span>
          <Card.Img
            variant="top"
            src="https://ivan-todo-devrank.netlify.app/static/media/icon-delete.1e080ddb.svg"
            className="card-image"
            alt="delete"
            data-cy="activity-item-delete-button"
          />
        </div>
      </Card.Body>
    </Card>
  );
}
