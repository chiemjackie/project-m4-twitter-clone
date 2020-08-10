import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import Feed from "../Feed";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { COLORS } from "../../constants";

const { primary } = COLORS;

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
    } = profileUser.profile;

    const date = moment(joined).format("MMMM YYYY");

    return (
      <ProfilePageWrapper>
        <Header>
          <ProfileBanner src={bannerSrc} alt="banner" />
        </Header>
        <ProfileContent>
          <Avatar src={avatarSrc} alt="avatar" />
          {isBeingFollowedByYou && <IsBeingFollowed>Following</IsBeingFollowed>}
          <Name>{displayName}</Name>
          <Handle>@{handle}</Handle>
          {isFollowingYou && <Follows>Follows you</Follows>}
          <Biography>{bio}</Biography>
          <DateAndLocationWrapper>
            <FiMapPin></FiMapPin>
            <Location>{location}</Location>
            <FiCalendar></FiCalendar>
            <JoinedDate>Joined {date}</JoinedDate>
          </DateAndLocationWrapper>
          <FollowerFollowingWrapper>
            <Following>
              <Number>{numFollowers}</Number> Following
            </Following>
            <Followers>
              <Number>{numFollowing}</Number> Followers
            </Followers>
          </FollowerFollowingWrapper>
        </ProfileContent>
        <Feed profileId={handle} />
      </ProfilePageWrapper>
    );
  } else {
    return <CircularProgress />;
  }
};

const ProfilePageWrapper = styled.div`
  max-width: 602px;
`;

const ProfileBanner = styled.img`
  max-width: 100%;
  display: block;
`;

const Avatar = styled.img`
  max-height: 100px;
  border-radius: 100%;
  margin: -65px 0 12px;
  border: 2px solid white;
`;

const Header = styled.header``;

const ProfileContent = styled.div`
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  padding: 15px;
`;

const IsBeingFollowed = styled.button`
  display: flex;
  margin-left: 85%;
  margin-top: -55px;
  background-color: ${primary};
  color: white;
  font-weight: bold;
  border: none;
  padding: 8px 15px;
  border-radius: 10px;
`;

const Name = styled.h1`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Handle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  color: grey;
  display: inline;
  margin: 5px 0;
`;

const Follows = styled.span`
  margin-left: 5px;
  background-color: lightgrey;
  font-size: 12px;
  padding: 0 4px 2px;
  color: grey;
  border-radius: 5px;
`;

const Biography = styled.p`
  margin: 10px 0;
`;

const DateAndLocationWrapper = styled.div`
  color: grey;
  display: flex;
`;

const Location = styled.span`
  margin: 0 20px 0 5px;
`;

const JoinedDate = styled.span`
  margin-left: 5px;
`;

const FollowerFollowingWrapper = styled.div`
  margin: 10px auto;
`;

const Following = styled.span`
  margin: 0 20px 0 5px;
  color: grey;
`;

const Followers = styled.span`
  margin-left: 5px;
  color: grey;
`;

const Number = styled.span`
  font-weight: bold;
  color: black;
`;

export default Profile;
