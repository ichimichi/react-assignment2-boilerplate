import React from "react";
import { CardDeck } from "react-bootstrap";
import { Card } from "../card/Card";
import { NewsService } from "./../../newsapi/services/newsServices";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.newsService = new NewsService();
  }

  componentDidMount() {
    this.newsService.getTrendingArticles("in").then((data) => {
      this.setState({
        articles: data.articles,
      });
    });
  }

  render() {
    return (
      <div>
        <CardDeck>
          {this.state.articles.map((article, i) => (
            <Card key={i} {...article}></Card>
          ))}
        </CardDeck>
      </div>
    );
  }
}
