import { PersonFill } from "react-bootstrap-icons";
import { Card, CardGroup } from "react-bootstrap";

type FeatureCharactersProps = {
  name: string;
};

export const FeaturedCharacters = ({ name }: FeatureCharactersProps) => {
  return (
    // <div className="d-flex align-items-center justify-center">
    //   <PersonFill />
    //   <Card>
    //     <Card.Text>{name}</Card.Text>
    //   </Card>
    // </div>
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
