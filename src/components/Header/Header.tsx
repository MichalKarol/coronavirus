import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as MenuSVG } from "../../assets/menu.svg";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
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
            onClick={() => setMenuOpen(false)}
          >
            <div>Live</div>
          </NavLink>
          <NavLink
            to="/whatif"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Co jeśli mam koronawirusa"
            onClick={() => setMenuOpen(false)}
          >
            <div>Co jeśli?</div>
          </NavLink>
          <NavLink
            to="/onlinedelivery"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Poza granicami"
            onClick={() => setMenuOpen(false)}
          >
            <div>Poza granicami</div>
          </NavLink>
          <button
            className={styles.MobileMenuButton}
            onClick={() => setMenuOpen(s => !s)}
          >
            <MenuSVG />
          </button>
          {isMenuOpen && (
            <div className={styles.MobileMenu}>
              <NavLink
                to="/factcheck"
                className={styles.navitem}
                activeClassName={styles.active}
                aria-label="Fakty i mity"
                onClick={() => setMenuOpen(false)}
              >
                <div>Fakty&nbsp;i mity</div>
              </NavLink>
              <NavLink
                to="/onlinedelivery"
                className={styles.navitem}
                activeClassName={styles.active}
                aria-label="Zakupy i jedzenie na dowóz"
                onClick={() => setMenuOpen(false)}
              >
                <div>Dowóz</div>
              </NavLink>
            </div>
          )}
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
            to="/travel"
            className={styles.navitem}
            activeClassName={styles.active}
            aria-label="Poza granicami"
          >
            <div>Poza granicami</div>
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
