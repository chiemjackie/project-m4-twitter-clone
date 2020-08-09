import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = ({ displayName, username, avatarSrc }) => {
  return (
    <Wrapper>
      <AvatarWrapper to={`/profile/${username}`}>
        <Avatar src={avatarSrc} />
      </AvatarWrapper>
      <Name>
        <DisplayName to={`/profile/${username}`}>{displayName}</DisplayName>
        <Username to={`/profile/${username}`}>@{username}</Username>
      </Name>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
`;

const AvatarWrapper = styled(NavLink)``;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const DisplayName = styled(NavLink)`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled(NavLink)`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

export default Header;
