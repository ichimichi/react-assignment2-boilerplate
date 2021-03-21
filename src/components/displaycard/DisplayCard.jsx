import React from "react";
import { Card as BootCard } from "react-bootstrap";

export const DisplayCard = ({ title, urlToImage, content, url }) => {
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
        <BootCard.Text>{content}</BootCard.Text>
      </BootCard.Body>
    </BootCard>
  );
};
