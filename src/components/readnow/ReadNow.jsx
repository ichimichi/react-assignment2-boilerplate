import React from "react";
import { Alert, CardDeck } from "react-bootstrap";
import { ReadingService } from "../../services/reading.service";
import { DisplayCard } from "../displaycard/DisplayCard";

export class ReadNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoggedIn: true,
    };
    this.readingService = new ReadingService();
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: localStorage.getItem("token") ? true : false,
    });
    this.readingService
      .getReadNow(localStorage.getItem("token"))
      .then((data) => {
        this.setState({
          articles: data,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <CardDeck>
            {this.state.articles.map((article, i) => (
              <DisplayCard key={i} {...article}></DisplayCard>
            ))}
          </CardDeck>
        ) : (
          <Alert variant="warning">Unauthorized.</Alert>
        )}
      </div>
    );
  }
}
