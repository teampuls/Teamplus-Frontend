import React from 'react';
import styled from 'styled-components';
import template1 from '../images/template1.png';
import template2 from '../images/template2.png';
import template3 from '../images/template3.png';

const MiniTemplate = () => {
  return (
    <MiniTemplateContainer>
      <Title>읽어보면 좋아요</Title>
      <TemplateBoxContainer>
        <TemplateBox>
          <Template1>
            <Img1 />
            <Desc1>새내기를 위한 팀플 기본 예절</Desc1>
          </Template1>
          <Template2>
            <Img2 />
            <Desc2>근거있는 자료 찾는 법</Desc2>
          </Template2>
          <Template2>
            <Img3 />
            <Desc2>레포트학 개론</Desc2>
          </Template2>
        </TemplateBox>
      </TemplateBoxContainer>
    </MiniTemplateContainer>
  );
};

const MiniTemplateContainer = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  margin-bottom: 20px;
`;

const TemplateBoxContainer = styled.div`
  overflow: auto;
`;


const TemplateBox = styled.div`
  display: flex;
`;

const Template1 = styled.div`
  position: relative;
  width: 472px;
  height: 268px;
  background: #fce44c;
  border-radius: 12px;
  margin-right: 50px;
  display: grid;
  grid-template-rows: 8fr 2fr;
`;

const Template2 = styled(Template1)`
  background: #487aff;
`;

const Img1 = styled.div`
  background-image: url(${template1});
  background-size: cover;
  width: 211.17px;
  height: 186.15px;
  margin: auto;
`;
const Img2 = styled(Img1)`
  background-image: url(${template2});
`;

const Img3 = styled(Img1)`
  background-image: url(${template3});
`;

const Desc1 = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #707070;
  background: #fff8b7;
  border-radius: 0px 0px 12px 12px;
  /* position: absolute;
  top: 216px; */
  width: 472px;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 24px;
`;

const Desc2 = styled(Desc1)`
  background: #d4e4ff;
`;



export default MiniTemplate;