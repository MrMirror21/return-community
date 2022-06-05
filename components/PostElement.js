import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Triangle from "../public/iconmonstr-triangle-filled.svg";

const PostElement = ({ post }) => {
  const comment = post.comment ? "[" + post.comment + "]" : "";
  return (
    <>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <Container>
          <ThumbsIndicator>
            <Triangle fill="#8b8b8b" />
            <Thumbs>{post.thumbs}</Thumbs>
          </ThumbsIndicator>
          <ContentBox>
            <TitleBox>
              <Title>{post.title}</Title>
              <Comments>{comment}</Comments>
            </TitleBox>
            <InfoBox>
              <Tag>{post.tag}</Tag>
              <Time>{post.time}</Time>
              <Writer>{post.writer}</Writer>
            </InfoBox>
          </ContentBox>
        </Container>
      </Link>
    </>
  );
};

export default PostElement;

const Container = styled.div`
  display: flex;
  width: 728px;
  height: 78px;
  border-bottom: 1px solid #c9c9c9;
  background: #ffffff;
  :hover {
    background: #f1f1f1;
  }
`;
const ThumbsIndicator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 62px;
  padding-top: 10px;
`;

const Thumbs = styled.div`
  font-size: 14px;
  line-height: 17px;
  margin-top: 5px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 62px;
  margin: auto 0;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 15px;
  padding-bottom: 5px;
`;

const Comments = styled.div`
  display: flex;
  line-height: 15px;
  color: #46cfa7;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  color: #c9c9c9;
  font-size: 15px;
  line-height: 20px;
`;
const Tag = styled.div`
  padding-right: 10px;
  border-right: 1px solid #c9c9c9;
`;
const Time = styled.div`
  padding: 0px 10px;
  border-right: 1px solid #c9c9c9;
`;
const Writer = styled.div`
  padding: 0px 10px;
`;
