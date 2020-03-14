import React from "react";
import styles from "./WhatIf.module.css";
import Helmet from "react-helmet";

export function WhatIf() {
  return (
    <div className={styles.WhatIf}>
      <Helmet>
        <title>Co jeśli mam koronawirusa</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Wskazówki dla osób poderzewających u siebie koronawirusa"
        />
        <link rel="canonical" href="http://koronawiruswpl.pl/whatif" />
      </Helmet>
      <h1>Co jeśli mam koronawirusa</h1>
      <section className={styles.Section}>
        <h2>Podejrzewasz u siebie koronawirusa?</h2>
        Sprawdź, czy spełniasz 3 warunki, które świadczą o ryzyku:
        <ul>
          <li>
            w ciągu ostatnich 14 dni przebywałeś na obszarach objętych wirusem
            bądź miałeś
          </li>
          kontakt z osobą zarażoną,
          <li>masz podwyższoną temperaturę, </li>
          <li>kaszlesz i masz</li>
          duszności.
        </ul>
      </section>
      <section className={styles.Section}>
        <h2>
          Masz objawy i wróciłeś z regionu, w którym występuje koronawirus?
        </h2>
        Jeśli w ciągu ostatnich 14 dni wróciłeś z kraju, w którym występuje
        koronawirus i masz takie objawy, jak: gorączka, kaszel, duszności, lub
        miałeś kontakt z osobą, u której potwierdzono zakażenie:
        <ul>
          <li>
            bezzwłocznie powiadom telefonicznie stację
            sanitarno-epidemiologiczną&nbsp;
            <a
              href="http://gis.gov.pl/mapa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lista stacji epidemiologicznych"
            >
              Lista stacji epidemiologicznych
            </a>
          </li>
          LUB
          <li>
            zgłoś się do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego,
            gdzie określony zostanie dalszy tryb postępowania medycznego.&nbsp;
            <a
              href="https://www.gov.pl/web/koronawirus/lista-szpitali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lista szpitali zakaźnych"
            >
              Lista szpitali zakaźnych
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.Section}>
        <h2>Ogólnodostępne infolinie</h2>
        <p>
          NFZ:&nbsp;
          <b>
            <a href="tel:800190590">800 190 590</a>
          </b>
        </p>
        <p>
          PZU:&nbsp;
          <b>
            <a href="tel:225051188">22 505 11 88 </a>
          </b>
        </p>
        <p>
          LUXMED:&nbsp;
          <b>
            <a href="tel:223381903">22 338 19 03</a>
          </b>
        </p>
      </section>
      <div className={styles.FactCheckGrid}></div>
      Źródła:&nbsp;
      <a
        href="https://www.gov.pl/web/koronawirus/porady"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="gov.pl"
      >
        gov.pl
      </a>
      ,&nbsp;
      <a
        href="https://www.luxmed.pl/dla-pacjentow/zdrowie-w-4-krokach/zdrowie-na-co-dzien/koronawirus/informacje-dla-pacjentow.html?utm_source=banner001&utm_medium=slider001&utm_campaign=koronawirus001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="luxmed.pl"
      >
        luxmed.pl
      </a>
    </div>
  );
}
