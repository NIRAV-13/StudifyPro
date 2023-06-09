import { Container, Card, Col, Row } from "react-bootstrap";

// Header for the Masterclass page
const Header = ({ head, description }) => {
  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{head}</h1>
        <p className="lead text-capitalize">{description}</p>
      </div>
    </Container>
  );
};

export default Header;
