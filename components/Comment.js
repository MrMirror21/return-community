import React from "react";
import styled from "styled-components";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <>
      <Container>
        <ContentBox>
          <InfoBox>
            <Writer>{comment?.writer}</Writer>
            <Time>{comment?.time}</Time>
          </InfoBox>
          <TitleBox>
            <Content>{comment?.content}</Content>
          </TitleBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  width: 708px;
  height: 78px;
  border-top: 1px solid #c9c9c9;
  background: #ffffff;
  :hover {
    background: #f1f1f1;
  }
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;
`;

const TitleBox = styled.div`
  display: flex;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  color: #31338;
  font-size: 15px;
  line-height: 20px;
`;
const Content = styled.div`
  max-width: 500px;
  padding-right: 10px;
  margin-left: 20px;
  word-break: break-all;
`;
const Time = styled.div`
  padding: 0px 10px;
  color: #c9c9c9;
`;
const Writer = styled.div`
  padding: 0px 10px;
`;
