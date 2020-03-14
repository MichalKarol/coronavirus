import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      Stworzone&nbsp;przez&nbsp;
      <a
        href="https://github.com/MichalKarol"
        target="blank"
        rel="nooperner noreferer"
        aria-label="mkarol"
      >
        mkarol
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href="mailto://michal.p.karol@gmail.com" aria-label="kontakt">
        kontakt
      </a>
      &nbsp;&nbsp;&nbsp;
      <a
        href="https://github.com/MichalKarol/coronavirus/issues"
        target="blank"
        rel="nooperner noreferer"
        aria-label="poproś o zmianę"
      >
        poproś o zmianę
      </a>
    </footer>
  );
}
