import React, { useState } from "react";
import styled from "styled-components";

const write = () => {
  const [selectedChannel, setSelectedChannel] = useState("자유");
  return (
    <>
      <Outlay>
        <Container>
          <PageName>Return Community</PageName>
          <MainGrid>
            <TabMenu>
              <TabElement>
                <LabelText>홈</LabelText>
                <MainText id="current">전체</MainText>
              </TabElement>
              <TabElement>
                <LabelText>정보</LabelText>
                <MainText>개발 팁, 노하우</MainText>
                <MainText>일정</MainText>
              </TabElement>
              <TabElement>
                <LabelText>커뮤니티</LabelText>
                <MainText>자유</MainText>
                <MainText>유머</MainText>
              </TabElement>
            </TabMenu>
            <MainTab>
              <PageTitle>Post Write</PageTitle>
              <ChannelSelector>
                <SelectElement>
                  <Checker id="selected" />
                  <ChannelName>자유</ChannelName>
                </SelectElement>
                <SelectElement>
                  <Checker />
                  <ChannelName>유머</ChannelName>
                </SelectElement>
                <SelectElement>
                  <Checker />
                  <ChannelName>개발 팁, 노하우</ChannelName>
                </SelectElement>
              </ChannelSelector>
              <TitleInput placeholder="제목"></TitleInput>
              <ContentInput placeholder="어떤 내용을 공유하고 싶으신가요?"></ContentInput>
              <ButtonContainer>
                <CancelButton>취소</CancelButton>
                <ApproveButton>완료</ApproveButton>
              </ButtonContainer>
            </MainTab>
          </MainGrid>
        </Container>
      </Outlay>
    </>
  );
};

export default write;

const Outlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #f3f3f3;
  position: sticky;
  top: 0px;
`;
const Container = styled.div`
  position: absolute;
  top: -100px;
  width: 1044px;
  margin: auto;
`;
const PageName = styled.div`
  padding-left: 50px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
`;
const MainGrid = styled.div`
  display: flex;
  width: 1044px;
`;
const TabMenu = styled.div`
  width: 300px;
  height: 515px;
  position: sticky;
  top: 56px;
  background: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const TabElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 9px 16px 8px;
  border-bottom: 1px solid #c9c9c9;
  #current {
    background: #f2f2f2;
    color: #46cfa7;
  }
`;
const LabelText = styled.div`
  width: 268px;
  font-size: 12px;
  color: #7b858e;
  padding-bottom: 8px;
`;
const MainText = styled.div`
  width: 268px;
  padding: 8px 12px 7px;
  font-size: 14px;
  border-radius: 5px;
  :hover {
    background: #f2f2f2;
  }
`;

const MainTab = styled.div`
  width: 728px;
  height: 700px;
  margin-left: 14px;
  background: #ffffff;
`;

const PageTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding: 20px;
`;
const ChannelSelector = styled.div`
  display: flex;
  padding: 0px 20px 20px 20px;
`;

const SelectElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  #selected {
    background: #46cfa7;
  }
`;
const Checker = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100px;
  border: 1px solid #46cfa7;
  margin-right: 5px;
`;
const ChannelName = styled.div`
  font-size: 15px;
`;

const TitleInput = styled.input`
  width: 688px;
  height: 40px;
  font-size: 16px;
  border: 1px solid #c9c9c9;
  margin-bottom: 20px;
  padding: 10px 16px 9px;
  margin-left: 20px;
`;
const ContentInput = styled.textarea`
  width: 688px;
  height: 447px;
  padding: 16px 25px 0px;
  font-size: 16px;
  margin-left: 20px;

  border: 1px solid #c9c9c9;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 688px;
  justify-content: space-between;
  margin-left: 20px;
`;
const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 154px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #c9c9c9;
  color: #8b8b8b;
  background: #ffffff;
  font-size: 16px;
`;
const ApproveButton = styled(CancelButton)`
  background: #46cfa7;
  color: #ffffff;
  border: none;
`;
