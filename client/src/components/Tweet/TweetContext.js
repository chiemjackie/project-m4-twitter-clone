import React, { useState, createContext } from "react";
import moment from "moment";

import avatar from "../../assets/logo.svg";

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [likes, setLikes] = useState(460);
  const [retweets, setRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = moment().format("LT - ll");

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
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isLiked: isLiked,
        isRetweeted: isRetweeted,
        date: date,
        likes,
        retweets,
        handleLike,
        handleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
