import "./MainContainer.module.css";
import Pump from "../pump/Pump";
import { Container, Row, Col } from "react-bootstrap";

const MainContainer = () => (
  <Container>
    <Row>
      <Col sm={8}>
        <Pump />
      </Col>
    </Row>
  </Container>
);

export default MainContainer;
