import "styles/Register/RegisterPage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RegisterPage() {
  return (
    <Container id="row-wrapper">
      <Row id="cols-wrapper">
          <Col>로고</Col>
          <Col>
            <h1>닉네임 설정</h1>
            <div>
              2~15자의 숫자, 영어 대소문자, 한글 포함 가능, 특수문자 제외
            </div>
            <Form>
              <Form.Group className="input-append">
                <Form.Control />
                <Button id="nickname-submit">시작하기</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
    </Container>
  );
}

export default RegisterPage;
