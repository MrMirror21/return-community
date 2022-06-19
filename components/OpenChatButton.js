import React from "react";
import styled from "styled-components";
import ChatIcon from "../public/chat_bubble.svg";

const OpenChatButton = ({ isOpen, onClick }) => {
  return (
    <>
      <Outlay onClick={() => onClick(!isOpen)}>
        <ChatIcon fill="#ffffff" />
      </Outlay>
    </>
  );
};

export default OpenChatButton;

const Outlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: #46cfa7;
  position: fixed;
  right: 10vw;
  top: 800px;
  cursor: pointer;
`;
