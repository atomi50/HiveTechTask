import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/movies/favoritesSlice";
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

const FavoriteMovies = ({ poster, title, crawl, date, id }: MovieProps) => {
  const dispatch = useDispatch();

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
        </Card.Title>
        <Card.Text
          className="text-white"
          style={{ height: "200px", overflow: "auto" }}
        >
          {crawl}
        </Card.Text>
        <Button
          onClick={() => {
            dispatch(removeFromFavorites(id));
          }}
        >
          Remove from favorites
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FavoriteMovies;
