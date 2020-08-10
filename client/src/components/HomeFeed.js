import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import Tweet from "./Tweet/index";
import { TweetProvider } from "./Tweet/TweetContext";
import WriteTweet from "./WriteTweet";

const HomeFeed = ({ profileId }) => {
  const [homeFeed, setHomeFeed] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((response) => response.json())
      .then((data) => {
        setHomeFeed(data);
        setStatus("idle");
      });
  }, []);

  if (status === "idle") {
    const { tweetIds, tweetsById } = homeFeed;

    if (profileId) {
      return (
        <div>
          <WriteTweet />
          {tweetIds.map((tweetId) => {
            const { displayName, handle, avatarSrc } = tweetsById[
              tweetId
            ].author;
            if (handle === profileId) {
              const {
                status,
                isLiked,
                isRetweeted,
                numLikes,
                numRetweets,
                timestamp,
              } = tweetsById[tweetId];

              const media = tweetsById[tweetId].media[0];
              let url = media !== undefined;
              if (media) url = media.url;

              return (
                <TweetProvider
                  key={tweetId}
                  tweetId={tweetId}
                  displayName={displayName}
                  handle={handle}
                  avatarSrc={avatarSrc}
                  tweetContent={status}
                  timestamp={timestamp}
                  isLiked={isLiked}
                  isRetweeted={isRetweeted}
                  numLikes={numLikes}
                  numRetweets={numRetweets}
                  tweetMedia={url}
                >
                  <Tweet />
                </TweetProvider>
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div>
          <WriteTweet />
          {tweetIds.map((tweetId) => {
            const { displayName, handle, avatarSrc } = tweetsById[
              tweetId
            ].author;

            const {
              status,
              isLiked,
              isRetweeted,
              numLikes,
              numRetweets,
              timestamp,
            } = tweetsById[tweetId];

            const media = tweetsById[tweetId].media[0];
            let url = media !== undefined;
            if (media) url = media.url;

            return (
              <TweetProvider
                key={tweetId}
                tweetId={tweetId}
                displayName={displayName}
                handle={handle}
                avatarSrc={avatarSrc}
                tweetContent={status}
                timestamp={timestamp}
                isLiked={isLiked}
                isRetweeted={isRetweeted}
                numLikes={numLikes}
                numRetweets={numRetweets}
                tweetMedia={url}
              >
                <Tweet />
              </TweetProvider>
            );
          })}
        </div>
      );
    }
  } else {
    return <CircularProgress />;
  }
};

export default HomeFeed;
