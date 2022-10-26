import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavorites, getFavorites } from "../redux/movies/favoritesSlice";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

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
  const favorites = useSelector(getFavorites);
  const [isAdded, setIsAdded] = useState<any>(0);

  const isFavorite = (id: number | undefined) => {
    favorites.map((favorite: any) => {
      if (id === favorite.id) {
        return setIsAdded(id);
      } else return null;
    });
  };

  useEffect(() => {
    isFavorite(id);
  }, [isAdded]);

  return (
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
        </Card.Title>
        <Card.Text
          className="text-white"
          style={{ height: "200px", overflow: "auto" }}
        >
          {crawl}
        </Card.Text>
        {isAdded === id ? (
          <Button variant="success">Added to favorites</Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(
                addFavorites({
                  id,
                  poster,
                  title,
                  date,
                  crawl,
                  producer,
                  director,
                })
              );
              isFavorite(id);
            }}
          >
            + Add to favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Movie;
