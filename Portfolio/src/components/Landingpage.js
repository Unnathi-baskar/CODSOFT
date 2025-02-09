import { Container, Row, Col, Button } from "react-bootstrap";

export const Landingpage = () => {
  return (
    <section className="banner" id="home" style={{backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={7}>
            <div className="content text-center">
              <h1>Hi! I'm Unnathi</h1>
              <p>
              I'm a passionate Computer Science and Engineering student with a strong enthusiasm for problem-solving, coding, and building innovative solutions. I enjoy diving into the intricacies of technology and am constantly exploring ways to improve my skills. Whether it’s working on personal projects, collaborating with a team, or learning new tools, I’m driven by a curiosity to understand how technology shapes our world and a desire to contribute to that change.
              </p>
              <div className="mt-4">
                <Button 
                  href="path_to_your_resume.pdf"  
                  style={{ 
                    backgroundColor: "#753C3D", 
                    color: "#fff", 
                    padding: "2px 20px", 
                    borderRadius: "5px", 
                    marginRight: "20px",
                    border: "none",
                    fontWeight: "bold"
                  }}
                >
                  DOWNLOAD RESUME
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
};
