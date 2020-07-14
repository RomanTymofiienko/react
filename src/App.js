import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profail from "./components/Profail/Profail";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/User/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav sidebar={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route exact path="/Profail" render={() => <Profail />} />
          <Route
            exact
            path="/Dialogs"
            render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}
          />
          <Route exact path="/Music" render={() => <Music />} />
          <Route exact path="/News" render={() => <News />} />
          <Route exact path="/User" render={() => <UsersContainer />} />
          <Route exact path="/Settings" render={() => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
