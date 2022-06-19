import { useState } from 'react';
import { RecoilRoot } from "recoil";
import FloatingChat from '../components/FloatingChat';
import Header from "../components/Header";
import OpenChatButton from '../components/OpenChatButton';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [chatOpen, setChatOpen] = useState(false);
  const handleClick = async () => {
    await setChatOpen(!chatOpen);
    console.log(chatOpen)
  }
  return (
    <>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
        <FloatingChat isOpen={chatOpen}/>
        <OpenChatButton isOpen={chatOpen} onClick={handleClick}/>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

