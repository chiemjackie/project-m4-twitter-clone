import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Sidebar from "./Sidebar";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./Tweet/TweetDetails";
import Profile from "./Profile/index";
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
                <HomeFeed from="homefeed" profileId={undefined} />
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
              <Route exact path="/profile/:profileId">
                <Profile />
              </Route>
            </Switch>
          </>
        ) : (
          <CircularProgress />
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
