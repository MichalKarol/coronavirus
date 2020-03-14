import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.StandardHeader}>
        <nav className={styles.links}>
          <NavLink
            to="/"
            exact
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Na żywo"
          >
            Na żywo
          </NavLink>
          <NavLink
            to="/whatif"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Co jeśli mam koronawirusa"
          >
            Co jeśli mam koronawirusa
          </NavLink>
          <NavLink
            to="/factcheck"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Fakty i mity"
          >
            Fakty i mity
          </NavLink>
          <NavLink
            to="/onlinedelivery"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Zakupy i jedzenie na dowóz"
          >
            Zakupy i jedzenie na dowóz
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
