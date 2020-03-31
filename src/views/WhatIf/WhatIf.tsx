import React from "react";
import styles from "./WhatIf.module.css";
import Helmet from "react-helmet";
import { ReactComponent as PhoneSVG } from "../../assets/phone.svg";

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
        <link rel="canonical" href="https://koronawiruswpl.pl/whatif" />
      </Helmet>
      <h1>Co jeśli mam koronawirusa</h1>
      <section className={styles.Section}>
        <h2 className={styles.SectionTitle}>
          Podejrzewasz u siebie koronawirusa?
        </h2>
        Źle się czujesz, masz gorączkę, kaszlesz, trudno Ci oddychać?
        Podejrzewasz, że to koronawirus? Zachowaj spokój i dowiedz się, co
        zrobić. Jeśli masz takie objawy, jak:
        <ul>
          <li>katar,</li>
          <li>stan podgorączkowy (temperatura ciała pomiędzy 37°C a 38°C),</li>
          <li>objawy przeziębieniowe,</li>
        </ul>
        zadzwoń do najbliższej stacji sanitarno-epidemiologicznej lub skorzystaj
        z teleporady u swojego lekarza POZ. Objawami choroby COVID-19
        wywoływanej przez koronawirusa (SARS-CoV-19) mogą być również:
        <ul>
          <li>gorączka,</li>
          <li>kaszel,</li>
          <li>duszności i kłopoty z oddychaniem,</li>
          <li>bóle mięśni i ogólne zmęczenie,</li>
        </ul>
      </section>
      <section className={styles.Section}>
        <h2 className={styles.SectionTitle}>Jeśli masz takie objawy</h2>
        <ul>
          <li>
            <p>
              <strong>zadzwoń</strong> natychmiast do najbliższej stacji
              sanitarno-epidemiologicznej i powiedz o swoich objawach;
            </p>
            <a
              href="http://gis.gov.pl/mapa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lista stacji epidemiologicznych"
            >
              Lista stacji epidemiologicznych
            </a>
          </li>
          <li>
            <p>
              <strong>własnym środkiem transportu</strong> pojedź do szpitala z
              oddziałem zakaźnym lub oddziałem obserwacyjno-zakaźnym, gdzie
              lekarze określą dalszy tryb postępowania medycznego. Pod żadnym
              pozorem nie korzystaj ze środków komunikacji publicznej czy
              taksówek – w ten sposób narażasz innych na zakażenie.
            </p>
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
        <p>
          Jeśli miałeś kontakt z osobą zakażoną koronawirusem lub chorą, to
          natychmiast zadzwoń do stacji sanitarno-epidemiologicznej i powiadom o
          swojej sytuacji. Otrzymasz informację, jak masz dalej postępować.
        </p>
        <p>
          Jeśli wróciłeś z zagranicy przed 15 marca, czyli przed wprowadzeniem
          obowiązkowej kwarantanny dla wszystkich podróżnych powracających do
          Polski, i obecnie nie jesteś objęty obowiązkową kwarantanną i nie masz
          objawów choroby, mimo wszystko przez 14 dni od powrotu do kraju
          kontroluj codziennie swój stan zdrowia. Mierz temperaturę, zwróć uwagę
          na to, czy kaszlesz albo czy masz trudności z oddychaniem. Ogranicz
          kontakt z innymi. Pamiętaj, że możesz przechodzić chorobę bezobjawowo
          i możesz zarażać innych. Jeśli tylko zaobserwujesz któryś z objawów
          choroby, zadzwoń natychmiast do stacji sanitarno-epidemiologicznej.
          Każdy pacjent manifestujący objawy ostrej infekcji dróg oddechowych (
          <strong>gorączka powyżej 38°C wraz z kaszlem lub dusznością</strong>)
          w powiązaniu z kryteriami epidemiologicznymi powinien ponadto trafić
          do oddziału zakaźnego lub obserwacyjno-zakaźnego.
        </p>
        <p>
          Jeśli zaobserwujesz takie objawy,{" "}
          <strong>własnym środkiem transportu</strong> pojedź do szpitala z
          oddziałem zakaźnym lub oddziałem obserwacyjno-zakaźnym. Jeśli nie
          możesz dotrzeć do szpitala własnym transportem, to lekarz POZ (w
          ramach teleporady) i stacja sanitarno-epidemiologiczna mają możliwość
          zlecenia dla Ciebie transportu sanitarnego.
        </p>
      </section>
      <section className={styles.Section}>
        <h2 className={styles.SectionTitle}>Ogólnodostępne infolinie</h2>
        <p>
          NFZ:&nbsp;
          <b>
            <a href="tel:800190590">
              <PhoneSVG className={styles.SVGLine} />
              800 190 590
            </a>
          </b>
        </p>
        <p>
          PZU:&nbsp;
          <b>
            <a href="tel:225051188">
              <PhoneSVG className={styles.SVGLine} />
              22 505 11 88{" "}
            </a>
          </b>
        </p>
        <p>
          LUXMED:&nbsp;
          <b>
            <a href="tel:223381903">
              <PhoneSVG className={styles.SVGLine} />
              22 338 19 03
            </a>
          </b>
        </p>
      </section>
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
