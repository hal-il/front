import "styles/Register/RegisterPage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function RegisterPage() {
  return (
    <Container id="row-wrapper">
      <Row id="cols-wrapper">
        <Col>로고</Col>
        <Col>
          <h1 id="nickname-title">닉네임 설정</h1>
          <div id="nickname-desc" style={{ color: "#888888" }}>
            2~15자의 숫자, 영어 대소문자, 한글 포함 가능, 특수문자 제외
          </div>
          <Form>
            <InputGroup className="mt-2 mb-2">
              <Form.Control
                aria-describedby="nickname-input"
              />
              <Button id="nickname-submit">
                시작하기
              </Button>
            </InputGroup>
          </Form>
          <div id="nickname-warning">* 사용 중인 닉네임입니다.</div>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
