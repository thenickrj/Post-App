import axios from "axios";
import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNodes = async () => {
    const data = await axios.get("http://localhost:5000/api/notes");

    console.log(data.json());
  };

  useEffect(() => {
    fetchNodes();
  }, []);

  return (
    <MainScreen title="Welcome Back Nikhil Singh">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      <Accordion>
        <Card>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                title
              </Accordion.Toggle>
            </span>
            <div>
              {/* <Button href={`/note.${note._id}`}>Edit</Button> */}
              <Button variant="danger" className="mx-2">
                Delete
              </Button>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h4>
                <Badge variant="success">Category</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>
                  LOrem LOrem LOremLOrem LOrem LOremLOrem LOremLOremLOrem
                  LOremLOremLOrem LOremLOremLOrem LOremLOremLOrem LOrem
                </p>
                <footer className="blockquote-footer">
                  Someone famout in
                  <cite title="Source title">Sourc Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
