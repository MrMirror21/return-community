import React from "react";
import styled from "styled-components";
import ChatIcon from "../public/chat_bubble.svg";
import CloseIcon from '../public/close.svg';

const OpenChatButton = ({ isOpen, onClick }) => {
  return (
    <>
      <Outlay onClick={() => onClick(!isOpen)}>
        <ChatIcon fill="#ffffff" className={isOpen && "hidden"}/>
        <CloseIcon fill="#ffffff" className={!isOpen && "hidden"} />
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
  .hidden {
    display: none;
    transition: all 0.25s ease-in-out;
  }
`;
