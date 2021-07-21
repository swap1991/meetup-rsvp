import { Container } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/registration";

function App() {
  return (
    <Container className="center-aligned">
      <Registration />
    </Container>
  );
}

export default App;
