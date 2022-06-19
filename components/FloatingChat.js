import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Window,
} from "stream-chat-react";
import styled from "styled-components";
import "stream-chat-react/dist/css/index.css";

const client = StreamChat.getInstance(process.env.chatApiKey);

const FloatingChat = ({ isOpen }) => {
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    (async () => {
      await client.setGuestUser({
        id: String(Math.floor(Math.random() * Date.now())),
        name: "Anonymous",
      });
      const channel = await client.channel("public-chat", "random-chat", {
        name: "return-community",
      });
      await channel.watch();
      setChannel(channel);
    })();
    return () => {
      client.disconnectUser();
    };
  }, []);
  if (!channel) {
    return null;
  }

  return (
    <>
      <Container isOpen={isOpen}>
        <Chat client={client}>
          <Channel isOpen={isOpen} channel={channel} theme="messaging light">
            <Window isOpen={isOpen} id={isOpen ? "" : "hidden"}>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
          </Channel>
        </Chat>
      </Container>
    </>
  );
};

export default FloatingChat;

const Container = styled.div`
  #hidden {
    visibility: hidden;
  }
  width: 400px;
  height: 530px;
  position: fixed;
  top: 260px;
  right: 11vw;
  display: ${(props) => props.isOpen === false && "none"};
  border-radius: 10px;
  .str-chat-channel {
    max-height: 530px;
    max-width: 400px;
  }
  .str-chat__container {
    max-height: 530px;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .str-chat-channel.messaging .str-chat__main-panel {
    padding: 0;
    border-radius: 10px;
  }
  .messaging.str-chat .str-chat__list {
    padding: 10px;
  }
  .str-chat__input-flat {
    padding: 10px;
  }
`;
