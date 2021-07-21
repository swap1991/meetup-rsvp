import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/registration";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <Container className="center-aligned">
        <Switch>
          <Route exact path="/">
            <Registration />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
