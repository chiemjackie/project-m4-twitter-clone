import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { TweetProvider } from "./TweetContext";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./Header";
import ActionBar from "./ActionBar";
import Stats from "./Stats";

function TweetDetails() {
  const { tweetId } = useParams();
  const [currentTweet, setCurrentTweet] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentTweet(data.tweet);
        setStatus("idle");
      });
  }, []);

  if (status === "idle") {
    const {
      status,
      date,
      isLiked,
      isRetweeted,
      numLikes,
      numRetweets,
    } = currentTweet;

    const { displayName, handle, avatarSrc } = currentTweet.author;

    const media = currentTweet.media[0];
    let url = media !== undefined;
    if (media) url = media.url;

    return (
      <Wrapper>
        <TweetProvider
          key={tweetId}
          tweetId={tweetId}
          displayName={displayName}
          handle={handle}
          avatarSrc={avatarSrc}
          tweetContent={status}
          timestamp={date}
          isLiked={isLiked}
          isRetweeted={isRetweeted}
          numLikes={numLikes}
          numRetweets={numRetweets}
        >
          <Header
            displayName={displayName}
            username={handle}
            avatarSrc={avatarSrc}
          />
          <TweetContents>{status}</TweetContents>
          {media && (
            <TweetMediaContainer>
              <TweetMedia src={url} />
            </TweetMediaContainer>
          )}
          <Timestamp>{date}</Timestamp>
          <Divider />
          <Stats />
          <Divider />
          <ActionBar />
          <Divider />
        </TweetProvider>
      </Wrapper>
    );
  } else {
    return <CircularProgress />;
  }
}

const Wrapper = styled.span`
  display: block;
  background: white;
  width: 600px;
  padding: 16px;
  text-align: left;
  border: none;
`;

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

export default TweetDetails;
