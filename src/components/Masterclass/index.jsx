import CloseButton from "react-bootstrap/CloseButton";
import Header from "./Helpers/header";
import Meta from "./Helpers/meta";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Presentation from "../Masterclass/computer.png";
import Training from "../Masterclass/training.png";
import Webinar from "../Masterclass/webinar.png";
import Badge from "react-bootstrap/Badge";

function BasicExample() {
  return (
    <Container>
      <div>
        <Meta />
        <Header description={"Welcome to the Masterclass"} />
      </div>
      <div className="stock-container"></div>
      <CardGroup>
        <Card>
          <br />
          <Card.Img variant="top" src={Presentation} className="photo" />
          <Card.Body>
            <Card.Title>
              Maths 1001 <Badge bg="primary">⭐⭐⭐⭐</Badge>{" "}
            </Card.Title>
            <Card.Text>
              This course is for honours students and other serious students of
              mathematics. Topics include: the axioms for the real number
              system, geometry and topology of Euclidean space, limits,
              continuity, differentiability.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated yesterday</small>
          </Card.Footer>
        </Card>
        <Card>
          <br />
          <Card.Img variant="top" src={Training} className="photo" />
          <Card.Body>
            <Card.Title>
              <b>
                CSCI 1001<Badge bg="primary">⭐⭐⭐</Badge>{" "}
              </b>
            </Card.Title>

            <Card.Text>
              In Information Management Systems we will investigate a wide range
              of current issues in information technology, information systems,
              and web-based applications with a particular emphasis on mobile
              and services.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 hours ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <br />
          <Card.Img variant="top" src={Webinar} className="photo" />
          <Card.Body>
            <Card.Title>
              CHEM 2101 <Badge bg="primary">⭐⭐⭐⭐⭐</Badge>{" "}
            </Card.Title>
            <Card.Text>
              In the laboratory portion of the course you will develop inorganic
              synthesis and characterization skills using modern methods, and
              engage in active learning exercises that will support the lecture
              component.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 30 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Container className="center">
        <br />
        <h3 style={{ textAlign: "center" }}>
          {" "}
          CSCI 1120 : Introduction to Pyscology
        </h3>
        <hr />
        <div className="video-responsive">
          <iframe
            align="center"
            width="653"
            height="480"
            src={`https://www.youtube.com/embed/8KkKuTCFvzI`}
            frameBorder="30"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </Container>
    </Container>
  );
}
export default BasicExample;
