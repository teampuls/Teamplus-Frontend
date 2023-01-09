import React from 'react';
import styled from 'styled-components';
import prof from '../images/template1.png';
import { FiLink2 } from 'react-icons/fi';

const TeamMateInfo = () => {
  return (
    <TeamMateInfoContainer>
      <Title>팀메이트 정보</Title>
      <TeamMateBox>
        {/* 나 */}
        <TeamMate>
          <Profile />
          <TextInfo>
            <Name>정팀쁠</Name>
            <School>홍익대학교 시각디자인과</School>
          </TextInfo>
          <Me>(나)</Me>
        </TeamMate>
        {/* 다른 사람 */}
        <TeamMate>
          <Profile />
          <TextInfo>
            <Name>정팀쁠</Name>
            <School>홍익대학교 시각디자인과</School>
          </TextInfo>
        </TeamMate>
      </TeamMateBox>
      <LinkBtn>
        <FiLink2 style={{ marginRight: '8px', fontSize: '16px' }} />
        팀원 초대 링크 복사
      </LinkBtn>
    </TeamMateInfoContainer>
  );
};

const TeamMateInfoContainer = styled.div`
  width: 320px;
  min-height: 357px;
  background: #ffffff;
  border: 2px solid #dedede;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  left: 19px;
  top: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
const TeamMateBox = styled.div`
  width: 316px;
  height: 256px;
  position: absolute;
  top: 53px;
  overflow: auto;
`;
const TeamMate = styled.div`
  width: 316px;
  height: 64px;
  padding: 12px 18px;
  display: flex;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background: #fce44c;
  background-image: url(${prof}); //사용자별 프로필 이미지 들어갈 예정
  background-size: cover;
`;
const TextInfo = styled.div`
  height: 43px;
  width: 170px;
  padding: 0px 16px;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
const School = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #a7a7a7;
  margin-top: 4px;
`;

const Me = styled.div`
  position: absolute;
  width: 22px;
  height: 14px;
  right: 20px;
  top: 25px;
  font-size: 14px;
  color: #487aff;
`;

const LinkBtn = styled.div`
  position: absolute;
  width: 120px;
  height: 20px;
  left: 20px;
  top: 317px;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #487aff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TeamMateInfo;