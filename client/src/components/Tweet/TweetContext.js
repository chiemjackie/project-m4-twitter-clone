import React, { useState, createContext } from "react";
import moment from "moment";

export const TweetContext = createContext(null);

export const TweetProvider = ({
  children,
  displayName,
  handle,
  avatarSrc,
  tweetContent,
  timestamp,
  numLikes,
  numRetweets,
  tweetMedia,
}) => {
  const date = moment(timestamp).format("LT - ll");

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(numLikes);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweets, setRetweets] = useState(numRetweets);

  const handleLike = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLiked(!isLiked);
  };

  const handleRetweet = () => {
    isRetweeted ? setRetweets(retweets - 1) : setRetweets(retweets + 1);
    setIsRetweeted(!isRetweeted);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: tweetContent,
        displayName: displayName,
        username: handle,
        avatarSrc: avatarSrc,
        isLiked: isLiked,
        isRetweeted: isRetweeted,
        date: date,
        likes: likes,
        retweets: retweets,
        handleLike,
        handleRetweet,
        tweetMedia,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
