import React from "react";
import styled from "styled-components";
import khu from './khuBg.jpg';

const Header = () => {
  return (
    <>
      <Container>
        <HeaderBar>
          <Logo>Return</Logo>
          <RightToolBox>
            <UserProfile />
          </RightToolBox>
        </HeaderBar>
        <Banner src={khu} alt="Background"/>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 56px;
  background: linear-gradient(to right, #33ccff, #00ffcc);
  position: fixed;
  top: 0px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  line-height: 56px;
  font-size: 25px;
  color: white;
  font-weight: 700;
`;

const RightToolBox = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`;

const UserProfile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background: #f1f1f1;
`;

const Banner = styled.img`
  top: 56px;
  width: 100vw;
  height: 200px;
  border: 1px solid #313338;
  background: #8b8b8b;
`;
