import React from "react";
import { NavLink } from "react-router-dom";

import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { COLORS } from "../constants";
import { ReactComponent as Logo } from "../assets/logo.svg";
import styled from "styled-components";

const { primary } = COLORS;

function Sidebar() {
  return (
    <NavBar>
      <li>
        <StyledLogo />
      </li>
      <NavItem>
        <FiHome className="icon" />
        <StyledLink exact to="/" activeClassName="active">
          Home
        </StyledLink>
      </NavItem>
      <NavItem>
        <FiUser className="icon" />
        <StyledLink exact to="/profile/:profileID" activeClassName="active">
          Profile
        </StyledLink>
      </NavItem>
      <NavItem>
        <FiBell className="icon" />
        <StyledLink exact to="/notifications" activeClassName="active">
          Notifications
        </StyledLink>
      </NavItem>
      <NavItem>
        <FiBookmark className="icon" />
        <StyledLink exact to="/bookmarks" activeClassName="active">
          Bookmarks
        </StyledLink>
      </NavItem>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 40vh;
  padding-right: 40px;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 5px 10px;
  border-radius: 20px;
  .icon {
    font-size: 24px;
    margin-right: 20px;
  }
  .active {
    color: blue;
  }
  &:hover {
    background-color: ${primary};
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const StyledLogo = styled(Logo)`
  height: 60px;
`;

export default Sidebar;
