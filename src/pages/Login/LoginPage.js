import loginLogo from '../../assets/images/logo/image_logo.png';

import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function LoginPage() {
    useEffect(() => {
        // 구글 OAuth 정보를 초기화 한다.
        // client_id : 구글 OAuth 클라이언트 ID
        // callback : 로그인에 성공하면 JWT를 반환하는데, 이때 사용할 핸들러 지정
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
            callback: handleCredentialResponse
        });

        // 구글 로그인 버튼을 렌더링하고 커스터마이징 한다.
        window.google.accounts.id.renderButton(
            document.getElementById('google-signin-button'),
            { 
                theme: 'outline', 
                size: 'large',
                size: 'medium',
            }
        );
    })

    const handleCredentialResponse = (res) => {
        console.log(res);
    }

    return (
        <Container className='vh-100 d-flex justify-content-center'>
            <Row className='align-items-center'>
                <Col>
                    <Row className='justify-content-center'>
                        <Col className='col-10 col-sm-12 col-md-10 col-lg-7 col-xxl-6'>
                            <img id='login-logo' className='w-100' src={loginLogo} />
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col className='d-flex mt-3 mb-5 justify-content-center'>
                            <div id="google-signin-button" className='justfiy-content-center align-content-center'></div>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </Container>
    )
}

export default LoginPage;