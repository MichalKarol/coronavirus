import React from "react";
import styles from "./App.module.css";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LiveFeed } from "./views/LiveFeed/LiveFeed";
import { FactCheck } from "./views/FactCheck/FactCheck";
import { OnlineDelivery } from "./views/OnlineDelivery/OnlineDelivery";
import { Travel } from "./views/Travel/Travel";
import { HelpLocally } from "./views/HelpLocally/HelpLocally";

function App() {
  return (
    <div className={styles.App}>
      <Helmet>
        <title>Koronawirus w Polsce</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Agregator informacji o koronawirusie w Polsce"
        />
        <link rel="canonical" href="https://koronawiruswpl.pl/" />
      </Helmet>
      <Router>
        <Header />
        <div className={styles.Content}>
          <Switch>
            <Route path="/factcheck">
              <FactCheck />
            </Route>
            <Route
              path="/whatif"
              render={(props: RouteComponentProps<any>) => {
                window.open(
                  "https://www.gov.pl/web/koronawirus/podejrzewasz-u-siebie-koronawirusa",
                  "_blank",
                  "noreferrer noopener"
                );
                return <Redirect to="/" />;
              }}
            />
            <Route path="/onlinedelivery">
              <OnlineDelivery />
            </Route>
            <Route path="/travel">
              <Travel />
            </Route>
            <Route path="/helplocally">
              <HelpLocally />
            </Route>
            <Route exact path="/">
              <LiveFeed />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
