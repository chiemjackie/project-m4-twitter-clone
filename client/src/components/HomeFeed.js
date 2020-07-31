import React, { useEffect } from "react";
import Tweet from "./Tweet/index";
import { TweetProvider } from "./Tweet/TweetContext";

function HomeFeed() {
  const [homeFeed, setHomeFeed] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

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

    // console.log(tweetsById);
    // console.log(tweetIds);

    return (
      <div>
        {tweetIds.map((tweetID) => {
          // console.log(tweetsById[tweetID]);
          const { displayName, handle, avatarSrc } = tweetsById[tweetID].author;

          const {
            status,
            isLiked,
            isRetweeted,
            numLikes,
            numRetweets,
            timestamp,
          } = tweetsById[tweetID];

          const media = tweetsById[tweetID].media[0];
          // console.log(media);
          let url = media !== undefined;
          if (media) url = media.url;
          // console.log(url);

          return (
            <TweetProvider
              key={tweetID}
              displayName={displayName}
              handle={handle}
              avatarSrc={avatarSrc}
              tweetContent={status}
              timestamp={timestamp}
              isLiked={isLiked}
              isRetweeted={isRetweeted}
              likes={numLikes}
              retweets={numRetweets}
              tweetMedia={url}
            >
              <Tweet />
            </TweetProvider>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default HomeFeed;
