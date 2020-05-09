import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as MenuSVG } from "../../assets/menu.svg";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Na żywo", mobileName: "Live", url: "/" },
    {
      name: "Co jeśli mam koronawirusa",
      mobileName: "Co jeśli?",
      url: "/whatif",
    },
    {
      name: "Pomoc lokalnie",
      mobileName: "Pomoc lokalnie",
      url: "/helplocally",
    },
    { name: "Poza granicami", mobileName: "Poza granicami", url: "/travel" },
    { name: "Fakty i mity", mobileName: "Fakty i mity", url: "/factcheck" },
    {
      name: "Zakupy i jedzenie na dowóz",
      mobileName: "Dowóz",
      url: "/onlinedelivery",
    },
  ];

  return (
    <header className={styles.Header}>
      <div className={styles.MobileHeader}>
        <nav className={styles.links}>
          {links.slice(0, 3).map((link) => (
            <NavLink
              key={link.url}
              to={link.url}
              exact={link.url === "/" ? true : undefined}
              className={styles.navitem}
              activeClassName={styles.active}
              aria-label={link.mobileName}
              onClick={() => setMenuOpen(false)}
            >
              <div>{link.mobileName}</div>
            </NavLink>
          ))}
          <button
            className={styles.MobileMenuButton}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <MenuSVG />
          </button>
          {isMenuOpen && (
            <div className={styles.MobileMenu}>
              {links.slice(3, links.length).map((link) => (
                <NavLink
                  key={link.url}
                  to={link.url}
                  exact={link.url === "/" ? true : undefined}
                  className={styles.navitem}
                  activeClassName={styles.active}
                  aria-label={link.mobileName}
                  onClick={() => setMenuOpen(false)}
                >
                  <div>{link.mobileName}</div>
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </div>
      <div className={styles.StandardHeader}>
        <nav className={styles.links}>
          {links.map((link) => (
            <NavLink
              key={link.url}
              to={link.url}
              exact={link.url === "/" ? true : undefined}
              className={styles.navitem}
              activeClassName={styles.active}
              aria-label={link.name}
            >
              <div>{link.name}</div>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
