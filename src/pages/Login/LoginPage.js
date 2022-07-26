import '../../styles/Login/LoginPage.scss';
import loginLogo from '../../assets/images/logo/image_logo.png';
import GoogleButton from '../../components/Login/GoogleButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function LoginPage() {
    return (
      <Container className='login-wrapper'>
        <Row>
          <Col>
            <img className="login-wrapper__logo" src={loginLogo} />
          </Col>
				</Row>
				<Row>
          <Col>
						<GoogleButton />
          </Col>
        </Row> 
      </Container>
    )
}

export default LoginPage;