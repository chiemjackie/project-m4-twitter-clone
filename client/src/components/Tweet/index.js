import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { TweetContext } from "./TweetContext";
import Stats from "./Stats";

const Tweet = () => {
  const {
    tweetId,
    displayName,
    username,
    avatarSrc,
    tweetContents,
    date,
    tweetMedia,
  } = useContext(TweetContext);

  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContentsLink to={`/tweet/${tweetId}`}>
        <TweetContents>{tweetContents}</TweetContents>
        {tweetMedia && (
          <TweetMediaContainer>
            <TweetMedia src={tweetMedia} />
          </TweetMediaContainer>
        )}
        <Timestamp>{date}</Timestamp>
        <Divider />
        <Stats />
        <Divider />
      </TweetContentsLink>
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  background: white;
  width: 600px;
  padding: 16px;
  text-align: left;
  border: none;
`;

const TweetContentsLink = styled(Link)``;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const TweetMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const TweetMedia = styled.img`
  max-width: 100%;
  border-radius: 20px;
`;

export default Tweet;
