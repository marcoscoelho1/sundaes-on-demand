import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const ToppingOption = ({ name, imagePath, updateItemCount }) => (
  <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
    <img
      style={{ width: "75%" }}
      src={`http://localhost:3030/${imagePath}`}
      alt={`${name} topping`}
    />
    <Form.Group controlId={`${name}-topping-checkbox`}>
      <Form.Check
        type="checkbox"
        onChange={(e) => {
          updateItemCount(name, e.target.checked ? 1 : 0);
        }}
        label={name}
      />
    </Form.Group>
  </Col>
);

export default ToppingOption;
