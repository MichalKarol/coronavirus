import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MobileHeader}>
        <nav className={styles.links}>
          <NavLink
            to="/"
            exact
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Na żywo"
          >
            <div>Live</div>
          </NavLink>
          <NavLink
            to="/whatif"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Co jeśli mam koronawirusa"
          >
            <div>Co jeśli?</div>
          </NavLink>
          <NavLink
            to="/factcheck"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Fakty i mity"
          >
            <div>Fakty&nbsp;i mity</div>
          </NavLink>
          <NavLink
            to="/onlinedelivery"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Zakupy i jedzenie na dowóz"
          >
            <div>Dowóz</div>
          </NavLink>
        </nav>
      </div>
      <div className={styles.StandardHeader}>
        <nav className={styles.links}>
          <NavLink
            to="/"
            exact
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Na żywo"
          >
            <div>Na żywo</div>
          </NavLink>
          <NavLink
            to="/whatif"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Co jeśli mam koronawirusa"
          >
            <div>Co jeśli mam koronawirusa</div>
          </NavLink>
          <NavLink
            to="/factcheck"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Fakty i mity"
          >
            <div>Fakty i mity</div>
          </NavLink>
          <NavLink
            to="/onlinedelivery"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Zakupy i jedzenie na dowóz"
          >
            <div>Zakupy i jedzenie na dowóz</div>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
