import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import Sidebar from "./Sidebar";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import { CurrentUserContext } from "./CurrentUserContext";

function App() {
  const { status } = useContext(CurrentUserContext);

  return (
    <Main>
      <Router>
        <GlobalStyles />
        {status === "idle" ? (
          <>
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <HomeFeed />
              </Route>
              <Route exact path="/notifications">
                <Notifications />
              </Route>
              <Route exact path="/bookmarks">
                <Bookmarks />
              </Route>
              <Route exact path="/tweet/:tweetId">
                <TweetDetails />
              </Route>
              <Route exact path="/users/:profileId">
                <Profile />
              </Route>
            </Switch>
          </>
        ) : (
          <div>Loading</div>
        )}
      </Router>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  width: 80%;
  margin: 50px auto;
`;

export default App;
