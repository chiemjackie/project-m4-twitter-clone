import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import HomeFeed from "../HomeFeed";

const Profile = () => {
  const { profileId } = useParams();
  const [profileUser, setProfileUser] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((response) => response.json())
      .then((data) => {
        setProfileUser(data);
        setStatus("idle");
      });
  }, []);

  if (status === "idle") {
    const {
      avatarSrc,
      bannerSrc,
      bio,
      displayName,
      handle,
      isBeingFollowedByYou,
      isFollowingYou,
      joined,
      location,
      numFollowers,
      numFollowing,
      // numLikes,
    } = profileUser.profile;

    return (
      <div>
        <img src={bannerSrc} alt="banner" />
        <img src={avatarSrc} alt="avatar" />
        <div>{isBeingFollowedByYou}</div>
        <div>{displayName}</div>
        <div>{handle}</div>
        <div>{isFollowingYou}</div>
        <div>{bio}</div>
        <div>{location}</div>
        <div>{joined}</div>
        <div>{numFollowers}</div>
        <div>{numFollowing}</div>
        <HomeFeed from="profile" profileId={handle} />
      </div>
    );
  } else {
    return <CircularProgress />;
  }
};

export default Profile;

// GET /api/me/profile
// GET /api/:handle/profile
// GET /api/:handle/following
