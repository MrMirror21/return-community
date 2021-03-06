import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { currentPageState, postsState } from "../../store/state";
import Triangle from "../../public/iconmonstr-triangle-filled.svg";
import Star from "../../public/star.svg";
import { useRecoilState } from "recoil";
import Comment from "../../components/Comment";

const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  const [posts, setPosts] = useRecoilState(postsState);
  const PostsRef = useRef();
  PostsRef.current = posts;
  const post = PostsRef.current.find((element) => String(element.id) === id);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [writingContent, setWritingContent] = useState("");
  const handleInput = (e) => {
    writingContent.length < 400 && setWritingContent(e.currentTarget.value);
  };
  const handleSubmit = async () => {
    const comment = {
      writer: 'return123',
      content: writingContent,
      time: "1분 전",
    }
    const newComments = [...post.comments].concat(comment);
    const newPost = {
      ...post,
      comments: newComments,
    }
    let newPosts = [...PostsRef.current];
    newPosts[post.id-1] = newPost;
    await setPosts(newPosts);
    alert("작성 완료되었습니다.");
    console.log(post);
    console.log(newPosts);
  }
  return (
    <>
      <Outlay>
        <Container>
          <PageName>Return Community</PageName>
          <MainGrid>
            <TabMenu>
              <TabElement>
              <LabelText>홈</LabelText>
                <MainText id={currentPage === "전체" && "current"} onClick={() => setCurrentPage("전체")}>전체</MainText>
              </TabElement>
              <TabElement>
                <LabelText>정보</LabelText>
                <MainText id={currentPage === "팁" && "current"} onClick={() => setCurrentPage("개발 팁, 노하우")}>개발 팁, 노하우</MainText>
                <MainText>일정</MainText>
              </TabElement>
              <TabElement>
                <LabelText>커뮤니티</LabelText>
                <MainText id={currentPage === "자유" && "current"} onClick={() => setCurrentPage("자유")}>자유</MainText>
                <MainText id={currentPage === "유머" && "current"} onClick={() => setCurrentPage("유머")}>유머</MainText>
              </TabElement>
            </TabMenu>
            <MainTab>
              <PostTitle>{post.title}</PostTitle>
              <InfoBox>
                <Tag>{post.tag}</Tag>
                <Time>{post.time}</Time>
                <Writer>{post.writer}</Writer>
                <CommentCounter>댓글 {post.comments.length}</CommentCounter>
              </InfoBox>
              <MainContent>
                아니 이 동아리만큼 멋진 동아리가 없다니깐요 글쎄
              </MainContent>
              <ButtonContainer>
                <RecommendButton>
                  <Triangle fill="#c9c9c9" />
                  {post.thumbs}
                </RecommendButton>
                <SubscribeButton>
                  <Star fill="#ffffff" />
                </SubscribeButton>
              </ButtonContainer>
              <CommentTab>
                <TabHeader>
                  <TabTitle>댓글</TabTitle>
                  <CommentCounter>총 {post.comment}</CommentCounter>
                </TabHeader>
                <InputArea>
                  <CommentInput
                    value={writingContent}
                    placeholder="댓글을 입력해주세요."
                    onChange={handleInput}
                  />
                  <AreaFooter>
                    <CharCounter>{writingContent.length}/1000</CharCounter>
                    <ApproveButton onClick={handleSubmit}>완료</ApproveButton>
                  </AreaFooter>
                </InputArea>
                <CommentArea>
                {post.comments.map(comment => (<Comment comment={comment}/>))}
                </CommentArea>
              </CommentTab>
            </MainTab>
          </MainGrid>
        </Container>
      </Outlay>
    </>
  );
};

export default Id;

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
  margin-left: 14px;
  background: #ffffff;
`;

const PostTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding: 20px 0px 20px 20px;
`;

const InfoBox = styled.div`
  display: flex;
  height: 20px;
  color: #c9c9c9;
  font-size: 15px;
  line-height: 20px;
  padding-left: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid #c9c9c9;
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


const MainContent = styled.div`
  font-size: 16px;
  width: 728px;
  min-height: 250px;
  padding: 20px 0px 70px 20px;
  border-bottom: 1px solid #c9c9c9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 728px;
  margin: 30px 0px 0px 0px;
`;
const RecommendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 88px;
  height: 43px;
  margin: 0px 10px;
  border-radius: 8px;
  border: 1px solid #c9c9c9;
  color: #8b8b8b;
  background: #ffffff;
  font-size: 16px;
  cursor: pointer;
`;
const SubscribeButton = styled(RecommendButton)`
  background: #46cfa7;
  color: #ffffff;
  border: none;
`;

const CommentTab = styled.div`
  padding-left: 20px;
`;
const TabHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
`;
const TabTitle = styled.div`
  font-size: 25px;
  padding-right: 10px;
`;
const CommentCounter = styled.div`
  color: #c9c9c9;
`;
const InputArea = styled.div`
  width: 728px;
`;
const CommentInput = styled.input`
  width: 668px;
  height: 64px;
  border: 1px solid #c9c9c9;
  overflow: auto;
  outline: none;
  margin-bottom: 20px;
`;
const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const AreaFooter = styled.div`
  width: 678px;
  display: flex;
  justify-content: right;
`;
const CharCounter = styled.div`
  height: 64px;
  padding-top: 10px;
  color: #8b8b8b;
`;
const ApproveButton = styled(SubscribeButton)``;
