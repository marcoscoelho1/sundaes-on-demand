import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(
    () =>
      axios
        .get(`http://localhost:3030/${optionType}`)
        .then((response) => setItems[response.data])
        .catch((error) => {
          //TODO: handle error response
        }),
    [optionType]
  );

  //TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionsItems = items.map((item) => (
    <ItemComponent name={item.name} imagePath={item.imagePath} />
  ));

  return <Row>{optionsItems}</Row>;
};

export default Options;