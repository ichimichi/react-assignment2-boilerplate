import React from "react";
import { Button, Card as BootCard } from "react-bootstrap";
import { NewsService } from "../../newsapi/services/newsServices";
import { ReadingService } from "../../services/reading.service";

export const Card = ({ title, urlToImage, content, url }) => {
  const handleAddToReadLater = () => {
    const readingService = new ReadingService();
    readingService
      .addToReadLater(localStorage.getItem("token"), {
        title,
        urlToImage,
        content,
        url,
      })
      .then((data) => {
        if (!data) {
          alert("error");
        } else {
          alert(`${data.title.slice(0, 30).concat("...")} added to read later`);
        }
      });
  };

  return (
    <BootCard
      style={{ minWidth: "18rem", maxWidth: "10rem", marginBottom: "1rem" }}
    >
      <BootCard.Img
        variant="top"
        src={urlToImage}
        style={{ minHeight: "10rem", maxHeight: "10rem" }}
      />
      <BootCard.Body>
        <BootCard.Title>{title}</BootCard.Title>
      </BootCard.Body>
      <BootCard.Footer>
        <Button variant="primary" onClick={handleAddToReadLater}>
          Read Later
        </Button>
      </BootCard.Footer>
    </BootCard>
  );
};
