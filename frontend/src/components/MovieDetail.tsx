import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

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
  producer,
  director,
}: MovieProps) => {
  return (
    <CardGroup style={{ width: "60rem" }} className="mb-4">
      <Card className="bg-dark">
        <Card.Img
          variant="top"
          src={poster}
          height="950px"
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
      </Card>
      <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex flex-column justify-content-between align-items-start mb-4">
            <span className="fs-2">{title}</span>
            <span className="mb-3 text-muted">{date}</span>
            <span className="text-muted">Producer: </span>
            <span className="mb-4">{producer}</span>
            <span className="text-muted">Director:</span>
            <span>{director}</span>
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "25px",
              fontWeight: "600",
              fontStyle: "italic",
            }}
          >
            {crawl}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default MovieDetails;
