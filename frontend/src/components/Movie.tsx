import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavorites } from "../redux/movies/favoritesSlice";
import { Button } from "react-bootstrap";

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

const Movie = ({
  poster,
  title,
  crawl,
  date,
  id,
  producer,
  director,
}: MovieProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    // <>

    <Card className="bg-dark mb-2">
      <Card.Img
        variant="top"
        src={poster}
        height="600px"
        style={{ objectFit: "cover", cursor: "pointer" }}
        onClick={() => {
          navigate(`/${id}`);
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex flex-column justify-content-between align-items-start mb-4 text-white">
          <span className="fs-2">{title}</span>
          <span className="text-muted">{date}</span>
          <span className="text-muted">{producer}</span>
          <span className="text-muted">{director}</span>
        </Card.Title>
        <Card.Text
          className="text-white"
          style={{ height: "200px", overflow: "auto" }}
        >
          {crawl}
        </Card.Text>
        <Button>Add to favorites</Button>
      </Card.Body>
    </Card>

    /* <div className="movie__card">
        <img
          src={poster}
          alt="Movie Poster"
          onClick={() => {
            navigate(`/${id}`);
          }}
        />
        <div className="movie__description">
          <p>{title}</p>
          <span>{date}</span>
          <p> {crawl}</p>
          {id ? (
            <button
              onClick={() =>
                dispatch(addFavorites({ poster, title, date, crawl }))
              }
            >
              Add to favorites
            </button>
          ) : null}
          <div
            className={producer ? "movie__details" : "movie__details__hidden"}
          >
            <>
              <span>Producer:</span>
              <p>{producer}</p>
              <span>Director:</span>
              <p>{director}</p>
            </>
          </div>
        </div>
      </div>
    </> */
  );
};

export default Movie;
