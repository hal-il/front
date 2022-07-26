import "styles/Register/RegisterPage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "assets/images/logo.png";
import { useState } from "react";

// 닉네임 정규식
const regexp = /^[가-힣|A-Z|a-z|0-9|]{2,15}$/;

function RegisterPage() {
  const [nickNameInput, setNickNameInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNickNameOK, setIsNickNameOK] = useState(true);
  const [activeButton, setActiveButton] = useState({
    disabled: true,
  });

  // 닉네임 입력 유효성 검사
  function checkNicknameInput(newNickName) {
    const regTestResult = regexp.test(newNickName);
    if (regTestResult) {
      setNickNameInput(newNickName);
      setActiveButton({ disabled: false });
    } else {
      setActiveButton({ disabled: true });
    }
  }

  // 닉네임 버튼 핸들러
  function submitNickname(e) {
    e.preventDefault();
    if (!isSubmitted) {
      setIsSubmitted(true);
    }
  }

  return (
    <Container id="row-wrapper">
      <Row id="cols-wrapper" className="justify-content-center">
        <Col sm="12" md="12" lg="6" style={{ textAlign: "center" }}>
          <img src={logo} width="450" height="400" />
        </Col>
        <Col
          sm="10"
          md="6"
          lg="6"
          className="d-lg-flex flex-column justify-content-center"
        >
          <h1 id="nickname-title">닉네임 설정</h1>
          <div id="nickname-desc" style={{ color: "#888888" }}>
            2~15자의 숫자, 영어 대소문자, 한글 포함 가능, 특수문자 제외
          </div>
          <Form>
            <InputGroup className="mt-2 mb-2">
              <Form.Control
                aria-describedby="nickname-input"
                onChange={(e) => checkNicknameInput(e.target.value)}
              />
              <Button
                id="nickname-submit"
                type="submit"
                onClick={submitNickname}
                {...activeButton}
              >
                시작하기
              </Button>
            </InputGroup>
          </Form>
          {!isSubmitted && !isNickNameOK && (
            <div id="nickname-warning">* 사용 중인 닉네임입니다.</div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;