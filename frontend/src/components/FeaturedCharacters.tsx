import { PersonFill } from "react-bootstrap-icons";
import { Card, CardGroup } from "react-bootstrap";

type FeatureCharactersProps = {
  name: string;
};

export const FeaturedCharacters = ({ name }: FeatureCharactersProps) => {
  return (
    <CardGroup>
      <Card>
        <Card.Text className="d-flex align-items-center">
          <PersonFill />
          {name}
        </Card.Text>
      </Card>
    </CardGroup>
  );
};
