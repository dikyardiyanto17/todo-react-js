import "../css/details.css";

export default function CardDetail() {
  return (
    <>
      <div className="content-item">
        <div className="d-flex align-items-center form-check">
          <div>
            <input type="checkbox" className="form-check-input" />
          </div>
          <div className="label-indicator very-high"></div>
          <span>Hello Worlds</span>
          <div className="icon-edit-p"></div>
        </div>
        <img src="https://ivan-todo-devrank.netlify.app/static/media/icon-delete.1e080ddb.svg" alt="delete" data-cy="todo-item-delete-button"/>
      </div>
    </>
  );
}
