import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";

const Pump = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mt-3">
      <h2>Water Pump Control</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Pump
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group controlId="pump" as={Row} className="mt-2">
          <Form.Label column sm={2}>
            Run For
          </Form.Label>
          <Col sm={10}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter run time"
              ></Form.Control>
              <InputGroup.Append>
                <InputGroup.Text>seconds</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Group>
        <div className="float-right">
          <Button type="submit" variant="primary" size="sm">
            Start
          </Button>{" "}
          <Button type="button" variant="secondary" size="sm">
            Stop
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Pump;
