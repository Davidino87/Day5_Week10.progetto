import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const FooterMeteo = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="mb-2 text-center">
            <Facebook className="text-secondary me-3" />
            <Instagram className="text-secondary me-3" />
            <Twitter className="text-secondary me-3" />
            <Youtube className="text-secondary" />
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 text-secondary text-center">© {new Date().getFullYear()} ILMeteo</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterMeteo;
