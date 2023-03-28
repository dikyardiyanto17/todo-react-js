import "../css/home.css";
import Button from "react-bootstrap/Button";
import Cards from "../components/Card";
import EmptyDashboard from "../components/EmptyDashboard";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="todo-header">
          <h1 className="activity">Activity</h1>
          <Button variant="primary" data-cy="activity-add-button">
            + Tambah
          </Button>
        </div>
        <div className="dashboard-content">
          <div className="row">
            <div className="col-3">
              <Cards className="col-3" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <EmptyDashboard />
        </div>
      </div>
    </>
  );
}
