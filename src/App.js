import React from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import { ReadNow } from "./components/readnow/ReadNow.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-content">
          <Container fluid>
            <Row className="row-header">
              <Header />
            </Row>
            <Row className="row-main">
              <Col xs={2} />
              <Col xs={8}>
                <Switch>
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <Route exact path="/dashboard" component={Dashboard}></Route>
                  <Route exact path="/readlater" component={ReadNow}></Route>
                </Switch>
                {/* <Route exact path="/register" component={Register}></Route> */}
              </Col>
              <Col xs={2} />
            </Row>
            <Row className="row-footer">
              <Footer />
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;
