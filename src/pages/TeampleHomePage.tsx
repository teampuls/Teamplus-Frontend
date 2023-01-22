import React from 'react';
import styled from 'styled-components';
import SummaryTeample from 'components/teampleHomePage/SummaryTeample';
import FileInfo from 'components/teampleHomePage/FileInfo';
import ToDoBox from 'components/toDo/toDoBox';
import PlanManager from 'components/teampleHomePage/planManager';
import Layout from 'components/layouts/layout';

const ContentBox = styled.div`
  display: flex;
`;

const MainContentBox = styled.div`
  display: flex;
`;

const AllBox = styled.div`
  display: flex;
  position: relative;

  .text {
    margin-top: 48px;
    color: #383838;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-left: 54px;
  }
`;

const TeampleHomePage = () => {
  return (
    <Layout>
      <AllBox>
        <div>
          <ContentBox>
            <SummaryTeample />
            <FileInfo />
          </ContentBox>
          <div className="text">할 일</div>
          <MainContentBox>
            <ToDoBox pathname={window.location.pathname} />
          </MainContentBox>
        </div>
        <PlanManager />
      </AllBox>
    </Layout>
  );
};

export default TeampleHomePage;
