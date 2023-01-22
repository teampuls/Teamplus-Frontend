import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KakaoBtn from 'components/loginPage/KakaoBtn';
import Logo from '../components/images/Logo_login.png';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import {
  idTokenState,
  kakaoAccessTokenState,
  kakaoRefreshTokenState,
  jwtAccessTokenState,
  jwtRefreshTokenState,
} from 'state';
import axios from 'axios';

const LoginPage = () => {
  // 초대받았다면 팀 이름 출력
  const [teamname, setTeamname] = useState('경영전략');
  const [invited, setInvited] = useState(false);
  const navigate = useNavigate();
  const [idToken, setIdToken] = useRecoilState(idTokenState);
  const [kakaoAccessToken, setKakaoAccessToken] = useRecoilState(
    kakaoAccessTokenState,
  );
  const [kakaoRefreshToken, setKakaoRefreshToken] = useRecoilState(
    kakaoRefreshTokenState,
  );
  const [, setjwtAccessToken] = useRecoilState(jwtAccessTokenState);
  const [, setjwtRefreshToken] = useRecoilState(jwtRefreshTokenState);

  const REST_API_KEY = '7ab7f35aec83a214679a3fdcf64a2458';
  const REDIRECT_URI = 'http://localhost:3000/login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    // 1. 인가 코드 받기
    window.location.href = KAKAO_AUTH_URL;
  };

  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    // 2. 카카오에서 토큰 받아오기
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIdToken(data.id_token);
        setKakaoAccessToken(data.access_token);
        setKakaoRefreshToken(data.refresh_token);
        postAuthLoginAPI(); //받아오기 성공하면 로그인 실행
      });
  };

  const postAuthLoginAPI = async () => {
    // 3. 백한테 카카오 토큰 넘겨주기 (회원가입 or 로그인 백에서 알려줘야함)
    await axios({
      url: `/api/auth/login`,
      baseURL: 'https://www.teampple.site',
      method: 'post',
      data: {
        idToken: idToken,
        oauthAccessToken: kakaoAccessToken,
        oauthRefreshToken: kakaoRefreshToken,
      },
    })
      .then((response) => {
        console.log(response);
        setjwtAccessToken(response.data.jwtAccessToken);
        setjwtRefreshToken(response.data.jwtRefreshToken);
        localStorage.setItem('jwt_accessToken', response.data.jwtAccessToken);
        localStorage.setItem('jwt_refreshToken', response.data.jwtRefreshToken);
        navigate('/home');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return (
    <LoginPageContainer>
      <LogoImg src={Logo}></LogoImg>
      <Desc>서로가 모여 플러스가 되는 팀쁠</Desc>
      {invited ? (
        <TeamNameContainer>
          <TeamName>{teamname} </TeamName>
          팀메이트로 참여하기
        </TeamNameContainer>
      ) : (
        <></>
      )}
      <KakaoButton onClick={handleLogin}>
        <a href={KAKAO_AUTH_URL}>
          <KakaoBtn />
        </a>
      </KakaoButton>
      <SubDesc>
        계정을 생성하면 서비스이용약관과 개인정보처리방침에 동의하게 됩니다.
      </SubDesc>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const LogoImg = styled.img`
  width: 237.26px;
  height: 67px;
  position: absolute;
  top: 256px;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
  position: absolute;
  top: 339px;
`;

const KakaoButton = styled.button`
  position: absolute;
  top: 494px;
`;

const SubDesc = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #c0c0c0;
  position: absolute;
  top: 568px;
`;

const TeamNameContainer = styled.div`
  position: absolute;
  top: 400px;
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;
`;

const TeamName = styled.span`
  color: #487aff;
  font-weight: 700;
`;

export default LoginPage;
