import React, { useState, useRef } from "react";
import styled from "styled-components";
import PostElement from "../components/PostElement";
import Pen from "../public/pen.svg";
import Flame from "../public/flame.svg";
import Clock from "../public/clock.svg";
import TriangleDown from "../public/iconmonstr-triangle-filled.svg";
import { postsState } from "../store/state";
import Link from "next/link";
import { useRecoilValue } from 'recoil';

export default function Home() {
  const [currentSearchFilter, setCurrentSearchFilter] = useState("제목");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentSort, setCurrentSort] = useState("popular");
  const posts = useRecoilValue(postsState);
  const PostsRef = useRef();
  PostsRef.current = posts;

  const handleSearch = (e) => {
    setSearchValue(e.currentTarget.value);
  }
  const matchOrNot = (title, forSearch) => {
    const matchResult = title.toLowerCase().includes(forSearch.toLowerCase());
    return matchResult;
  }
  const sortPosts = (origin) => {
    let result = origin.filter(elem => elem);
    result.sort((post1, post2) => {
      return post1.thumbs > post2.thumbs ? -1 : 1;
    });
    return result;
  }
  const searchedPosts = searchValue === "" ? posts : posts.filter(post => matchOrNot(post.title, searchValue));
  const sortedPosts = currentSort === "popular" ? sortPosts(searchedPosts) : searchedPosts;
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
              <MainHeadBlock>
                <BlockHeader>
                  <CurrentPageName>전체</CurrentPageName>
                  <Link href="/write">
                    <IconContainer>
                      <Pen fill="#46CFA7" className="icon" />
                    </IconContainer>
                  </Link>
                </BlockHeader>
                <FilterBox>
                  <FilterElement onClick={() => setCurrentSort("popular")}>
                    <IconBox>
                      <Flame fill="#c9c9c9" className={currentSort === "popular" && "current"}/>
                    </IconBox>
                    <Filter className={currentSort === "popular" && "current"}>Popular</Filter>
                  </FilterElement>
                  <FilterElement onClick={() => setCurrentSort("latest")}>
                    <IconBox>
                      <Clock fill="#c9c9c9" className={currentSort === "latest" && "current"}/>
                    </IconBox>
                    <Filter className={currentSort === "latest" && "current"}>Latest</Filter>
                  </FilterElement>
                  <SearchBox>
                    <SearchFilterSelector>
                      <SearchFilterShowcase onClick={() => setShowDropdown(!showDropdown)}>
                        {currentSearchFilter}
                        <TriangleDown id="dropdown-trigger" />
                      </SearchFilterShowcase>
                      <FilterDropDown
                        className={showDropdown === false && "hidden"}
                      >
                        <DropDownElement onClick={() => setCurrentSearchFilter('제목')}>제목</DropDownElement>
                        <DropDownElement onClick={() => setCurrentSearchFilter('작성자')}>작성자</DropDownElement>
                      </FilterDropDown>
                    </SearchFilterSelector>
                    <SearchBar>
                      <input type="text" value={searchValue} onChange={handleSearch}/>
                    </SearchBar>
                  </SearchBox>
                </FilterBox>
              </MainHeadBlock>
              <MainContentBlock>
                {sortedPosts.map((post) => (
                  <PostElement post={post} />
                ))}
              </MainContentBlock>
            </MainTab>
          </MainGrid>
        </Container>
      </Outlay>
    </>
  );
}

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
  height: 2000px;
  margin-left: 14px;
`;
const MainHeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 728px;
  background: white;
  position: sticky;
  top: 56px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const BlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentPageName = styled.div`
  padding: 18px 16px 17px;
  font-size: 18px;
`;
const FilterBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 728px;
  padding: 0px 16px;
`;

const FilterElement = styled.div`
  display: flex;
  justify-content: center;
  .current {
    fill: #46cfa7;
    color: #46cfa7;
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 322px;
  height: 36px;
  align-items: center;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  box-sizing: border-box;
`;
const SearchFilterSelector = styled.div`
  .hidden {
    display: none;
  }
`;

const SearchFilterShowcase = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 122px;
  height: 36px;
  padding: 5px;
  #dropdown-trigger {
    position: absolute;
    left: 100px;
    transform: rotate(180deg);
    fill: #c9c9c9;
  }
  padding-left: 10px;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    background: #c9c9c9;
    color: #ffffff;
    transition: 0.5s;
    #dropdown-trigger {
      fill: #ffffff;
      transition: 0.5s;
    }
  }
`;

const SearchBar = styled.div`
  input {
    font-size: 14px;
    outline: none;
    border: none;
  }
`;

const FilterDropDown = styled.div`
  position: absolute;
`;
const DropDownElement = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 122px;
  height: 36px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: #8b8b8b;
  padding-left: 10px;
  font-size: 14px;
  :hover {
    cursor: pointer;
    background: #c9c9c9;
    color: #ffffff;
    transition: 0.5s;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
  padding-right: 5px;
`;



const Filter = styled.div`
  font-size: 14px;
  padding: 10px 2px 14px;
  color: #c9c9c9;
`;
const MainContentBlock = styled.div``;
