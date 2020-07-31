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
  isLiked,
  isRetweeted,
  likes,
  retweets,
  tweetMedia,
}) => {
  const date = moment(timestamp).format("LT - ll");

  const handleLike = () => {
    isLiked ? likes-- : likes++;
    isLiked = !isLiked;
    console.log(likes);
    console.log(isLiked);
  };

  const handleRetweet = () => {
    isRetweeted ? retweets-- : retweets++;
    isRetweeted = !isRetweeted;
    console.log(retweets);
    console.log(isRetweeted);
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
