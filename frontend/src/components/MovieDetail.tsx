import Card from "react-bootstrap/Card";
import { PersonFill } from "react-bootstrap-icons";

type MovieProps = {
  poster?: string;
  title?: string;
  crawl?: string;
  date?: string;
  id?: number;
  producer?: string;
  director?: string;
  characters?: [];
};

const MovieDetails = ({
  poster,
  title,
  crawl,
  date,
  id,
  producer,
  director,
}: MovieProps) => {
  return (
    <Card className="bg-dark mb-2">
      <Card.Img
        variant="top"
        src={poster}
        height="600px"
        style={{ objectFit: "cover", cursor: "pointer" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex flex-column justify-content-between align-items-start mb-4 text-white">
          <span className="fs-2">{title}</span>
          <span className="text-muted">{date}</span>
          <span>Producer:</span>
          <span className="text-muted">{producer}</span>
          <span>Director:</span>
          <span className="text-muted">{director}</span>
        </Card.Title>
        <Card.Text
          className="text-white"
          style={{ height: "200px", overflow: "auto" }}
        >
          {crawl}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
